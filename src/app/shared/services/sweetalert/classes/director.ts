import { Builder } from "../../../../models/alert.model";

export class Director {
    private builder!: Builder;

    public setBuilder(builder: Builder): void{
        this.builder = builder;
    }

    public buildBasicTextAlert(title: string, text: string, icon: string): void{
        this.builder.setTitle(title);
        this.builder.setText(text);
        this.builder.setIcon(icon);
    }

    public buildBasicHtmlAlert(title: string, html: string, icon: string): void{
        this.builder.setTitle(title);
        if(this.builder.setHtml) this.builder.setHtml(html);
        this.builder.setIcon(icon);
    }

}
