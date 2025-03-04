type PageConfig = {
  className ?: string;
  isShown ?: boolean;
  isActive ?: boolean;
  isShowFooter ?: boolean;
};

type RequiredPageConfig = Required<PageConfig>;

export type { PageConfig, RequiredPageConfig};
