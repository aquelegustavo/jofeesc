import * as React from "react"

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      rel="preload"
      href="/fonts/CostaRica.otf"
      as="font"
      type="font/opentype"
      crossOrigin="anonymous"
      key="CostaRica"
    />,
  ])
}