// // const hero = document.querySelector('[data-hero]')
// const hero = document.getElementById("landing__bg__layer")

// window.addEventListener('mousemove', (e) => {
//     const { clientX, clientY } = e
//     const x = Math.round((clientX / window.innerWidth) * 100)
//     const y = Math.round((clientY / window.innerHeight) * 100)

//     hero.style.setProperty('--x', `${x}%`)
//     hero.style.setProperty('--y', `${y}%`)

//     // calculate radius
//     // let radius = 100;

//     // const INCREMENT_FACTOR = 200;
//     // delX = Math.round(((Math.abs(window.innerWidth / 2 - clientX)) / window.innerWidth) * INCREMENT_FACTOR);
//     // delY = Math.round(((Math.abs(window.innerHeight / 2 - (clientY - scrollY)) / window.innerHeight) * INCREMENT_FACTOR);
//     // let radius = 50 + Math.max(delX, delY);
//     // console.log("delX: ", delX, " delY: ", delY);
//     // // console.log("radius -> ", radius);

//     // hero.style.setProperty('--radius', `${radius}px`)
// })

// window.addEventListener('mousemove', _.throttle(onMouseMove, 50))

// =========================================================

const hero = document.getElementById('landing__bg__layer')
const logoImageHeight = document.getElementById("logo-img").getClientRects()[0].height;

const onMouseMove = (e) => {
    const { clientX, clientY } = e
    console.log(scrollY);
    const x = Math.round((clientX / window.innerWidth) * 100)
    const y = Math.round(((clientY + scrollY) / window.innerHeight) * 100)

    hero.style.setProperty('--x', `${x}%`)
    hero.style.setProperty('--y', `${y}%`)
}

window.addEventListener('mousemove', _.throttle(onMouseMove, 100))