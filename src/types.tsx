export interface IEmoji {
    name: string,
    category: string,
    group: string,
    htmlCode: string[],
    unicode: string[]
  }

export interface IEmojiCard {
    index: number, 
    name: string
}

type FormDataCategory = {
    name: string,
    value: string
}

type FormDataNumber = {
    value: string
}


export interface IFormData {
    category: FormDataCategory[],
    number: FormDataNumber[]
}

export interface IFormDataSelection{
    category:string,
    number:number
}
