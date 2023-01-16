export interface NavItem {
    title: string,
    routerLink?: string,
    icon?:string,
    children? : NavItem[]
}
