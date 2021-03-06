# ReactSnippet: How To

---

## Build A Responsive NAVBAR in React

---

### Description
Building a navigation bar that displays all your links in one horizontal row on larger screens or vertically on smaller screens.
We're going to create the following navbar
* for large screen
  <img src="img/4.png" width="100%"><br/>
* for small screen<br/>
  <img src="img/5.png" width="50%"><br/>
  <img src="img/6.png" width="50%"><br/>


### Step 1
Create **components** folder in **src** folder for your components. If you're going to use **module.css** files for styling then add **Navbar** folder in **components** and create **index.js** and **Navbar.module.css** files there
<img src="img/1.png" width="100%"><br/>

### Step 2
* Type `rafce` in **index.js** for creating your component and change default code
<img src="img/2.png" width="100%"><br/>
* Import **Navbar** into **App.js**. We place it on top of the `Switch` in order to display it for each page
<img src="img/3.png" width="100%"><br/>

### Step 3
Give a structure for navbar in **index.js**
<img src="img/7.png" width="100%"><br/>
<img src="img/8.png" width="100%"><br/>
And style it in **Navbar.module.css**
<img src="img/9.png" width="100%"><br/>

### Step 4
Working on **'nav__logo'** part
* Replace `div` element on `h1` and add company name in **index.js**
```HTML
<h1 className={s.nav__logo}>
  Modern <span className='text-primary'>Design</span>
</h1>
```
Style it in **Navbar.module.css**
```CSS
.nav__logo {
  color: #fff;
  align-self: center;
}
```
Add `text-primary` class into **App.css** to highlight some parts
```CSS
.text-primary {
  color: #f77516;
}
```
* Add some icon from **[react-icons](https://react-icons.github.io/react-icons)**<br/>
Make sure you installed it (look at **package.json** file)
<img src="img/10.png" width="100%"><br/>
Add icon you chose into **index.js**
```Javascript
import { FaDraftingCompass } from 'react-icons/fa';

// your code

<h1 className={s.nav__logo}>
  <span className='text-primary'><FaDraftingCompass /></span>{" "}
  Modern <span className='text-primary'>Design</span>
</h1>
````
* Add a link for this item with **[react-router-dom](https://reactrouter.com/web/guides/quick-start)** (make sure you installed it)
```Javascript
import { Link } from 'react-router-dom';

// your code
<Link to='/'>
  <h1 className={s.nav__logo}>
    <span className='text-primary'><FaDraftingCompass /></span>{" "}
    Modern <span className='text-primary'>Design</span>
  </h1>
</Link>
````
<img src="img/11.png" width="100%"><br/>
<img src="img/12.png" width="100%"><br/>
<img src="img/13.png" width="100%"><br/>

### Step 5
Working on **'nav__burger'** part
* We will create separate component for this part - **Burger.js** in **Navbar** folder
````Javascript
import React from 'react';

import s from "./Navbar.module.css";

const Burger = () => {
    return (
        <div className={s.nav__burger}>
             Burger
        </div>
    )
}

export default Burger
````

* Add some icons for your *burger* when it is open and closed
```Javascript
import React from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

// then
  return (
        <div className={s.nav__burger}>
             <AiOutlineClose />
             <AiOutlineMenu />
        </div>
    )
}

export default Burger
````

* Import **Burger** component into **Navbar** component
```Javascript
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaDraftingCompass } from 'react-icons/fa';
import Burger from './Burger';

import s from "./Navbar.module.css";

//then

            <div className={s.nav__right}>
                <Burger />
                <ul className={s.nav__items}> </ul>
            </div>
        </nav>
    )
}
export default Navbar
````

* Style **Burger** component with `.nav__burger` class in **Navbar.module.css**
````CSS
.nav__burger {
  color: #f77516;
  font-size: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 20;
  display: block;
}
````

* In order to display **Burger** just for small screens (for example, maximum width 768px), add **media query** to describe it
````CSS
@media all and (min-width: 768px) {
  .nav__burger {
    display: none;
  }
}
````

