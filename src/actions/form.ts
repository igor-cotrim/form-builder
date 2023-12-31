"use server";

import { currentUser } from "@clerk/nextjs";

import { formSchema, formSchemaType } from "@/models";
import prisma from "@/lib/prisma";

class UserNotFoundErr extends Error {
  constructor() {
    super("User not found");
  }
}

export async function GetFormStats() {
  const user = await currentUser();

  if (!user) {
    throw new UserNotFoundErr();
  }

  const stats = await prisma.form.aggregate({
    where: { userId: user.id },
    _sum: { visits: true, submissions: true },
  });

  const visits = stats._sum.visits || 0;
  const submissions = stats._sum.submissions || 0;

  let submissionRate = 0;

  if (visits > 0) {
    submissionRate = (submissions / visits) * 100;
  }

  const bounceRate = 100 - submissionRate;

  return {
    visits,
    submissions,
    submissionRate,
    bounceRate,
  };
}

export async function CreateForm({ name, description }: formSchemaType) {
  const validation = formSchema.safeParse({ name, description });

  if (!validation.success) {
    throw new Error("form not valid");
  }

  const user = await currentUser();

  if (!user) {
    throw new UserNotFoundErr();
  }

  const form = await prisma.form.create({
    data: {
      userId: user.id,
      name,
      description,
    },
  });

  if (!form) {
    throw new Error("something went wrong");
  }

  return form.id;
}

export async function GetForms() {
  const user = await currentUser();

  if (!user) {
    throw new UserNotFoundErr();
  }

  return await prisma.form.findMany({
    where: { userId: user.id },
    orderBy: { createdAt: "desc" },
  });
}
