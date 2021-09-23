const ul = document.getElementById('navbar__list'),
    sections = document.querySelectorAll('section'),
    fragment = document.createDocumentFragment();

sections.forEach((section)=>{ 
    const list = document.createElement("li");
    const anchor = document.createElement("a");
    const textContent =section.getAttribute('data-nav');
    console.log(textContent)
    anchor.textContent = textContent;
    anchor.setAttribute('href', '#');
    list.appendChild(anchor);
    list.appendChild(anchor);
    fragment.appendChild(list);
}
)

ul.appendChild(fragment);

const observerFunction = function(entries){

    if (entries[0].isIntersecting){
        document.querySelectorAll('a')[k].classList.add('background');
    }else if(entries[0].isIntersecting == false){
        document.querySelectorAll('a')[k].classList.remove('background');
    }  
};



for(let k = 0;k<=3;k++)  {
    window.addEventListener('scroll',()=>{
        const observerFunction = function(entries){
    
            const id = entries[0].target.firstElementChild.textContent;
            if (entries[0].isIntersecting){
                document.querySelectorAll('a')[k].classList.add('background');
            }else if(entries[0].isIntersecting == false){
                document.querySelectorAll('a')[k].classList.remove('background');
            }  
        };
        const observer = new IntersectionObserver(observerFunction,{
            threshold: 0.6
        });
        observer.observe(sections[k]);       
    })
}
// the function below when it be called it scroll to the section    
const scrollToSection = (eve)=> {
    const id = eve.target.textContent;
    eve.target.removeAttribute('href');
    const index = id.slice(8,9); // this line to extract the number of the section
    chosenSection = document.querySelectorAll('section')[index-1];
    chosenSection.scrollIntoView({block:'center', behavior:'smooth'})
};
ul.addEventListener('click',scrollToSection)



//for adding text content into div

sections.forEach((section)=>{
    let div = document.createElement("div");
    div.classList.add("landing__container");
    let index = section.getAttribute("id").slice(7,8);
    heading = document.createElement('h2');
    heading.textContent = `Section ${index}`
    firstpara = document.createElement("p");
    firstpara.textContent = ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod';
    secondpara = document.createElement("p");
    secondpara.textContent = 'Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.';
    div.appendChild(heading);
    div.appendChild(firstpara);
    div.appendChild(secondpara);
    section.appendChild(div);
})
