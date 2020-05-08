import { Directive, Injectable, Input, EventEmitter, Output, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[scrollSpy]'
})
export class ScrollSpyDirective {
    @Input() public spiedTags = [];
    @Output() public sectionChange = new EventEmitter<string>();
    private currentSection: string;

    constructor(private _el: ElementRef) {}

    @HostListener('window:scroll', ['$event'])
    onScroll(event: any) {
        let currentSection: string;
        const children = this._el.nativeElement.children;
        const scrollTop = event.target.scrollTop;
        const parentOffset =children[0].offsetTop;
        
        for (let i = 0; i < children.length; i++) {
            const element = children[i];
            console.log(element.id)
            if (this.spiedTags.some(spiedTag => spiedTag === element.tagName)) {
                // console.log((element.offsetTop - parentOffset) <= window.scrollY)
                if ((element.offsetTop - parentOffset) <= window.scrollY) {
                    
                    //  console.log((element.offsetTop - parentOffset) <= window.scrollY)
                    currentSection = element.id;
                    
                //    console.log(element.id)
                   
                }
            }
        }
        //  console.log(currentSection !== this.currentSection)
        if (currentSection !== this.currentSection) {
            this.currentSection = currentSection;
            
            this.sectionChange.emit(this.currentSection);
            console.log(this.currentSection)
        }
    }

}