* To open / close the menu when clicking, you need to add some state that will handle it
  * Add **state** for **Navbar** where `open` with initial value `false`, that means menu is closed (for this purpose use [`useState`](https://reactjs.org/docs/hooks-state.html) hook). Pass it into **Burger** component
  * Add `open, setOpen` as props into **Burger** (*Burger.js*). Depending on `open` value, the menu will be closed or opened. `open` value will be changed when you click on *burger* icon

````Javascript
import React, { useState } from 'react';

// then

const Navbar = () => {
    const [open, setOpen] = useState(false);

// then
                <Burger open={open} setOpen={setOpen}/>
````

and **Burger.js**
````Javascript
// your imports

const Burger = ({ open, setOpen }) => {
    return (
        <div open={open} onClick={() => setOpen(!open)} className={s.nav__burger}>
                {open ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>
    )
}

export default Burger
````

<img src="img/14.png" width="100%"><br/>
<img src="img/15.png" width="100%"><br/>
<img src="img/16.png" width="100%"><br/>

And we've got
<img src="img/17.png" width="100%"><br/>

### Step 6
Working on **'nav__items'** part
* Let's create it also as separate component -  **NavItems.js** in **Navbar** folder
````Javascript
import React from 'react';

import s from "./Navbar.module.css";

const NavItems = () => {
    return (
        <div>
            Items
        </div>
    )
}

export default NavItems
````

* Import **NavItems.js** into **Navbar.js**
````Javascript
//your imports

import NavItems from './NavItems';

// then

            <div className={s.nav__right}>
                <Burger open={open} setOpen={setOpen}/>
                <NavItems />
            </div>

// other code
````

* Add items for our **NavItems** as a list
````Javascript
// your imports

const NavItems = () => {
    return (
        <ul>
          <li>
              products
          </li>
          <li>
              my cart
          </li>
        </ul>
    )
}

export default NavItems
````

* Set a link for each items and add classes for styling
````Javascript
import React from 'react';
import { Link } from 'react-router-dom';

import s from "./Navbar.module.css";

const NavItems = () => {
    return (
        <ul className={s.nav__list}>
          <li>
            <Link to='/products' className={s.nav__link}>
              products
            </Link>
          </li>
          <li>
            <Link to='/cart'  className={s.nav__link}>
              my cart
            </Link>
          </li>
        </ul>
    )
}

export default NavItems
````

* Style your list of items in **Navbar.module.css** with `.nav__list` class
````CSS
.nav__list {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  list-style: none;
}

.nav__list a {
  text-decoration: none;
}
````

* Style your links with `.nav__link` class
````CSS
.nav__link {
  color: #fff;
  font-size: 1rem;
  text-transform: uppercase;
  padding: 0.5rem 2rem;
  margin: 0 0.25rem;
  cursor: pointer;
}

.nav__link:hover {
  background: #f77516;
  border-radius: 0.5rem;
}
````

* We want a different style for `cart` items. Therefore change its class on `.nav__cart` and style it
````Javascript
//code before

          <li>
            <Link to='/cart'  className={s.nav__cart}>
              my cart
            </Link>
          </li>

//code after
````

````CSS
.nav__cart {
  color: #f77516;
  font-size: 1rem;
  text-transform: uppercase;
  padding: 0.5rem 2rem;
  margin: 0 0.25rem;
  cursor: pointer;
  background: transparent;
  border: 0.05rem solid #f77516;
  border-radius: 0.5rem;
  transition: all 0.5s ease-in-out;
}

.nav__cart:hover {
  color: #fff;
  background: #f77516;
}
````

* Style our menu for small screen. In order to do this we will add **media query** for the list when menu is closed
````CSS
@media all and (max-width: 767px) {
  .nav__list {
    flex-flow: column nowrap;
    background: #333;
    position: fixed;
    top: 62px;
    right: -100%;
    height: 100vh;
    width: 20rem;
    padding-top: 3.5rem;
    opacity: 0;
    transition: all 0.5s ease-in-out;
  }

  li {
    padding: 1.125rem 0.625rem;
  }
}
````

* To display menu when it is opened we add class `.nav__active`
  * First, place it where we described `.nav__list`
  ````CSS
  .nav__list,
  .nav__active {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    list-style: none;
  }

  .nav__list a,
  .nav__active a {
    text-decoration: none;
  }
  ````
  * Style it for small screen
  ````CSS
  @media all and (max-width: 767px) {
    .nav__list,
    .nav__active {
      flex-flow: column nowrap;
      background: #333;
      position: fixed;
      top: 62px;
      right: -100%;
      height: 100vh;
      width: 20rem;
      padding-top: 3.5rem;
      opacity: 0;
      transition: all 0.5s ease-in-out;
    }

    .nav__active {
      right: 0;
      opacity: 1;
      transition: all 0.5s ease-in-out;
      z-index: 1;
      align-content: center;
    }

    li {
      padding: 1.125rem 0.625rem;
    }
  }
  ````
  
* To open / close the menu when clicking, we will use **state** as we did to handle *burger* icon
  * Pass **state** value into **NavItems** component in **Navbar**
  ````Javascript
  //code before

          <NavItems  open={open} setOpen={setOpen}/>

  //code after
  ````

  * Get state as props in **NavItems**
  ````Javascript
  //code before

  const NavItems = ({ open, setOpen }) => {

  //code after
  ````

  * Depending on **state** value, assign a class for the list of menu items (`.nav__list` or `nav__active`) 
  ````Javascript
  //code before

  const NavItems = ({ open, setOpen }) => {
    return (
        <ul className={open ? s.nav__active : s.nav__list}>

  //code after
  ````

  * When a user selected a menu item, close the menu by changing **state**
  ````Javascript
  //code before

    return (
        <ul className={open ? s.nav__active : s.nav__list}>
          <li onClick={() => setOpen(!open)}>
            <Link to='/products' className={s.nav__link}>
              products
            </Link>
          </li>
          <li onClick={() => setOpen(!open)}>
            <Link to='/cart'  className={s.nav__cart}>
              my cart
            </Link>
          </li>
        </ul>
    )

  //code after
  ````
  
Finally, our files look like <br />
<img src="img/18.png" width="100%"><br/>

<img src="img/19.png" width="100%"><br/>

<img src="img/20.png" width="100%">
<img src="img/21.png" width="100%">
<img src="img/22.png" width="100%"><br/>

### Your Navbar is ready 🌷 <br />
<img src="img/23.png" width="100%"><br/>
<img src="img/24.png" width="100%"><br/>
<img src="img/25.png" width="100%"><br/>

### Step 7
Adding more menu options to **NavItems (optional)
* We can simply add as many list items as we want
````Javascript
  //code before

    return (
        <ul className={open ? s.nav__active : s.nav__list}>
          <li onClick={() => setOpen(!open)}>
            <Link to='/about' className={s.nav__link}>
              about us
            </Link>
          </li>
          <li onClick={() => setOpen(!open)}>
            <Link to='/products' className={s.nav__link}>
              products
            </Link>
          </li>
          <li onClick={() => setOpen(!open)}>
            <Link to='/contact' className={s.nav__link}>
              contact
            </Link>
          </li>
          <li onClick={() => setOpen(!open)}>
            <Link to='/cart'  className={s.nav__cart}>
              my cart
            </Link>
          </li>
        </ul>
    )

  //code after
 ````
  
* There is a better way. We want to reduce the amount of code
  * Create an array of items. Each item as an object has `id`, `to` - link value, and `item` - item value
  ````Javascript
  //code before

    const NavItems = ({ open, setOpen }) => {
    const navData = [{id: 1, to: '/about', item: 'about us'},
                     {id: 2, to: '/products', item: 'products'},
                     {id: 3, to: '/contact', item: 'contact us'}];
    
    return (


  //code after 
  ````
 
  * Use **map** to display menu items
  ````Javascript
  //code before
  
    import React from 'react';
  import { Link } from 'react-router-dom';

  import s from "./Navbar.module.css";

  const NavItems = ({ open, setOpen }) => {
      const navData = [{id: 1, to: '/about', item: 'about us'},
                       {id: 2, to: '/products', item: 'products'},
                       {id: 3, to: '/contact', item: 'contact us'}];

    return (
        <ul className={open ? s.nav__active : s.nav__list}>
          { navData.map((element) => 
            <li key={element.id} onClick={() => setOpen(!open)}>
              <Link to={element.to} className={s.nav__link}>
                {element.item}
              </Link>
          </li>
          )}

          <li onClick={() => setOpen(!open)}>
            <Link to='/cart'  className={s.nav__cart}>
              my cart
            </Link>
          </li>
        </ul>
    )
  }

  export default NavItems

  //code after 
  ````

Now the menu looks like
<img src="img/26.png" width="100%"><br/>
<img src="img/27.png" width="100%"><br/>

Source files 📁 [here](https://github.com/andrewsinelnikov/ReactSnippet-How-To/tree/main/task4/src)

#### Got a question ❓   [✉️](https://twitter.com/Andrew79361148)

Want to know more? 👉 [Read next](https://github.com/andrewsinelnikov/ReactSnippet-How-To/blob/main/README.md)
