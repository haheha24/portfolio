"use client";

import { useMemo } from "react";
import { useRouter } from "next/navigation";

const useHandleScroll = (
  id?: string,
  options?: { start?: boolean; push?: string }
) => {
  useMemo(() => {
    if (!options!.start) {
      const top =
        document.getElementById(id!)?.getBoundingClientRect()!.top! - 50;
      window.scrollTo({ top: top + window.scrollY, behavior: "smooth" });
      return () => {};
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (options!.push) {
      const router = useRouter();
      router.push(options!.push);
    }
    return () => {};
  }, []);
};
export default useHandleScroll;
