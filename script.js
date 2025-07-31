document.addEventListener('DOMContentLoaded', function() {
    // Hamburger Menu Toggle
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // Close mobile menu when clicking a link
    document.querySelectorAll('#nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
    
    // Banner Slider
    const banners = document.querySelectorAll('.banner');
    const dotsContainer = document.querySelector('.banner-dots');
    let currentBanner = 0;
    let bannerInterval;
    
    // Create dots
    banners.forEach((_, index) => {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => {
            goToBanner(index);
        });
        dotsContainer.appendChild(dot);
    });
    
    const dots = document.querySelectorAll('.dot');
    
    function goToBanner(index) {
        banners[currentBanner].classList.remove('active');
        dots[currentBanner].classList.remove('active');
        currentBanner = index;
        banners[currentBanner].classList.add('active');
        dots[currentBanner].classList.add('active');
        resetInterval();
    }
    
    function nextBanner() {
        let nextIndex = (currentBanner + 1) % banners.length;
        goToBanner(nextIndex);
    }
    
    function prevBanner() {
        let prevIndex = (currentBanner - 1 + banners.length) % banners.length;
        goToBanner(prevIndex);
    }
    
    function resetInterval() {
        clearInterval(bannerInterval);
        bannerInterval = setInterval(nextBanner, 5000);
    }
    
    document.querySelector('.next-btn').addEventListener('click', nextBanner);
    document.querySelector('.prev-btn').addEventListener('click', prevBanner);
    
    resetInterval();
    
    // Car Brands Data
    const brands = [
        { 
            name: 'Toyota', 
            image: 'toyota.jpg', 
            description: 'Reliable and durable vehicles known worldwide for their quality and performance. Toyota offers a wide range of models from compact cars to full-size SUVs, all built with exceptional engineering and attention to detail.', 
            price: 15000,
            priceTzs: 35000000
        },
        { 
            name: 'Honda', 
            image: 'honda.jpg', 
            description: 'Innovative cars with excellent fuel efficiency and smooth driving experience. Honda vehicles are known for their reliability, advanced technology, and comfortable interiors.', 
            price: 14500,
            priceTzs: 33800000
        },
        { 
            name: 'Audi', 
            image: 'audi.jpg', 
            description: 'Luxury German vehicles with cutting-edge technology and premium comfort. Audi combines performance with sophistication, offering quattro all-wheel drive and virtual cockpit displays.', 
            price: 35000,
            priceTzs: 81500000
        },
        { 
            name: 'BMW', 
            image: 'bmw.jpg', 
            description: 'Ultimate driving machines with sporty performance and elegant design. BMW vehicles deliver precise handling, powerful engines, and luxurious interiors with the latest iDrive technology.', 
            price: 32000,
            priceTzs: 74500000
        },
        { 
            name: 'Citroen', 
            image: 'citroen.jpg', 
            description: 'French cars known for their unique design and comfortable ride. Citroen offers innovative suspension systems and distinctive styling that stands out on the road.', 
            price: 18000,
            priceTzs: 42000000
        },
        { 
            name: 'Daihatsu', 
            image: 'daihatsu.jpg', 
            description: 'Compact and efficient vehicles perfect for city driving. Daihatsu specializes in small cars with excellent fuel economy and maneuverability in urban environments.', 
            price: 12000,
            priceTzs: 28000000
        },
        { 
            name: 'Ford', 
            image: 'ford.jpg', 
            description: 'American brand offering rugged trucks and versatile family vehicles. Ford is known for its tough F-Series trucks and SUVs with advanced towing capabilities and SYNC infotainment.', 
            price: 16500,
            priceTzs: 38500000
        },
        { 
            name: 'Hino', 
            image: 'hino.jpg', 
            description: 'Commercial vehicles and trucks built for heavy-duty performance. Hino trucks are designed for reliability in demanding conditions with efficient diesel engines.', 
            price: 45000,
            priceTzs: 105000000
        },
        { 
            name: 'Hyundai', 
            image: 'hyundai.jpg', 
            description: 'Modern cars with extensive warranties and advanced features. Hyundai offers great value with comprehensive standard equipment and industry-leading warranty coverage.', 
            price: 14000,
            priceTzs: 32600000
        },
        { 
            name: 'Isuzu', 
            image: 'isuzu.jpg', 
            description: 'Durable trucks and SUVs known for their reliability. Isuzu specializes in work-ready vehicles with powerful diesel engines and robust construction.', 
            price: 22000,
            priceTzs: 51300000
        },
        { 
            name: 'Jaguar', 
            image: 'jaguar.jpg', 
            description: 'British luxury cars with sleek designs and powerful performance. Jaguar combines elegant styling with thrilling performance and cutting-edge technology.', 
            price: 40000,
            priceTzs: 93200000
        },
        { 
            name: 'Jeep', 
            image: 'jeep.jpg', 
            description: 'Iconic off-road vehicles built for adventure. Jeep offers legendary 4x4 capability with models ranging from the compact Renegade to the full-size Grand Cherokee.', 
            price: 25000,
            priceTzs: 58300000
        },
        { 
            name: 'Kia', 
            image: 'kia.jpg', 
            description: 'Affordable vehicles packed with features and long warranties. Kia provides excellent value with stylish designs, premium interiors, and industry-leading warranty coverage.', 
            price: 13500,
            priceTzs: 31500000
        },
        { 
            name: 'Land Rover', 
            image: 'land_rover.jpg', 
            description: 'Premium SUVs designed for both luxury and off-road capability. Land Rover offers sophisticated all-terrain vehicles with sumptuous interiors and advanced terrain response systems.', 
            price: 50000,
            priceTzs: 116500000
        },
        { 
            name: 'Lexus', 
            image: 'lexus.jpg', 
            description: 'Luxury division of Toyota offering refined vehicles with exceptional quality. Lexus combines whisper-quiet cabins, meticulous craftsmanship, and hybrid technology.', 
            price: 38000,
            priceTzs: 88600000
        },
        { 
            name: 'Mercedes', 
            image: 'marcedes.jpg', 
            description: 'German luxury vehicles synonymous with prestige and innovation. Mercedes-Benz offers cutting-edge technology, powerful engines, and unparalleled comfort in every class.', 
            price: 42000,
            priceTzs: 98000000
        },
        { 
            name: 'Mazda', 
            image: 'mazda.jpg', 
            description: 'Cars with sporty handling and eye-catching designs. Mazda\'s KODO design language and Skyactiv technology deliver engaging driving dynamics with excellent fuel efficiency.', 
            price: 17000,
            priceTzs: 39600000
        },
        { 
            name: 'Mitsubishi', 
            image: 'mitsubishi.jpg', 
            description: 'Versatile vehicles with advanced all-wheel-drive systems. Mitsubishi offers capable SUVs with Super All-Wheel Control and practical compact cars.', 
            price: 16000,
            priceTzs: 37300000
        },
        { 
            name: 'Nissan', 
            image: 'nissan.jpg', 
            description: 'Diverse lineup from efficient compacts to powerful trucks. Nissan provides innovative vehicles with ProPILOT assist technology and reliable performance.', 
            price: 15500,
            priceTzs: 36100000
        },
        { 
            name: 'Peugeot', 
            image: 'peugeot.jpg', 
            description: 'French cars with distinctive styling and comfortable interiors. Peugeot offers elegant designs with i-Cockpit technology and efficient engines.', 
            price: 19000,
            priceTzs: 44300000
        },
        { 
            name: 'Subaru', 
            image: 'subaru.jpg', 
            description: 'All-wheel-drive vehicles perfect for all weather conditions. Subaru\'s Symmetrical AWD and Boxer engines provide confident handling in all road conditions.', 
            price: 20000,
            priceTzs: 46600000
        },
        { 
            name: 'Suzuki', 
            image: 'suzuki.jpg', 
            description: 'Compact and affordable cars known for their reliability. Suzuki specializes in small, efficient vehicles with all-wheel-drive options and excellent value.', 
            price: 11500,
            priceTzs: 26800000
        },
        { 
            name: 'Volkswagen', 
            image: 'volkswagen.jpg', 
            description: 'German engineering offering practical and fun-to-drive vehicles. Volkswagen combines quality engineering with timeless design and efficient TSI engines.', 
            price: 18500,
            priceTzs: 43100000
        },
        { 
            name: 'Volvo', 
            image: 'volvo.jpg', 
            description: 'Safety-focused vehicles with Scandinavian design and luxury. Volvo leads in safety innovation while offering luxurious interiors and powerful hybrid options.', 
            price: 36000,
            priceTzs: 83900000
        }
    ];
    
    // Load Brands
    const brandsGrid = document.querySelector('.brands-grid');
    
// Replace the brand card creation code with:
brands.forEach(brand => {
    const brandCard = document.createElement('div');
    brandCard.className = 'brand-card';
    brandCard.innerHTML = `
        <div class="brand-img-container">
            <div class="brand-img">
                <img src="${brand.image}" alt="${brand.name}" loading="lazy">
            </div>
        </div>
        <div class="brand-info">
            <h3>${brand.name}</h3>
            <p class="brand-price">From $${brand.price.toLocaleString()}</p>
            <p class="brand-price-tzs" style="display:none;">From TZS ${brand.priceTzs.toLocaleString()}</p>
        </div>
        <div class="contact-expert" data-brand='${JSON.stringify(brand)}'>
            <i class="fas fa-phone-alt"></i> <span class="contact-text">Contact the Expert</span>
        </div>
    `;
    
    const contactBtn = brandCard.querySelector('.contact-expert');
    contactBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        contactExpert(brand);
    });
    
    brandsGrid.appendChild(brandCard);
});

