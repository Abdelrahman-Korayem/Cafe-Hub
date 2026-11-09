"use client";

import { createContext, useContext, useState } from "react";

type BranchScopeValue = {
  branches: string[];
  branch: string;
  setBranch: (branch: string) => void;
  isAll: boolean;
};

const BranchScopeContext = createContext<BranchScopeValue | null>(null);

// By convention, the first item in `branches` is the "All Branches" option.
export function BranchScopeProvider({
  branches,
  children,
}: {
  branches: string[];
  children: React.ReactNode;
}) {
  const [branch, setBranch] = useState(branches[0]);

  return (
    <BranchScopeContext.Provider
      value={{ branches, branch, setBranch, isAll: branch === branches[0] }}
    >
      {children}
    </BranchScopeContext.Provider>
  );
}

export function useBranchScope() {
  const ctx = useContext(BranchScopeContext);
  if (!ctx) {
    throw new Error("useBranchScope must be used inside <BranchScopeProvider>");
  }
  return ctx;
}