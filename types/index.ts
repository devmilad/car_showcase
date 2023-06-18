
import { MouseEventHandler } from "react";

export interface customButtonProps {
    title: string,
    containerStyles ?: string,
    handleClick ?: MouseEventHandler<HTMLButtonElement>,
    btnType ?: "button" | "submit",
    textStyles ?: string,
    rightIcon?: string,
    isDisabled ?: boolean
}

export interface OptionProps {
    title: string,
    value: string,
}

export interface FilterProp {
    title : string,
    options: OptionProps[]
}

export interface SearchManufacturerProps {
    manufacturer: string,
    setManufacturer: (manufacturer: string) => void,
}
export interface FilterProps {
    manufacturer?: string,
    year?: number,
    model?: string,
    limit?: number,
    fuel?: string,
  }
  
  export interface HomeProps {
    searchParams: FilterProps;
  }
  
export interface CarProps {
    city_mpg:number,
    class:string,
    combination_mpg:24,
    cylinders:number,
    displacement:number,
    drive:string,
    fuel_type:string,
    highway_mpg:number,
    make:string,
    model:string,
    transmission:string,
    year: number
}

export interface ShowMoreProps {
    pageNumber : number,
    isNext: boolean
}