// Add this new function:
function contactExpert(brand) {
    const message = `Hello Tanga Car Deals,\n\nI'm interested in the ${brand.name} vehicle.\n\nPrice: $${brand.price.toLocaleString()} (TZS ${brand.priceTzs.toLocaleString()})\n\nPlease contact me for more information.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/255712499859?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
}

    
    function showCartNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'cart-notification';
        notification.textContent = message;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.classList.add('show');
        }, 10);
        
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }
    
    // Cart modal
    const cartModal = document.getElementById('cart-modal');
    

    function openCartModal() {
        const cartItemsContainer = document.getElementById('cart-items');
        cartItemsContainer.innerHTML = '';
        
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<div class="cart-empty">Your cart is empty</div>';
        } else {
            cart.forEach((item, index) => {
                const cartItem = document.createElement('div');
                cartItem.className = 'cart-item';
                cartItem.innerHTML = `
                    <div class="cart-item-img">
                        <img src="${item.image}" alt="${item.name}" loading="lazy">
                    </div>
                    <div class="cart-item-details">
                        <div class="cart-item-title">${item.name}</div>
                        <div class="cart-item-price">$${item.price.toLocaleString()}</div>
                        <div class="cart-item-price-tzs" style="display:none;">TZS ${item.priceTzs.toLocaleString()}</div>
                    </div>
                    <div class="cart-item-remove" data-index="${index}">
                        <i class="fas fa-trash"></i>
                    </div>
                `;
                cartItemsContainer.appendChild(cartItem);
            });
            
            // Add event listeners to remove buttons
            document.querySelectorAll('.cart-item-remove').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const index = parseInt(e.currentTarget.getAttribute('data-index'));
                    cart.splice(index, 1);
                    updateCartCount();
                    openCartModal(); // Refresh cart modal
                });
            });
        }
        
        // Update total
        const total = cart.reduce((sum, item) => sum + item.price, 0);
        const totalTzs = cart.reduce((sum, item) => sum + item.priceTzs, 0);
        document.getElementById('cart-total-amount').textContent = `$${total.toLocaleString()}`;
        document.getElementById('cart-total-amount-tzs').textContent = `TZS ${totalTzs.toLocaleString()}`;
        updateCartPriceDisplay();
        

        cartModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
    
    function updateCartPriceDisplay() {
        const usdPrices = document.querySelectorAll('.cart-item-price');
        const tzsPrices = document.querySelectorAll('.cart-item-price-tzs');
        const totalUsd = document.getElementById('cart-total-amount');
        const totalTzs = document.getElementById('cart-total-amount-tzs');
        
        if (isTzs) {
            usdPrices.forEach(el => el.style.display = 'none');
            tzsPrices.forEach(el => el.style.display = 'block');
            totalUsd.style.display = 'none';
            totalTzs.style.display = 'inline';
        } else {
            usdPrices.forEach(el => el.style.display = 'block');
            tzsPrices.forEach(el => el.style.display = 'none');
            totalUsd.style.display = 'inline';
            totalTzs.style.display = 'none';
        }
    }
    
    // Currency switcher
    const currencyToggle = document.getElementById('currency-toggle');
    let isTzs = false;
    
    currencyToggle.addEventListener('change', toggleCurrency);
    
    function toggleCurrency() {
        isTzs = currencyToggle.checked;
        updatePrices();
        updateCartPriceDisplay();
        updateModalPriceDisplay();
    }
    
    function updatePrices() {
        const usdPrices = document.querySelectorAll('.brand-price');
        const tzsPrices = document.querySelectorAll('.brand-price-tzs');
        
        if (isTzs) {
            usdPrices.forEach(el => el.style.display = 'none');
            tzsPrices.forEach(el => el.style.display = 'block');
        } else {
            usdPrices.forEach(el => el.style.display = 'block');
            tzsPrices.forEach(el => el.style.display = 'none');
        }
    }
    
    // Language switcher
    const languageSelect = document.getElementById('language-select');
    
    languageSelect.addEventListener('change', function() {
        const translations = {
            'en': {
                logoText: "TANGA CAR DEALS",
                logoSubtext: "Your trusted car dealership in Tanzania",
                marquee: "WE DEAL IN ALL TYPES OF VEHICLES!! COME AND BOOK YOUR RIDE!>>>>>>>>>>The smile of Tanganyika",
                navHome: "Home",
                navBrands: "Brands",
                navAbout: "About Us",
                navContact: "Contact",
                searchPlaceholder: "Search for cars, brands, models...",
                bannerTitle1: "Quality Vehicles at Affordable Prices",
                bannerText1: "Find your dream car with us today!",
                bannerTitle2: "Wide Selection of Brands",
                bannerText2: "From economy to luxury, we have it all",
                bannerTitle3: "Trusted Car Dealership",
                bannerText3: "Serving Tanga for over 10 years",
                bannerTitle4: "Flexible Financing Options",
                bannerText4: "Drive your dream car today",
                bannerTitle5: "After-Sales Support",
                bannerText5: "We're with you even after purchase",
                brandsTitle: "Our Car Brands",
                aboutTitle: "About Us",
                aboutText1: "Tanga Car Deals is a premier vehicle dealership located at the heart of Tanganyika - Dar es salaam, Tanzania. We specialize in providing high-quality vehicles to meet all your transportation needs.",
                aboutText2: "With over a decade of experience in the automotive industry, we have built a reputation for reliability, transparency, and excellent customer service.",
                aboutText3: "Our inventory includes a wide range of vehicles from economy cars to luxury models, all carefully inspected to ensure they meet our high standards.",
                aboutText4: "Whether you're looking for a family car, a rugged SUV, or a sleek sedan, we have the perfect vehicle for you, we provide all types vehicle sales which includes 1. In stock, 2. direct japan auction purchasing, 3. direct europe auction purchasing, 4. sourcing any car from Thailand, Dubai, Singapore, South Africa. For your next vehicle booking or local purchase kindly contact Us below.",
                contactTitle: "Contact Us",
                getInTouch: "Get in Touch",
                location: "Location: Tanga, Tanzania",
                phone: "Phone: 0712499859",
                email: "Email: tangacar.office@gmail.com",
                followUs: "Follow Us",
                sendMessage: "Send Us a Message",
                modalPriceLabel: "Price:",
                addToCartBtn: "Add to Cart",
                cartTitle: "Your Cart",
                cartEmpty: "Your cart is empty",
                cartTotal: "Total:",
                paymentMethods: "Payment Methods",
                paymentInstructions: "Payment Instructions",
                checkoutBtn: "Complete Purchase",
                makeOfferBtn: "Make an Offer via WhatsApp",
                paymentSuccess: "Order Successfully Sent!",
                paymentConfirmation: "Your order has been sent to +255712499859 via WhatsApp",
                loginTitle: "Customer Sign In",
                loginEmailLabel: "Email",
                loginPasswordLabel: "Password",
                loginSubmitBtn: "Sign In",
                loginRegisterText: "Don't have an account?",
                registerTitle: "New Customer Registration",
                registerNameLabel: "Full Name",
                registerEmailLabel: "Email",
                registerPhoneLabel: "Phone Number",
                registerPasswordLabel: "Password",
                registerConfirmLabel: "Confirm Password",
                registerSubmitBtn: "Register",
                registerLoginText: "Already have an account?",
                footerTitle: "Tanga Car Deals",
                footerDescription: "Your trusted partner for quality vehicles in Tanga and beyond.",
                quickLinksTitle: "Quick Links",
                footerHome: "Home",
                footerBrands: "Brands",
                footerAbout: "About Us",
                footerContact: "Contact",
                contactInfoTitle: "Contact Info",
                footerLocation: "Tanga, Tanzania",
                footerPhone: "0712499859",
                footerEmail: "tangacar.office@gmail.com",
                copyright: "© 2023 Tanga Car Deals. All Rights Reserved.",
                currencyLabel: "Currency:",
                signIn: "Sign In",
                register: "Register",
                adminPanel: "Admin Panel"
            },
            'sw': {
                logoText: "TANGA CAR DEALS",
                logoSubtext: "Duka lako la kuegemea la magari nchini Tanzania",
                marquee: "TUNASHUGHULIKIA AINA ZOTE ZA MAGARI!! NJOO KUHIFADHI SAFARI YAKO!>>>>>>>>>>Tabasamu la Tanganyika",
                navHome: "Nyumbani",
                navBrands: "Aina za Magari",
                navAbout: "Kuhusu Sisi",
                navContact: "Mawasiliano",
                searchPlaceholder: "Tafuta magari, aina, modeli...",
                bannerTitle1: "Magari ya Ubora kwa Bei Nafuu",
                bannerText1: "Tafuta gari lako la ndoto leo!",
                bannerTitle2: "Aina Nyingi za Magari",
                bannerText2: "Kuanzia magari ya kawaida hadi ya kifahari, tunayo yote",
                bannerTitle3: "Duka la Kuaminika la Magari",
                bannerText3: "Tunahudumu Tanga kwa zaidi ya miaka 10",
                bannerTitle4: "Mikopo kwa Masharti Rahisi",
                bannerText4: "Endesha gari lako la ndoto leo",
                bannerTitle5: "Msaada Baada ya Ununuzi",
                bannerText5: "Tunakuwa pamoja nawe hata baada ya ununuzi",
                brandsTitle: "Aina za Magari Yetu",
                aboutTitle: "Kuhusu Sisi",
                aboutText1: "Tanga Car Deals ni kampuni kuu ya uuzaji wa magari iliyoko katikati mwa Tanganyika - Dar es salaam, Tanzania. Tuna utaalam wa kutoa magari ya ubora wa juu ili kukidhi mahitaji yako yote ya usafiri.",
                aboutText2: "Kwa zaidi ya muongo mmoja wa uzoefu katika sekta ya magari, tumejijengea sifa ya kutegemewa, uwazi, na huduma bora kwa watejaKwa uzoefu wa zaidi ya muongo katika tasnia ya magari, tumejenga sifa ya kuaminika, uwazi, na huduma bora kwa wateja.",
                aboutText3: "Orodha yetu inajumuisha anuwai ya magari kutoka kwa magari ya kawaida hadi ya kifahari, yote yamekaguliwa kwa uangalifu ili kuhakikisha yanakidhi viwango vyetu vya juuHifadhi yetu inajumuisha aina mbalimbali za magari kuanzia magari ya kiuchumi hadi ya kifahari, yakiwa yamechunguzwa kwa uangalifu kuhakikisha yanakidhi viwango vyetu vya juu.",
                aboutText4: "Iwe unatafuta gari la familia, SUV mbovu, au sedan maridadi, tuna gari linalokufaa zaidi, tunatoa mauzo ya magari ya aina zote ambayo yanajumuisha 1. Katika hisa, 2. ununuzi wa mnada wa japani wa moja kwa moja, 3. ununuzi wa mnada wa moja kwa moja wa ulaya, 4. kutafuta gari lolote kutoka Thailand, Dubai, Singapore au kununua gari la karibu, wasiliana nasi",
                contactTitle: "Wasiliana Nasi",
                getInTouch: "Wasiliana Nasi",
                location: "Mahali: TANGA CAR DEALS - Dar es salaam, Tanzania",
                phone: "Simu: 0712499859",
                email: "Barua pepe: tangacar.office@gmail.com",
                followUs: "Tufuate",
                sendMessage: "Tutumie Ujumbe",
                modalPriceLabel: "Bei:",
                addToCartBtn: "Weka kwenye Cart",
                cartTitle: "Cart Yako",
                cartEmpty: "Cart yako ni tupu",
                cartTotal: "Jumla:",
                paymentMethods: "Njia za Malipo",
                paymentInstructions: "Maelezo ya Malipo",
                checkoutBtn: "Kamilisha Ununuzi",
                makeOfferBtn: "Toa Ofa kupitia WhatsApp",
                paymentSuccess: "Oda Imetumwa Kikamilifu!",
                paymentConfirmation: "Oda yako imetumwa kwa +255615288736 kupitia WhatsApp",
                loginEmailLabel: "Barua pepe",
                loginPasswordLabel: "Nenosiri",
                loginRegisterText: "Huna akaunti?",
                registerTitle: "Usajili wa Mteja Mpya",
                registerNameLabel: "Jina Kamili",
                registerEmailLabel: "Barua pepe",
                registerPhoneLabel: "Nambari ya Simu",
                registerPasswordLabel: "Nenosiri",
                registerConfirmLabel: "Thibitisha Nenosiri",
                registerLoginText: "Tayari una akaunti?",
                footerTitle: "Tanga Car Deals",
                footerDescription: "Mshirika wako wa kuaminika wa magari ya hali ya juu Tanga na kote.",
                quickLinksTitle: "Viungo vya Haraka",
                footerHome: "Nyumbani",
                footerBrands: "Aina za Magari",
                footerAbout: "Kuhusu Sisi",
                footerContact: "Mawasiliano",
                contactInfoTitle: "Maelezo ya Mawasiliano",
                footerLocation: "TANGA CAR DEALS - Dar es salaam, Tanzania",
                footerPhone: "0712499859",
                footerEmail: "tangacar.office@gmail.com",
                copyright: "© 2023 Tanga Car Deals. Haki zote zimehifadhiwa.",
                currencyLabel: "Sarafu:",
                adminPanel: "Panel ya Msimamizi"
            },
            'fr': {
                logoText: "TANGA CAR DEALS",
                logoSubtext: "Votre concessionnaire automobile de confiance en Tanzanie",
                marquee: "NOUS TRAITONS TOUS LES TYPES DE VÉHICULES!! VENEZ RÉSERVER VOTRE VOITURE!>>>>>>>>>>Le sourire du Tanganyika",
                navHome: "Accueil",
                navBrands: "Marques",
                navAbout: "À propos",
                navContact: "Contact",
                searchPlaceholder: "Rechercher des voitures, marques, modèles...",
                bannerTitle1: "Véhicules de qualité à des prix abordables",
                bannerText1: "Trouvez la voiture de vos rêves avec nous aujourd'hui!",
                bannerTitle2: "Large sélection de marques",
                bannerText2: "De l'économie au luxe, nous avons tout",
                bannerTitle3: "Concessionnaire automobile de confiance",
                bannerText3: "Au service de Tanga depuis plus de 10 ans",
                bannerTitle4: "Options de financement flexibles",
                bannerText4: "Conduisez la voiture de vos rêves aujourd'hui",
                bannerTitle5: "Support après-vente",
                bannerText5: "Nous sommes avec vous même après l'achat",
                brandsTitle: "Nos marques de voitures",
                aboutTitle: "À propos de nous",
                aboutText1: "Tanga Car Deals est un concessionnaire automobile de premier plan situé au cœur du Tanganyika, à Dar es Salaam, en Tanzanie. Nous sommes spécialisés dans la fourniture de véhicules de haute qualité pour répondre à tous vos besoins de transport.",
                aboutText2: "Forts de plus de dix ans d'expérience dans l'industrie automobile, nous avons bâti notre réputation de fiabilité, de transparence et d'excellence du service client.",
                aboutText3: "Notre inventaire comprend une large gamme de véhicules, des modèles économiques aux modèles de luxe, tous soigneusement inspectés pour garantir leur conformité à nos normes élevées.",
                aboutText4: "Que vous recherchiez une voiture familiale, un SUV robuste ou une berline élégante, nous avons le véhicule idéal pour vous. Nous proposons tous types de véhicules à la vente, notamment : 1. En stock, 2. Achat direct aux enchères au Japon, 3. Achat direct aux enchères en Europe, 4. Approvisionnement de véhicules en Thaïlande, Dubaï, Singapour et Afrique du Sud. Pour votre prochaine réservation ou achat local, nous contacter.",
                contactTitle: "Contactez-nous",
                getInTouch: "Contactez-nous",
                location: "Emplacement: TANGA CAR DEALS - Dar es salaam, Tanzanie",
                phone: "Téléphone: 0712499859",
                email: "Email: tangacar.office@gmail.com",
                followUs: "Suivez-nous",
                sendMessage: "Envoyez-nous un message",
                modalPriceLabel: "Prix:",
                addToCartBtn: "Ajouter au panier",
                cartTitle: "Votre panier",
                cartEmpty: "Votre panier est vide",
                cartTotal: "Total:",
                paymentMethods: "Méthodes de paiement",
                paymentInstructions: "Instructions de paiement",
                checkoutBtn: "Finaliser l'achat",
                makeOfferBtn: "Faire une offre via WhatsApp",
                paymentSuccess: "Commande envoyée avec succès!",
                paymentConfirmation: "Votre commande a été envoyée au +255615288736 via WhatsApp",
                loginEmailLabel: "Email",
                loginPasswordLabel: "Mot de passe",
                loginSubmitBtn: "Se connecter",
                loginRegisterText: "Vous n'avez pas de compte?",
                registerTitle: "Enregistrement nouveau client",
                registerNameLabel: "Nom complet",
                registerEmailLabel: "Email",
                registerPhoneLabel: "Numéro de téléphone",
                registerPasswordLabel: "Mot de passe",
                registerConfirmLabel: "Confirmer le mot de passe",
                registerLoginText: "Vous avez déjà un compte?",
                footerTitle: "Tanga Car Deals",
                footerDescription: "Votre partenaire de confiance pour des véhicules de qualité à Tanga et au-delà.",
                quickLinksTitle: "Liens rapides",
                footerHome: "Accueil",
                footerBrands: "Marques",
                footerAbout: "À propos",
                footerContact: "Contact",
                contactInfoTitle: "Coordonnées",
                footerLocation: "TANGA CAR DEALS - Dar es salaam, Tanzanie",
                footerPhone: "0712499859",
                footerEmail: "tangacar.office@gmail.com",
                copyright: "© 2023 Tanga Car Deals. Tous droits réservés.",
                currencyLabel: "Devise:",
                adminPanel: "Panneau d'administration"
            },
            'es': {
                logoText: "TANGA CAR DEALS",
                logoSubtext: "Tu concesionario de confianza en Tanzania",
                marquee: "¡TRATAMOS TODO TIPO DE VEHÍCULOS! ¡VEN Y RESERVA TU COCHE!>>>>>>>>>>La sonrisa de Tanganyika",
                navHome: "Inicio",
                navBrands: "Marcas",
                navAbout: "Sobre Nosotros",
                navContact: "Contacto",
                searchPlaceholder: "Buscar coches, marcas, modelos...",
                bannerTitle1: "Vehículos de calidad a precios asequibles",
                bannerText1: "¡Encuentra el coche de tus sueños con nosotros hoy!",
                bannerTitle2: "Amplia selección de marcas",
                bannerText2: "Desde económicos hasta de lujo, lo tenemos todo",
                bannerTitle3: "Concesionario de confianza",
                bannerText3: "Sirviendo a Tanga durante más de 10 años",
                bannerTitle4: "Opciones de financiación flexibles",
                bannerText4: "Conduce el coche de tus sueños hoy",
                bannerTitle5: "Soporte postventa",
                bannerText5: "Estamos contigo incluso después de la compra",
                brandsTitle: "Nuestras marcas de coches",
                aboutTitle: "Sobre Nosotros",
                aboutText1: "Tanga Car Deals es un concesionario de vehículos de primer nivel ubicado en el corazón de Tanganyika, Dar es Salaam, Tanzania. Nos especializamos en ofrecer vehículos de alta calidad para satisfacer todas sus necesidades de transporte.",
                aboutText2: "Con más de una década de experiencia en la industria automotriz, nos hemos forjado una reputación de confiabilidad, transparencia y excelente servicio al cliente.",
                aboutText3: "Nuestro inventario incluye una amplia gama de vehículos, desde autos económicos hasta modelos de lujo, todos cuidadosamente inspeccionados para garantizar que cumplan con nuestros altos estándares.",
                aboutText4: "Ya sea que busque un auto familiar, un SUV robusto o un sedán elegante, tenemos el vehículo perfecto para usted. Ofrecemos ventas de todo tipo de vehículos: 1. Disponibles, 2. Compra directa en subastas de Japón, 3. Compra directa en subastas de Europa, 4. Adquisición de cualquier auto de Tailandia, Dubái, Singapur y Sudáfrica. Para su próxima reserva de vehículo o compra local, continuación.",
                contactTitle: "Contáctenos",
                getInTouch: "Contáctenos",
                location: "Ubicación: TANGA CAR DEALS - Dar es salaam, Tanzania",
                phone: "Teléfono: 0712499859",
                email: "Correo electrónico: tangacar.office@gmail.com",
                followUs: "Síganos",
                sendMessage: "Envíenos un mensaje",
                modalPriceLabel: "Precio:",
                addToCartBtn: "Añadir al carrito",
                cartTitle: "Tu carrito",
                cartEmpty: "Tu carrito está vacío",
                cartTotal: "Total:",
                paymentMethods: "Métodos de pago",
                paymentInstructions: "Instrucciones de pago",
                checkoutBtn: "Completar compra",
                makeOfferBtn: "Hacer una oferta por WhatsApp",
                paymentSuccess: "¡Pedido enviado con éxito!",
                paymentConfirmation: "Tu pedido ha sido enviado al +255615288736 por WhatsApp",
                loginTitle: "Inicio de sesión del cliente",
                loginEmailLabel: "Correo electrónico",
                loginPasswordLabel: "Contraseña",
                loginRegisterText: "¿No tienes una cuenta?",
                registerTitle: "Registro de nuevo cliente",
                registerNameLabel: "Nombre completo",
                registerEmailLabel: "Correo electrónico",
                registerPhoneLabel: "Número de teléfono",
                registerPasswordLabel: "Contraseña",
                registerConfirmLabel: "Confirmar contraseña",
                registerLoginText: "¿Ya tienes una cuenta?",
                footerTitle: "Tanga Car Deals",
                footerDescription: "Tu socio de confianza para vehículos de calidad en Tanga y más allá.",
                quickLinksTitle: "Enlaces rápidos",
                footerHome: "Inicio",
                footerBrands: "Marcas",
                footerAbout: "Sobre Nosotros",
                footerContact: "Contacto",
                contactInfoTitle: "Información de contacto",
                footerLocation: "TANGA CAR DEALS - Dar es salaam, Tanzania",
                footerPhone: "0712499859",
                footerEmail: "tangacar.office@gmail.com",
                copyright: "© 2023 Tanga Car Deals. Todos los derechos reservados.",
                currencyLabel: "Moneda:",
                adminPanel: "Panel de administración"
            },
            'zh': {
                logoText: "坦噶汽车交易",
                logoSubtext: "您在坦桑尼亚值得信赖的汽车经销商",
                marquee: "我们经营所有类型的车辆！！快来预订您的座驾！>>>>>>>>>>坦噶尼喀的微笑",
                navHome: "首页",
                navBrands: "品牌",
                navAbout: "关于我们",
                navContact: "联系我们",
                searchPlaceholder: "搜索汽车、品牌、型号...",
                bannerTitle1: "优质车辆，价格实惠",
                bannerText1: "今天就在我们这里找到您的梦想之车！",
                bannerTitle2: "品牌种类繁多",
                bannerText2: "从经济型到豪华型，我们应有尽有",
                bannerTitle3: "值得信赖的汽车经销商",
                bannerText3: "为坦噶服务超过10年",
                bannerTitle4: "灵活的融资选择",
                bannerText4: "今天就驾驶您的梦想之车",
                bannerTitle5: "售后支持",
                bannerText5: "我们会在购买后继续为您服务",
                brandsTitle: "我们的汽车品牌",
                aboutTitle: "关于我们",
                aboutText1: "Tanga Car Deals 是位於坦噶尼喀中心地帶－坦尚尼亞達累斯薩拉姆的頂級汽車經銷商。我們專注於提供高品質車輛，滿足您所有出行的需求。",
                aboutText2: "憑藉十多年的汽車行業經驗，我們以可靠、透明和卓越的客戶服務而聞名。",
                aboutText3: "我們的庫存涵蓋從經濟型轎車到豪華車型的各種車型，所有車輛均經過仔細檢查，以確保符合我們的高標準。",
                aboutText4: "無論您是在尋找家用車、堅固耐用的 SUV 還是時尚的轎車，我們都能為您提供完美的車輛。我們提供各種類型的車輛銷售，包括 1. 現貨銷售；2. 日本拍賣直購；3. 歐洲拍賣直購；4. 從泰國、迪拜、新加坡、南非購買任何車輛。聯絡我們。",
                contactTitle: "联系我们",
                getInTouch: "联系我们",
                location: "位置: TANGA CAR DEALS - Dar es salaam, Tanzania",
                phone: "电话: 0712499859",
                email: "电子邮件: tangacar.office@gmail.com",
                followUs: "关注我们",
                sendMessage: "给我们发消息",
                modalPriceLabel: "价格:",
                addToCartBtn: "加入购物车",
                cartTitle: "您的购物车",
                cartEmpty: "您的购物车是空的",
                cartTotal: "总计:",
                paymentMethods: "付款方式",
                paymentInstructions: "付款说明",
                checkoutBtn: "完成购买",
                makeOfferBtn: "通过WhatsApp出价",
                paymentSuccess: "订单已成功发送！",
                paymentConfirmation: "您的订单已通过WhatsApp发送至+255615288736",
                loginEmailLabel: "电子邮件",
                loginPasswordLabel: "密码",
                loginRegisterText: "没有账户？",
                registerNameLabel: "全名",
                registerEmailLabel: "电子邮件",
                registerPhoneLabel: "电话号码",
                registerPasswordLabel: "密码",
                registerConfirmLabel: "确认密码",
                registerLoginText: "已有账户？",
                footerTitle: "坦噶汽车交易",
                footerDescription: "您在坦噶及周边地区值得信赖的优质汽车合作伙伴。",
                quickLinksTitle: "快速链接",
                footerHome: "首页",
                footerBrands: "品牌",
                footerAbout: "关于我们",
                footerContact: "联系我们",
                contactInfoTitle: "联系信息",
                footerLocation: "坦噶,TANGA CAR DEALS - Dar es salaam، Tanzania",
                footerPhone: "0712499859",
                footerEmail: "tangacar.office@gmail.com",
                copyright: "© 2023 坦噶汽车交易。保留所有权利。",
                currencyLabel: "货币:",
                adminPanel: "管理面板"
            },
            'ar': {
                logoText: "تانجا كار ديلز",
                logoSubtext: "وكيل سياراتك الموثوق به في تنزانيا",
                marquee: ">>>>>>>>>>ابتسامة تنجانيقانتعامل في جميع أنواع المركبات!! تعال واحجز سيارتك!",
                navHome: "الرئيسية",
                navBrands: "العلامات التجارية",
                navAbout: "معلومات عنا",
                navContact: "اتصل بنا",
                searchPlaceholder: "ابحث عن سيارات، علامات تجارية، موديلات...",
                bannerTitle1: "مركبات عالية الجودة بأسعار معقولة",
                bannerText1: "ابحث عن سيارتك المثالية معنا اليوم!",
                bannerTitle2: "تشكيلة واسعة من العلامات التجارية",
                bannerText2: "من الاقتصادية إلى الفاخرة، لدينا كل شيء",
                bannerTitle3: "وكيل سيارات موثوق به",
                bannerText3: "نخدم تانجا لأكثر من 10 سنوات",
                bannerTitle4: "خيارات تمويل مرنة",
                bannerText4: "قد سيارتك المثالية اليوم",
                bannerTitle5: "دعم ما بعد البيع",
                bannerText5: "نحن معك حتى بعد الشراء",
                brandsTitle: "علاماتنا التجارية للسيارات",
                aboutTitle: "معلومات عنا",
                aboutText1: "تانغا كار ديلز هي وكالة سيارات رائدة تقع في قلب تنجانيقا - دار السلام، تنزانيا. نحن متخصصون في توفير سيارات عالية الجودة لتلبية جميع احتياجاتكم في مجال النقل.",
                aboutText2: "بخبرة تزيد عن عقد في قطاع السيارات، اكتسبنا سمعة طيبة بفضل الموثوقية والشفافية وخدمة العملاء الممتازة.",
                aboutText3: "يضم مخزوننا مجموعة واسعة من السيارات، من السيارات الاقتصادية إلى السيارات الفاخرة، وجميعها تخضع لفحص دقيق لضمان استيفائها لمعاييرنا العالية.",
                aboutText4: "سواء كنتم تبحثون عن سيارة عائلية، أو سيارة دفع رباعي متينة، أو سيارة سيدان أنيقة، فلدينا السيارة المثالية لكم، حيث نوفر جميع أنواع السيارات، بما في ذلك: 1. متوفرة في المخزون، 2. الشراء المباشر من اليابان، 3. الشراء المباشر من أوروبا، 4. ا اتصل بنا ، دبي، سنغافورة، جنوب أفريقيا. لحجز سيارتكم القادمة أو الشراء محليًا، يرجى التواصل معنا أدناه.",
                contactTitle: "اتصل بنا",
                getInTouch: "اتصل بنا",
                location: "الموقع:TANGA CAR DEALS - Dar es salaam، Tanzania",
                phone: "الهاتف: 0712499859",
                email: "البريد الإلكتروني: tangacar.office@gmail.com",
                followUs: "تابعنا",
                sendMessage: "أرسل لنا رسالة",
                modalPriceLabel: "السعر:",
                addToCartBtn: "أضف إلى السلة",
                cartTitle: "سلة التسوق الخاصة بك",
                cartEmpty: "سلة التسوق الخاصة بك فارغة",
                cartTotal: "المجموع:",
                paymentMethods: "طرق الدفع",
                paymentInstructions: "تعليمات الدفع",
                checkoutBtn: "إتمام الشراء",
                makeOfferBtn: "تقديم عرض عبر واتساب",
                paymentSuccess: "تم إرسال الطلب بنجاح!",
                paymentConfirmation: "تم إرسال طلبك إلى +255615288736 عبر واتساب",
                loginEmailLabel: "البريد الإلكتروني",
                loginPasswordLabel: "كلمة المرور",
                loginRegisterText: "ليس لديك حساب؟",
                registerNameLabel: "الاسم الكامل",
                registerEmailLabel: "البريد الإلكتروني",
                registerPhoneLabel: "رقم الهاتف",
                registerPasswordLabel: "كلمة المرور",
                registerConfirmLabel: "تأكيد كلمة المرور",
                registerLoginText: "هل لديك حساب بالفعل؟",
                footerTitle: "تانجا كار ديلز",
                footerDescription: "شريكك الموثوق به للحصول على مركبات عالية الجودة في تانجا وما بعدها.",
                quickLinksTitle: "روابط سريعة",
                footerHome: "الرئيسية",
                footerBrands: "العلامات التجارية",
                footerAbout: "معلومات عنا",
                footerContact: "اتصل بنا",
                contactInfoTitle: "معلومات الاتصال",
                footerLocation: "TANGA CAR DEALS - Dar es salaam",
                footerPhone: "0712499859",
                footerEmail: "tangacar.office@gmail.com",
                copyright: "© 2023 تانجا كار ديلز. جميع الحقوق محفوظة.",
                currencyLabel: "العملة:",
                adminPanel: "لوحة الإدارة"
            }
        };

        const lang = this.value;
        const t = translations[lang] || translations['en']; // Default to English if translation not found

        // Update all text elements
        document.getElementById('logo-text').textContent = t.logoText;
        document.getElementById('logo-subtext').textContent = t.logoSubtext;
        document.getElementById('marquee-text').textContent = t.marquee + " " + t.marquee;
        document.getElementById('nav-home-link').textContent = t.navHome;
        document.getElementById('nav-brands').textContent = t.navBrands;
        document.getElementById('nav-about').textContent = t.navAbout;
        document.getElementById('nav-contact').textContent = t.navContact;
        document.getElementById('search-input').placeholder = t.searchPlaceholder;
        document.getElementById('banner-title-1').textContent = t.bannerTitle1;
        document.getElementById('banner-text-1').textContent = t.bannerText1;
        document.getElementById('banner-title-2').textContent = t.bannerTitle2;
        document.getElementById('banner-text-2').textContent = t.bannerText2;
        document.getElementById('banner-title-3').textContent = t.bannerTitle3;
        document.getElementById('banner-text-3').textContent = t.bannerText3;
        document.getElementById('banner-title-4').textContent = t.bannerTitle4;
        document.getElementById('banner-text-4').textContent = t.bannerText4;
        document.getElementById('banner-title-5').textContent = t.bannerTitle5;
        document.getElementById('banner-text-5').textContent = t.bannerText5;
        document.getElementById('brands-title').textContent = t.brandsTitle;
        document.getElementById('about-title').textContent = t.aboutTitle;
        document.getElementById('about-text-1').textContent = t.aboutText1;
        document.getElementById('about-text-2').textContent = t.aboutText2;
        document.getElementById('about-text-3').textContent = t.aboutText3;
        document.getElementById('about-text-4').textContent = t.aboutText4;
        document.getElementById('contact-title').textContent = t.contactTitle;
        document.getElementById('get-in-touch').textContent = t.getInTouch;
        document.getElementById('location-text').textContent = t.location;
        document.getElementById('phone-text').textContent = t.phone;
        document.getElementById('email-text').textContent = t.email;
        document.getElementById('follow-us').textContent = t.followUs;
        document.getElementById('send-message').textContent = t.sendMessage;
        document.getElementById('modal-price-label').textContent = t.modalPriceLabel;
        document.getElementById('add-to-cart-btn').textContent = t.addToCartBtn;
        document.getElementById('cart-title').textContent = t.cartTitle;
        document.getElementById('cart-total-label').textContent = t.cartTotal;
        document.getElementById('payment-methods-title').textContent = t.paymentMethods;
        document.getElementById('payment-instructions-title').textContent = t.paymentInstructions;
        document.getElementById('checkout-btn').textContent = t.checkoutBtn;
        document.getElementById('make-offer-btn').textContent = t.makeOfferBtn;
        document.getElementById('payment-success-text').textContent = t.paymentSuccess;
        document.getElementById('payment-confirmation').textContent = t.paymentConfirmation;
        document.getElementById('login-title').textContent = t.loginTitle;
        document.getElementById('login-email-label').textContent = t.loginEmailLabel;
        document.getElementById('login-password-label').textContent = t.loginPasswordLabel;
        document.getElementById('login-submit-btn').textContent = t.loginSubmitBtn;
        document.getElementById('login-register-text').innerHTML = t.loginRegisterText + ' <a href="#" id="show-register">' + t.register + '</a>';
        document.getElementById('register-title').textContent = t.registerTitle;
        document.getElementById('register-name-label').textContent = t.registerNameLabel;
        document.getElementById('register-email-label').textContent = t.registerEmailLabel;
        document.getElementById('register-phone-label').textContent = t.registerPhoneLabel;
        document.getElementById('register-password-label').textContent = t.registerPasswordLabel;
        document.getElementById('register-confirm-label').textContent = t.registerConfirmLabel;
        document.getElementById('register-submit-btn').textContent = t.registerSubmitBtn;
        document.getElementById('register-login-text').innerHTML = t.registerLoginText + ' <a href="#" id="show-login">' + t.signIn + '</a>';
        document.getElementById('footer-title').textContent = t.footerTitle;
        document.getElementById('footer-description').textContent = t.footerDescription;
        document.getElementById('quick-links-title').textContent = t.quickLinksTitle;
        document.getElementById('footer-home').textContent = t.footerHome;
        document.getElementById('footer-brands').textContent = t.footerBrands;
        document.getElementById('footer-about').textContent = t.footerAbout;
        document.getElementById('footer-contact').textContent = t.footerContact;
        document.getElementById('contact-info-title').textContent = t.contactInfoTitle;
        document.getElementById('footer-location').textContent = t.footerLocation;
        document.getElementById('footer-phone').textContent = t.footerPhone;
        document.getElementById('footer-email').textContent = t.footerEmail;
        document.getElementById('copyright-text').textContent = t.copyright;
        document.getElementById('currency-label').textContent = t.currencyLabel;
        document.getElementById('login-btn').textContent = t.signIn;
        document.getElementById('register-btn').textContent = t.register;
        document.getElementById('admin-panel-text').textContent = t.adminPanel;
        
        // Update cart empty message if it exists
        const cartEmpty = document.querySelector('.cart-empty');
        if (cartEmpty) {
            cartEmpty.textContent = t.cartEmpty;
        }
    });
    
    // Modal Functions
    const carModal = document.getElementById('car-modal');
    const loginModal = document.getElementById('login-modal');
    const registerModal = document.getElementById('register-modal');
    const closeBtns = document.querySelectorAll('.close-btn');
    
    function openCarModal(brand) {
        document.getElementById('modal-car-img').src = brand.image;
        document.getElementById('modal-car-title').textContent = brand.name;
        document.getElementById('modal-car-description').textContent = brand.description;
        document.getElementById('car-price').textContent = `$${brand.price.toLocaleString()}`;
        document.getElementById('car-price-tzs').textContent = `TZS ${brand.priceTzs.toLocaleString()}`;
        updateModalPriceDisplay();
        carModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
    
    function updateModalPriceDisplay() {
        const usdPrice = document.getElementById('car-price');
        const tzsPrice = document.getElementById('car-price-tzs');
        
        if (isTzs) {
            usdPrice.style.display = 'none';
            tzsPrice.style.display = 'inline';
        } else {
            usdPrice.style.display = 'inline';
            tzsPrice.style.display = 'none';
        }
    }
    
    function openLoginModal() {
        loginModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
    
    function openRegisterModal() {
        registerModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
    
    function closeModal() {
        carModal.style.display = 'none';
        loginModal.style.display = 'none';
        registerModal.style.display = 'none';
        cartModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
    
    // Modal Event Listeners
    document.getElementById('login-btn').addEventListener('click', openLoginModal);
    document.getElementById('register-btn').addEventListener('click', openRegisterModal);
    document.getElementById('show-register').addEventListener('click', function(e) {
        e.preventDefault();
        closeModal();
        openRegisterModal();
    });
    document.getElementById('show-login').addEventListener('click', function(e) {
        e.preventDefault();
        closeModal();
        openLoginModal();
    });
    
    closeBtns.forEach(btn => {
        btn.addEventListener('click', closeModal);
    });
    
    window.addEventListener('click', function(e) {
        if (e.target === carModal || e.target === loginModal || 
            e.target === registerModal || e.target === cartModal) {
            closeModal();
        }
    });
    
    // Form Submissions
    document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message! We will contact you soon.');
        this.reset();
        closeModal();
    });
    
    // Authentication
    document.getElementById('loginForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;
        
        // Simple validation
        if (!email || !password) {
            alert('Please fill in all fields');
            return;
        }
        
        // Check if user exists in localStorage
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(u => u.email === email && u.password === password);
        
        if (user) {
            // Store logged in user in localStorage
            localStorage.setItem('currentUser', JSON.stringify(user));
            alert('Login successful!');
            
            // Show admin panel if admin
            if (email === 'admin@tangacardeals.com') {
                document.getElementById('admin-panel-link').style.display = 'block';
            }
            
            closeModal();
        } else {
            alert('Invalid email or password');
        }
    });
    
    document.getElementById('registerForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('register-name').value;
        const email = document.getElementById('register-email').value;
        const phone = document.getElementById('register-phone').value;
        const password = document.getElementById('register-password').value;
        const confirmPassword = document.getElementById('register-confirm').value;
        
        // Simple validation
        if (!name || !email || !phone || !password || !confirmPassword) {
            alert('Please fill in all fields');
            return;
        }
        
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        
        // Check if user already exists
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const userExists = users.some(u => u.email === email);
        
        if (userExists) {
            alert('User with this email already exists');
            return;
        }
        
        // Add new user
        const newUser = { name, email, phone, password };
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        
        // Store logged in user
        localStorage.setItem('currentUser', JSON.stringify(newUser));
        
        alert('Registration successful! You are now logged in.');
        
        closeModal();
        openLoginModal();
    });
    
    // Check if user is logged in on page load
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser) {        
        // Show admin panel if admin
        if (currentUser.email === 'admin@tangacardeals.com') {
            document.getElementById('admin-panel-link').style.display = 'block';
        }
    }
    
    // Make Offer functionality
    document.getElementById('make-offer-btn').addEventListener('click', function(e) {
        e.preventDefault();
        
        if (cart.length === 0) {
            alert('Your cart is empty');
            return;
        }
        
        // Generate WhatsApp message
        let message = "Hello Tanga Car Deals,\n\nI'm interested in the following vehicles:\n";
        
        cart.forEach((item, index) => {
            message += `${index + 1}. ${item.name} - $${item.price.toLocaleString()} (TZS ${item.priceTzs.toLocaleString()})\n`;
        });
        
        message += `\nTotal: $${cart.reduce((sum, item) => sum + item.price, 0).toLocaleString()} (TZS ${cart.reduce((sum, item) => sum + item.priceTzs, 0).toLocaleString()})`;
        message += "\n\nPlease contact me to proceed with payment.";
        
        // Encode message for URL
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/255712499859?text=${encodedMessage}`;
        
        // Open WhatsApp in new tab
        window.open(whatsappUrl, '_blank');
        
        // Show payment success message
        document.getElementById('payment-success').style.display = 'block';
        document.getElementById('make-offer-btn').style.display = 'none';
        document.getElementById('checkout-btn').style.display = 'none';
    });
    
    // Checkout functionality
    document.getElementById('checkout-btn').addEventListener('click', function(e) {
        e.preventDefault();
        
        if (cart.length === 0) {
            alert('Your cart is empty');
            return;
        }
        
        // In a real application, this would process payment
        alert('Payment processed successfully!');
        
        // Clear cart
        cart = [];
        updateCartCount();
        document.getElementById('payment-success').style.display = 'none';
        document.getElementById('make-offer-btn').style.display = 'block';
        document.getElementById('checkout-btn').style.display = 'block';
        closeModal();
    });
    
    // Continue shopping button
    document.getElementById('continue-shopping-btn').addEventListener('click', function(e) {
        e.preventDefault();
        cart = [];
        updateCartCount();
        document.getElementById('payment-success').style.display = 'none';
        document.getElementById('make-offer-btn').style.display = 'block';
        document.getElementById('checkout-btn').style.display = 'block';
        closeModal();
    });
    
    // Add to cart from modal
    document.getElementById('add-to-cart-btn').addEventListener('click', function() {
        const title = document.getElementById('modal-car-title').textContent;
        const brand = brands.find(b => b.name === title);
        if (brand) {
            addToCart(brand);
            closeModal();
        }
    });
    
    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
});