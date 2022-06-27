import { Component, h } from '@stencil/core';


@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  theList: any[];
  async componentWillRender() {
  
    let getApi=await fetch('https://jsonplaceholder.typicode.com/users',{
      method:'GET'})
         this.theList=await getApi.json()
  }
  render() { 
     return <div>
        {this.theList.map((item:any={})=>
        <div>
          {item.id} {item.name}
         </div>
         )}
        </div>
  }
}
