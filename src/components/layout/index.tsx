// ./components/layout/index.tsx
import { FC } from 'react'
import { IFooterProps, Footer } from '../footer/index'
import { INavBarProps, NavBar } from '../navbar/index'
import styles from './styles.module.scss'
// import React from "react";

export interface ILayoutProps {
  navbarData: INavBarProps
  footerData: IFooterProps
}

export const Layout: FC<ILayoutProps & { children: React.ReactNode }> = ({
  navbarData,
  footerData,
  children
}) => {
  return (
    <div className={styles.layout}>
      <NavBar {...navbarData} />
      <main className={styles.main}>{children}</main>
      <Footer {...footerData} />
    </div>
  )
}
