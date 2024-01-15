import { Builder } from "../../../models/alert.model";
import { Alert } from "./alert";


//ConcreteBuilder
export class BasicAlert implements Builder{

    private product!: Alert;
    
    constructor(){
        this.reset();
    }

    public reset(): void{
        this.product = new Alert();
    }

    public setTitle(title: string): void {
        this.product.parts['title'] = title;
    }

    public setText(text: string): void {
        this.product.parts['text'] = text;
    }

    public setHtml(html: string): void {
        this.product.parts['html'] = html;
    }

    public setIcon(icon: string): void {
        this.product.parts['icon'] = icon;
    }


    public getProduct(): Alert {
        const result = this.product;
        this.reset();
        return result;
    }

}
