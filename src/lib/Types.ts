import { Url } from "next/dist/shared/lib/router/router";
import { Key } from "react";

export interface IListRoute  {
    id    : Key,
    icon  : JSX.Element,
    link  : Url,
    title : String,
}

export interface IListStatus  {
    title       : String,
    post        : number,
    link        : Url,
    icon        : JSX.Element,
    iconButton  : JSX.Element,
}

export interface ILayout {
    children : React.ReactNode
}