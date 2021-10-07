export interface Feature {
  name: string
  description: string
  icon: any
}

export interface NavItem {
  name: string
  href: string
  icon?: any
}

export interface Navigation {
  primary?: NavItem[]
  solutions?: NavItem[]
  support?: NavItem[]
  company?: NavItem[]
  legal?: NavItem[]
  social?: NavItem[]
}
