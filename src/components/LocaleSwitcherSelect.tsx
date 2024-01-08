"use client";

import { ChangeEvent, useTransition } from "react";
import clsx from "clsx";
import { useRouter, usePathname } from "../navigation";

type Props = {
  children: React.ReactNode;
  defaultValue: string;
  label: string;
};

function LocaleSwitcherSelect({ children, defaultValue, label }: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();

  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value;

    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  }

  return (
    <label
      className={clsx(
        "relative items-center text-gray-400",
        isPending && "transition-opacity [&:disabled]:opacity-30"
      )}
    >
      <p className="sr-only ">{label}</p>
      <select
        className="inline-flex items-center py-3 pl-2 pr-6 bg-transparent appearance-none"
        defaultValue={defaultValue}
        disabled={isPending}
        onChange={onSelectChange}
      >
        {children}
      </select>
    </label>
  );
}

export default LocaleSwitcherSelect;
