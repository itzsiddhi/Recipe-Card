// Homepage JavaScript for Recipe Hub
class RecipeHomepage {
    constructor() {
        this.recipes = {
            'chocolate-cake': {
                title: 'Rich Chocolate Cake',
                image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&h=300&fit=crop',
                prepTime: '45 mins',
                servings: '8 servings',
                difficulty: 'Medium',
                description: 'A rich, moist chocolate cake that\'s perfect for any celebration. This recipe creates a decadent dessert with deep chocolate flavor and a tender crumb that melts in your mouth.',
                ingredients: [
                    { amount: '2 cups', ingredient: 'all-purpose flour' },
                    { amount: '2 cups', ingredient: 'granulated sugar' },
                    { amount: '3/4 cup', ingredient: 'unsweetened cocoa powder' },
                    { amount: '2 tsp', ingredient: 'baking powder' },
                    { amount: '1 1/2 tsp', ingredient: 'baking soda' },
                    { amount: '1 tsp', ingredient: 'salt' },
                    { amount: '2 large', ingredient: 'eggs' },
                    { amount: '1 cup', ingredient: 'buttermilk' },
                    { amount: '1 cup', ingredient: 'hot coffee' },
                    { amount: '1/2 cup', ingredient: 'vegetable oil' },
                    { amount: '1 tsp', ingredient: 'vanilla extract' }
                ],
                steps: [
                    'Preheat your oven to 350°F (175°C). Grease two 9-inch round cake pans and dust with cocoa powder.',
                    'In a large bowl, whisk together flour, sugar, cocoa powder, baking powder, baking soda, and salt.',
                    'In another bowl, beat eggs, then mix in buttermilk, hot coffee, oil, and vanilla extract.',
                    'Pour the wet ingredients into the dry ingredients and mix until just combined. Don\'t overmix.',
                    'Divide batter evenly between prepared pans. Bake for 30-35 minutes or until a toothpick comes out clean.',
                    'Cool in pans for 10 minutes, then turn out onto wire racks. Cool completely before frosting.'
                ]
            },
            'beef-stir-fry': {
                title: 'Asian Beef Stir Fry',
                image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=500&h=300&fit=crop',
                prepTime: '20 mins',
                servings: '4 servings',
                difficulty: 'Easy',
                description: 'Quick and flavorful beef stir fry with vegetables and savory sauce. Perfect for a weeknight dinner that\'s both nutritious and delicious.',
                ingredients: [
                    { amount: '1 lb', ingredient: 'beef sirloin, sliced thin' },
                    { amount: '2 tbsp', ingredient: 'vegetable oil' },
                    { amount: '1 large', ingredient: 'bell pepper, sliced' },
                    { amount: '1 large', ingredient: 'onion, sliced' },
                    { amount: '2 cloves', ingredient: 'garlic, minced' },
                    { amount: '2 tbsp', ingredient: 'soy sauce' },
                    { amount: '1 tbsp', ingredient: 'oyster sauce' },
                    { amount: '1 tsp', ingredient: 'sesame oil' },
                    { amount: '2 cups', ingredient: 'steamed rice' }
                ],
                steps: [
                    'Heat oil in a large wok or skillet over high heat.',
                    'Add beef and cook for 2-3 minutes until browned.',
                    'Add bell pepper and onion, stir-fry for 2 minutes.',
                    'Add garlic and cook for 30 seconds until fragrant.',
                    'Mix soy sauce, oyster sauce, and sesame oil in a small bowl.',
                    'Pour sauce over the stir-fry and toss everything together. Serve over rice.'
                ]
            },
            'caesar-salad': {
                title: 'Classic Caesar Salad',
                image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=500&h=300&fit=crop',
                prepTime: '15 mins',
                servings: '4 servings',
                difficulty: 'Easy',
                description: 'Crispy romaine lettuce with homemade dressing and croutons. This classic salad is perfect as a side dish or light meal.',
                ingredients: [
                    { amount: '2 heads', ingredient: 'romaine lettuce, chopped' },
                    { amount: '1/2 cup', ingredient: 'parmesan cheese, grated' },
                    { amount: '1 cup', ingredient: 'croutons' },
                    { amount: '3 tbsp', ingredient: 'mayonnaise' },
                    { amount: '2 tbsp', ingredient: 'lemon juice' },
                    { amount: '2 cloves', ingredient: 'garlic, minced' },
                    { amount: '1 tsp', ingredient: 'worcestershire sauce' },
                    { amount: '1/4 tsp', ingredient: 'black pepper' }
                ],
                steps: [
                    'Wash and chop the romaine lettuce, then place in a large bowl.',
                    'In a small bowl, whisk together mayonnaise, lemon juice, garlic, worcestershire sauce, and black pepper.',
                    'Pour the dressing over the lettuce and toss well.',
                    'Add parmesan cheese and croutons.',
                    'Toss everything together and serve immediately.',
                    'Optional: Add grilled chicken for a complete meal.'
                ]
            },
            'cheesecake': {
                title: 'New York Cheesecake',
                image: 'https://images.unsplash.com/photo-1524351199678-941a58a3df50?w=500&h=300&fit=crop',
                prepTime: '60 mins',
                servings: '12 servings',
                difficulty: 'Hard',
                description: 'Creamy, rich cheesecake with a graham cracker crust. This classic New York style cheesecake is the perfect dessert for special occasions.',
                ingredients: [
                    { amount: '2 cups', ingredient: 'graham cracker crumbs' },
                    { amount: '1/4 cup', ingredient: 'butter, melted' },
                    { amount: '4 packages', ingredient: 'cream cheese, softened' },
                    { amount: '1 cup', ingredient: 'sugar' },
                    { amount: '4 large', ingredient: 'eggs' },
                    { amount: '1 tsp', ingredient: 'vanilla extract' },
                    { amount: '1 cup', ingredient: 'sour cream' },
                    { amount: '3 tbsp', ingredient: 'flour' }
                ],
                steps: [
                    'Preheat oven to 325°F. Mix graham cracker crumbs with melted butter and press into bottom of springform pan.',
                    'Beat cream cheese until smooth, gradually add sugar.',
                    'Add eggs one at a time, then vanilla, sour cream, and flour.',
                    'Pour over crust and bake for 50-60 minutes.',
                    'Cool completely, then refrigerate for at least 4 hours.',
                    'Serve chilled with your favorite toppings.'
                ]
            },
            'grilled-salmon': {
                title: 'Herb-Crusted Salmon',
                image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=500&h=300&fit=crop',
                prepTime: '25 mins',
                servings: '4 servings',
                difficulty: 'Medium',
                description: 'Perfectly grilled salmon with fresh herbs and lemon. A healthy and flavorful main dish that\'s perfect for dinner.',
                ingredients: [
                    { amount: '4 fillets', ingredient: 'salmon (6 oz each)' },
                    { amount: '2 tbsp', ingredient: 'olive oil' },
                    { amount: '2 tbsp', ingredient: 'fresh dill, chopped' },
                    { amount: '2 tbsp', ingredient: 'fresh parsley, chopped' },
                    { amount: '2 cloves', ingredient: 'garlic, minced' },
                    { amount: '1 lemon', ingredient: 'juiced and zested' },
                    { amount: '1 tsp', ingredient: 'salt' },
                    { amount: '1/2 tsp', ingredient: 'black pepper' }
                ],
                steps: [
                    'Preheat grill to medium-high heat.',
                    'Mix olive oil, herbs, garlic, lemon juice, zest, salt, and pepper.',
                    'Brush salmon fillets with herb mixture.',
                    'Grill salmon for 4-5 minutes per side until cooked through.',
                    'Let rest for 2 minutes before serving.',
                    'Serve with lemon wedges and your favorite sides.'
                ]
            },
            'tiramisu': {
                title: 'Classic Tiramisu',
                image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=500&h=300&fit=crop',
                prepTime: '30 mins',
                servings: '8 servings',
                difficulty: 'Medium',
                description: 'Traditional Italian dessert with coffee-soaked ladyfingers and mascarpone cream. A perfect ending to any Italian meal.',
                ingredients: [
                    { amount: '6', ingredient: 'egg yolks' },
                    { amount: '3/4 cup', ingredient: 'sugar' },
                    { amount: '1 1/3 cups', ingredient: 'mascarpone cheese' },
                    { amount: '1 3/4 cups', ingredient: 'heavy cream' },
                    { amount: '2 packages', ingredient: 'ladyfinger cookies' },
                    { amount: '1 cup', ingredient: 'strong espresso, cooled' },
                    { amount: '3 tbsp', ingredient: 'coffee liqueur' },
                    { amount: '1/4 cup', ingredient: 'cocoa powder' }
                ],
                steps: [
                    'Whisk egg yolks and sugar until thick and pale.',
                    'Add mascarpone and beat until smooth.',
                    'Whip cream to stiff peaks and fold into mascarpone mixture.',
                    'Combine espresso and coffee liqueur in a shallow dish.',
                    'Dip ladyfingers briefly in coffee mixture and arrange in dish.',
                    'Spread half the mascarpone mixture over ladyfingers. Repeat layers and dust with cocoa powder.'
                ]
            },
            'chicken-tacos': {
                title: 'Spicy Chicken Tacos',
                image: 'https://www.countrysidecravings.com/wp-content/uploads/2015/01/spicy-chicken-tacos-image.jpg',
                prepTime: '30 mins',
                servings: '6 servings',
                difficulty: 'Easy',
                description: 'Flavorful chicken tacos with fresh toppings and spicy sauce. Perfect for a fun family dinner or casual entertaining.',
                ingredients: [
                    { amount: '2 lbs', ingredient: 'chicken breast, diced' },
                    { amount: '2 tbsp', ingredient: 'taco seasoning' },
                    { amount: '12', ingredient: 'corn tortillas' },
                    { amount: '1 cup', ingredient: 'shredded lettuce' },
                    { amount: '1 cup', ingredient: 'diced tomatoes' },
                    { amount: '1/2 cup', ingredient: 'red onion, diced' },
                    { amount: '1 cup', ingredient: 'shredded cheese' },
                    { amount: '1/2 cup', ingredient: 'sour cream' },
                    { amount: '1/4 cup', ingredient: 'cilantro, chopped' }
                ],
                steps: [
                    'Season chicken with taco seasoning and cook in a skillet until done.',
                    'Warm tortillas in a dry skillet or microwave.',
                    'Fill tortillas with chicken and desired toppings.',
                    'Serve with lime wedges and hot sauce.',
                    'Optional: Add avocado or guacamole for extra flavor.',
                    'Enjoy immediately while warm!'
                ]
            },
            'bruschetta': {
                title: 'Fresh Tomato Bruschetta',
                image: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=500&h=300&fit=crop',
                prepTime: '15 mins',
                servings: '6 servings',
                difficulty: 'Easy',
                description: 'Crispy bread topped with fresh tomatoes, basil, and garlic. A perfect appetizer that captures the essence of Italian cuisine.',
                ingredients: [
                    { amount: '1 loaf', ingredient: 'Italian bread, sliced' },
                    { amount: '4 large', ingredient: 'tomatoes, diced' },
                    { amount: '3 cloves', ingredient: 'garlic, minced' },
                    { amount: '1/4 cup', ingredient: 'fresh basil, chopped' },
                    { amount: '3 tbsp', ingredient: 'olive oil' },
                    { amount: '1 tbsp', ingredient: 'balsamic vinegar' },
                    { amount: '1/2 tsp', ingredient: 'salt' },
                    { amount: '1/4 tsp', ingredient: 'black pepper' }
                ],
                steps: [
                    'Toast bread slices until golden brown.',
                    'Mix diced tomatoes, garlic, basil, olive oil, and balsamic vinegar.',
                    'Season with salt and pepper.',
                    'Rub toasted bread with a garlic clove for extra flavor.',
                    'Top each slice with tomato mixture.',
                    'Serve immediately for best texture.'
                ]
            },
            'chocolate-chip-cookies': {
                title: 'Perfect Chocolate Chip Cookies',
                image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=500&h=300&fit=crop',
                prepTime: '25 mins',
                servings: '24 cookies',
                difficulty: 'Easy',
                description: 'Soft, chewy cookies with melted chocolate chips. The perfect treat for any occasion and loved by all ages.',
                ingredients: [
                    { amount: '2 1/4 cups', ingredient: 'all-purpose flour' },
                    { amount: '1 tsp', ingredient: 'baking soda' },
                    { amount: '1 tsp', ingredient: 'salt' },
                    { amount: '1 cup', ingredient: 'butter, softened' },
                    { amount: '3/4 cup', ingredient: 'granulated sugar' },
                    { amount: '3/4 cup', ingredient: 'brown sugar' },
                    { amount: '2 large', ingredient: 'eggs' },
                    { amount: '2 tsp', ingredient: 'vanilla extract' },
                    { amount: '2 cups', ingredient: 'chocolate chips' }
                ],
                steps: [
                    'Preheat oven to 375°F. Line baking sheets with parchment paper.',
                    'Mix flour, baking soda, and salt in a bowl.',
                    'Cream butter and both sugars until fluffy.',
                    'Add eggs and vanilla, then gradually mix in flour mixture.',
                    'Stir in chocolate chips.',
                    'Drop rounded tablespoons of dough on prepared sheets and bake for 9-11 minutes.'
                ]
            },
            'smoothie-bowl': {
                title: 'Tropical Smoothie Bowl',
                image: 'https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?w=500&h=300&fit=crop',
                prepTime: '10 mins',
                servings: '2 servings',
                difficulty: 'Easy',
                description: 'Refreshing smoothie bowl with tropical fruits and toppings. A healthy and Instagram-worthy breakfast or snack.',
                ingredients: [
                    { amount: '1 cup', ingredient: 'frozen mango chunks' },
                    { amount: '1/2 cup', ingredient: 'frozen pineapple' },
                    { amount: '1', ingredient: 'frozen banana' },
                    { amount: '1/2 cup', ingredient: 'coconut milk' },
                    { amount: '1 tbsp', ingredient: 'honey' },
                    { amount: '1/4 cup', ingredient: 'granola' },
                    { amount: '2 tbsp', ingredient: 'coconut flakes' },
                    { amount: '1/4 cup', ingredient: 'fresh berries' }
                ],
                steps: [
                    'Blend frozen fruits with coconut milk and honey until thick and creamy.',
                    'Pour into bowls.',
                    'Top with granola, coconut flakes, and fresh berries.',
                    'Add other toppings like chia seeds or nuts if desired.',
                    'Serve immediately.',
                    'Take a photo for Instagram before eating!'
                ]
            }
        };
        
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.setupScrollAnimations();
        this.setupSmoothScrolling();
    }

