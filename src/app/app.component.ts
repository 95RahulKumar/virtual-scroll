import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { MatExpansionPanel } from '@angular/material/expansion';
import { MatExpansionModule } from '@angular/material/expansion';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,ScrollingModule,CdkVirtualScrollViewport,MatExpansionPanel,MatExpansionModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'virtaul-scroll';
  @ViewChild('viewport') viewport!: CdkVirtualScrollViewport;
  items = Array.from({ length: 1000 }, (_, i) => ({
    id: i,
    title: `Item ${i + 1}`,
    content: `This is the content for item ${i + 1}`,
    expanded: false // track expansion state per item
  }));


  trackByFn(index: number, item: any) {
  return item.id ?? index; // ensure each item has a stable unique id
}
  setExpanded(index: number, expanded: boolean) {
    // Collapse all other items if only one should be open
    if (expanded) {
      this.items.forEach((item, i) => item.expanded = (i === index));
    } else {
      this.items[index].expanded = false;
    }
  }

  
}
