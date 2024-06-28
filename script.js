// document.getElementById("gentleman").addEventListener("click", (e) => {
//     window.open();
// });

const services = [
    {
        id: "gentlemanscut",
        imgUrl: "images/pic-1.jpg",
        imgAlt: "woman-cutting-hair",
        serviceName: "Gentleman's Haircut",
        serviceDescription: "This is a Regular Classic Gentleman's Haircut to achieve desired Length on both top and sides of head. Hair is tapered around ears, back and or sideburns as necessary to achieve desired hair style.",
        bookingUrl: "https://book.squareup.com/appointments/zbjlzmystspuop/location/GM5ZRS3QEHH3W/services",
    },
    {
        id: "beardtrim",
        imgUrl: "images/pic-2.jpg",
        imgAlt: "beard-trim-with-razor-line-up",
        serviceName: "Beard Trim w/ Razor Line Up",
        serviceDescription: "This is a full service beard trim, including cutting the length of the beard and shaping/trimming the beard with clippers. it also includes a straight razor line up. A fresh steamed hot towel and pre-shave oils/skin tonic or shave gel is used in service as needed. Finished with aftershave and lotion.",
        bookingUrl: "https://book.squareup.com/appointments/zbjlzmystspuop/location/GM5ZRS3QEHH3W/services",
    },
    {
        id: "",
        imgUrl: "images/pic-3.jpg",
        imgAlt: "barber-spraying-water",
        serviceName: "Straight Razor Fade",
        serviceDescription: "This is a fade using traditional barber straight razor and other tools such as foil shaver as necessary. Includes pre-shave oil, warm shave lather, shave gel, hot towel, skin-tonic, and aftershave lotion as needed.",
        bookingUrl: "https://book.squareup.com/appointments/zbjlzmystspuop/location/GM5ZRS3QEHH3W/services",
    },
    {
        id: "gentleman",
        imgUrl: "images/pic-4.jpg",
        imgAlt: "military/senior haircut",
        serviceName: "Military/Senior Haircut",
        serviceDescription: "A haircut or fade with a special discount to show appreciation for all US Military Active Duty and Veterans, First Responders, and seniors 60+ years old.",
        bookingUrl: "https://book.squareup.com/appointments/zbjlzmystspuop/location/GM5ZRS3QEHH3W/services",
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