    setupEventListeners() {
        // Mobile menu toggle
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');
        
        if (hamburger) {
            hamburger.addEventListener('click', () => {
                hamburger.classList.toggle('active');
                navMenu.classList.toggle('active');
            });
        }

        // Close mobile menu when clicking nav links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger?.classList.remove('active');
                navMenu?.classList.remove('active');
            });
        });

        // Recipe filtering
        const filterButtons = document.querySelectorAll('.filter-btn');
        filterButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                this.filterRecipes(e.target.dataset.category);
                this.updateActiveFilter(e.target);
            });
        });

        // Recipe card clicks
        const recipeCards = document.querySelectorAll('.recipe-card');
        recipeCards.forEach(card => {
            card.addEventListener('click', () => {
                const recipeId = card.dataset.recipe;
                this.redirectToRecipe(recipeId);
            });
        });

        // View recipe buttons
        const viewButtons = document.querySelectorAll('.view-recipe-btn');
        viewButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.stopPropagation();
                const recipeCard = button.closest('.recipe-card');
                const recipeId = recipeCard.dataset.recipe;
                this.redirectToRecipe(recipeId);
            });
        });

        // Category card clicks
        const categoryCards = document.querySelectorAll('.category-card');
        categoryCards.forEach(card => {
            card.addEventListener('click', () => {
                const category = card.classList[1]; // Get the category class
                this.scrollToRecipes();
                setTimeout(() => {
                    this.filterRecipes(category);
                    const filterBtn = document.querySelector(`[data-category="${category}"]`);
                    if (filterBtn) this.updateActiveFilter(filterBtn);
                }, 500);
            });
        });

        // Scroll indicator
        const scrollIndicator = document.querySelector('.scroll-indicator');
        if (scrollIndicator) {
            scrollIndicator.addEventListener('click', () => {
                this.scrollToSection('.stats-section');
            });
        }
    }

    setupScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);

        // Add scroll reveal class and observe elements
        const elementsToReveal = [
            '.stat-item',
            '.category-card',
            '.recipe-card',
            '.about-content'
        ];

        elementsToReveal.forEach(selector => {
            document.querySelectorAll(selector).forEach((el, index) => {
                el.classList.add('scroll-reveal');
                el.style.transitionDelay = `${index * 0.1}s`;
                observer.observe(el);
            });
        });
    }

    setupSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    filterRecipes(category) {
        const recipeCards = document.querySelectorAll('.recipe-card');
        
        recipeCards.forEach(card => {
            const cardCategory = card.dataset.category;
            
            if (category === 'all' || cardCategory === category) {
                card.classList.remove('hidden');
                card.style.animation = 'fadeInUp 0.5s ease forwards';
            } else {
                card.classList.add('hidden');
            }
        });

        // Add stagger effect to visible cards
        const visibleCards = document.querySelectorAll('.recipe-card:not(.hidden)');
        visibleCards.forEach((card, index) => {
            setTimeout(() => {
                card.style.animation = 'fadeInUp 0.5s ease forwards';
            }, index * 100);
        });
    }

    updateActiveFilter(activeButton) {
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        activeButton.classList.add('active');
    }

    scrollToRecipes() {
        const recipesSection = document.querySelector('.recipes-section');
        if (recipesSection) {
            recipesSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }

    scrollToSection(selector) {
        const section = document.querySelector(selector);
        if (section) {
            section.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }

    redirectToRecipe(recipeId) {
        const recipe = this.recipes[recipeId];
        if (recipe) {
            // Store recipe data in localStorage for the recipe page
            localStorage.setItem('currentRecipe', JSON.stringify({
                id: recipeId,
                ...recipe
            }));
            
            // Navigate to the recipe page
            window.location.href = 'recipe.html';
        } else {
            this.showToast('Recipe not found!', 'error');
        }
    }

    showToast(message, type = 'info', duration = 3000) {
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.innerHTML = message;
        
        Object.assign(toast.style, {
            position: 'fixed',
            top: '20px',
            right: '20px',
            padding: '15px 20px',
            borderRadius: '8px',
            color: 'white',
            fontWeight: '500',
            zIndex: '10000',
            transform: 'translateX(100%)',
            transition: 'transform 0.3s ease',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
        });

        const colors = {
            success: '#28a745',
            error: '#dc3545',
            info: '#667eea',
            warning: '#ffc107'
        };
        toast.style.background = colors[type] || colors.info;
        
        document.body.appendChild(toast);
        
        setTimeout(() => {
            toast.style.transform = 'translateX(0)';
        }, 100);
        
        setTimeout(() => {
            toast.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (document.body.contains(toast)) {
                    document.body.removeChild(toast);
                }
            }, 300);
        }, duration);
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    new RecipeHomepage();
    
    // Add some dynamic effects
    const hero = document.querySelector('.hero');
    if (hero) {
        // Enhanced parallax effect for hero background
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.3;
            
            // Apply parallax to hero background
            hero.style.transform = `translateY(${rate}px)`;
            
            // Add fade effect as user scrolls past hero
            const heroHeight = hero.offsetHeight;
            const opacity = Math.max(0, 1 - (scrolled / heroHeight));
            hero.style.opacity = opacity;
        });
    }
    
    // Floating animation for recipe cards
    const recipeCards = document.querySelectorAll('.recipe-card');
    recipeCards.forEach((card, index) => {
        // Add subtle floating animation
        setInterval(() => {
            card.style.transform = `translateY(${Math.sin(Date.now() * 0.001 + index) * 2}px)`;
        }, 50);
    });
    
    // Dynamic stats counter animation
    const statNumbers = document.querySelectorAll('.stat-number');
    const observerOptions = {
        threshold: 0.5
    };
    
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const number = entry.target;
                const finalValue = number.textContent;
                
                // Simple animation for numeric values
                if (finalValue.includes('+')) {
                    let current = 0;
                    const target = parseInt(finalValue);
                    const increment = target / 30;
                    
                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= target) {
                            number.textContent = finalValue;
                            clearInterval(timer);
                        } else {
                            number.textContent = Math.floor(current) + '+';
                        }
                    }, 50);
                }
                
                statsObserver.unobserve(number);
            }
        });
    }, observerOptions);
    
    statNumbers.forEach(number => {
        statsObserver.observe(number);
    });
});
