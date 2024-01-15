export interface Builder{
    setTitle(title: string): void;
    setText(text: string): void;
    setHtml?(html: string): void;
    setIcon(icon: string): void;
    setFooter?(footer: string): void;
}