"use client"
import "./globals.css"
import React, { useState } from 'react';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ConfigProvider, theme,  Switch } from 'antd';
import { BsMoonStars } from "react-icons/bs";
import { MdOutlineWbSunny } from "react-icons/md";
import { ThemeProvider } from "../components/theme-provider/ThemeProvider";

const { darkAlgorithm, defaultAlgorithm } = theme;

const RootLayout = ({ children }: React.PropsWithChildren) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <html lang="en">
      <ThemeProvider>
          <AntdRegistry>
            {children}
          </AntdRegistry>
      </ThemeProvider>
    </html>
  );
};

export default RootLayout;
