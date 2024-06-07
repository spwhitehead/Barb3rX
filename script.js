// document.getElementById("gentleman").addEventListener("click", (e) => {
//     window.open();
// });

const services = [
    {
        id: "gentleman",
        imgUrl: "images/pic-1.jpg",
        imgAlt: "woman-cutting-hair",
        serviceName: "Gentleman's Haircut",
        serviceDescription: "This is a Regular Classic Gentleman's Haircut to achieve desired Length on both top and sides of head. Hair is tapered around ears, back and or sideburns as necessary to achieve desired hair style.",
        bookingUrl: "https://book.squareup.com/appointments/zbjlzmystspuop/location/GM5ZRS3QEHH3W/services/XFAF4O7V6WNQPS2MSUINBF2V",
    },
    {
        id: "gentleman",
        imgUrl: "images/pic-1.jpg",
        imgAlt: "woman-cutting-hair",
        serviceName: "Gentleman's Haircut",
        serviceDescription: "This is a Regular Classic Gentleman's Haircut to achieve desired Length on both top and sides of head. Hair is tapered around ears, back and or sideburns as necessary to achieve desired hair style.",
        bookingUrl: "https://book.squareup.com/appointments/zbjlzmystspuop/location/GM5ZRS3QEHH3W/services/XFAF4O7V6WNQPS2MSUINBF2V",
    },
    {
        id: "gentleman",
        imgUrl: "images/pic-1.jpg",
        imgAlt: "woman-cutting-hair",
        serviceName: "Gentleman's Haircut",
        serviceDescription: "This is a Regular Classic Gentleman's Haircut to achieve desired Length on both top and sides of head. Hair is tapered around ears, back and or sideburns as necessary to achieve desired hair style.",
        bookingUrl: "https://book.squareup.com/appointments/zbjlzmystspuop/location/GM5ZRS3QEHH3W/services/XFAF4O7V6WNQPS2MSUINBF2V",
    },
    {
        id: "gentleman",
        imgUrl: "images/pic-1.jpg",
        imgAlt: "woman-cutting-hair",
        serviceName: "Gentleman's Haircut",
        serviceDescription: "This is a Regular Classic Gentleman's Haircut to achieve desired Length on both top and sides of head. Hair is tapered around ears, back and or sideburns as necessary to achieve desired hair style.",
        bookingUrl: "https://book.squareup.com/appointments/zbjlzmystspuop/location/GM5ZRS3QEHH3W/services/XFAF4O7V6WNQPS2MSUINBF2V",
    },
]

const makeServiceElement = (service) => {
    let singleService = document.createElement("div");
    singleService.innerHTML = `
                <img src="${service.imgUrl}" alt="${service.imgAlt}">
                <div class="overlay"></div>
                <div class="service-desc">
                    <h3>${service.serviceName}</h3>
                    <hr>
                    <p>${service.serviceDescription}</p>
                </div>`;
    singleService.className = "single-service";
    singleService.addEventListener("click", (e) => window.open(service.bookingUrl));
    return singleService;
};

document.addEventListener("DOMContentLoaded", () => {
    let serviceBox = document.getElementById("service-box");
    for (let service of services) {
        let singleService = makeServiceElement(service);
        serviceBox.appendChild(singleService);
    }
});