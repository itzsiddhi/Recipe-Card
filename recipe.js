// Dynamic Recipe Page JavaScript
class DynamicRecipePage extends RecipeCard {
    constructor() {
        super();
        this.currentRecipe = null;
        this.loadRecipeFromStorage();
    }

    loadRecipeFromStorage() {
        const storedRecipe = localStorage.getItem('currentRecipe');
        if (storedRecipe) {
            this.currentRecipe = JSON.parse(storedRecipe);
            this.populateRecipeData();
            this.updatePageTitle();
            this.generateProTips();
            this.loadRelatedRecipes();
        } else {
            // Fallback to default chocolate cake recipe
            this.loadDefaultRecipe();
        }
    }

    loadDefaultRecipe() {
        this.currentRecipe = {
            id: 'chocolate-cake',
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
        };
        this.populateRecipeData();
        this.updatePageTitle();
        this.generateProTips();
        this.loadRelatedRecipes();
    }

    populateRecipeData() {
        if (!this.currentRecipe) return;

        // Update basic info
        document.getElementById('recipeImage').src = this.currentRecipe.image;
        document.getElementById('recipeImage').alt = this.currentRecipe.title;
        document.getElementById('recipeTitleMain').textContent = this.currentRecipe.title;
        document.getElementById('recipePrepTime').textContent = this.currentRecipe.prepTime;
        document.getElementById('recipeServings').textContent = this.currentRecipe.servings;
        document.getElementById('recipeDifficulty').textContent = this.currentRecipe.difficulty;
        document.getElementById('recipeDesc').textContent = this.currentRecipe.description;

        // Update ingredients
        this.populateIngredients();

        // Update instructions
        this.populateInstructions();

        // Update total steps for progress tracking
        this.totalSteps = this.currentRecipe.steps.length;
    }

    populateIngredients() {
        const ingredientsList = document.getElementById('ingredientsList');
        if (!this.currentRecipe.ingredients) return;

        ingredientsList.innerHTML = this.currentRecipe.ingredients.map(item => `
            <li class="ingredient-item">
                <span class="amount">${item.amount}</span>
                <span class="ingredient">${item.ingredient}</span>
            </li>
        `).join('');

        // Re-setup ingredient hover effects
        this.setupIngredientHovers();
    }

    populateInstructions() {
        const instructionsList = document.getElementById('instructionsList');
        if (!this.currentRecipe.steps) return;

        instructionsList.innerHTML = this.currentRecipe.steps.map((step, index) => `
            <li class="instruction-step" data-step="${index + 1}">
                <div class="step-number">${index + 1}</div>
                <div class="step-content">
                    <strong>Step ${index + 1}:</strong> ${step}
                </div>
            </li>
        `).join('');

        // Re-setup step hover effects
        this.setupStepHovers();
    }

    updatePageTitle() {
        if (this.currentRecipe) {
            document.getElementById('recipeTitle').textContent = `${this.currentRecipe.title} - Recipe Hub`;
        }
    }

    generateProTips() {
        const proTipsContainer = document.getElementById('proTips');
        const recipeId = this.currentRecipe?.id || 'default';
        
        const tipsByRecipe = {
            'chocolate-cake': [
                'Room temperature ingredients mix better',
                'Don\'t open the oven door for the first 25 minutes',
                'Use buttermilk for extra moist texture',
                'Coffee enhances the chocolate flavor without making it taste like coffee'
            ],
            'beef-stir-fry': [
                'Cut beef against the grain for tenderness',
                'Have all ingredients prepped before you start cooking',
                'High heat is key for proper stir-frying',
                'Don\'t overcrowd the pan'
            ],
            'caesar-salad': [
                'Dry the lettuce thoroughly for best texture',
                'Make your own croutons for better flavor',
                'Grate parmesan fresh for the best taste',
                'Chill the serving bowls beforehand'
            ],
            'cheesecake': [
                'Use room temperature cream cheese to avoid lumps',
                'Don\'t overbeat to prevent cracks',
                'Use a water bath for even baking',
                'Cool gradually to prevent cracking'
            ],
            'grilled-salmon': [
                'Pat salmon dry before seasoning',
                'Preheat grill thoroughly for good sear marks',
                'Don\'t flip too early - let it release naturally',
                'Internal temperature should reach 145°F'
            ],
            'tiramisu': [
                'Use strong espresso for best flavor',
                'Don\'t oversoak the ladyfingers',
                'Chill for at least 4 hours before serving',
                'Dust with cocoa just before serving'
            ],
            'chicken-tacos': [
                'Marinate chicken for extra flavor',
                'Warm tortillas for better flexibility',
                'Prepare all toppings before cooking',
                'Squeeze fresh lime over finished tacos'
            ],
            'bruschetta': [
                'Use ripe, in-season tomatoes',
                'Salt the tomatoes and let drain for best texture',
                'Rub toasted bread with garlic for extra flavor',
                'Serve immediately to prevent sogginess'
            ],
            'chocolate-chip-cookies': [
                'Chill dough for thicker cookies',
                'Don\'t overbake - they\'ll continue cooking on the hot pan',
                'Use a mix of brown and white sugar for texture',
                'Let cool on pan for 5 minutes before transferring'
            ],
            'smoothie-bowl': [
                'Use frozen fruit for thick consistency',
                'Don\'t add too much liquid',
                'Prepare toppings while blending',
                'Serve immediately for best texture'
            ]
        };

        const tips = tipsByRecipe[recipeId] || tipsByRecipe['chocolate-cake'];
        
        proTipsContainer.innerHTML = tips.map(tip => `
            <li>${tip}</li>
        `).join('');
    }

    loadRelatedRecipes() {
        const relatedContainer = document.getElementById('relatedRecipes');
        const currentCategory = this.getCurrentRecipeCategory();
        
        // Get related recipes (excluding current one)
        const relatedRecipes = this.getAllRecipes()
            .filter(recipe => recipe.id !== this.currentRecipe?.id)
            .slice(0, 3);

        relatedContainer.innerHTML = relatedRecipes.map(recipe => `
            <div class="related-recipe-card" data-recipe="${recipe.id}">
                <img src="${recipe.image}" alt="${recipe.title}">
                <div class="related-content">
                    <h4>${recipe.title}</h4>
                    <div class="related-meta">
                        <span><i class="fas fa-clock"></i> ${recipe.prepTime}</span>
                        <span><i class="fas fa-star"></i> ${recipe.difficulty}</span>
                    </div>
                </div>
            </div>
        `).join('');

        // Add click handlers for related recipes
        document.querySelectorAll('.related-recipe-card').forEach(card => {
            card.addEventListener('click', () => {
                const recipeId = card.dataset.recipe;
                const recipeData = this.getAllRecipes().find(r => r.id === recipeId);
                if (recipeData) {
                    localStorage.setItem('currentRecipe', JSON.stringify(recipeData));
                    location.reload(); // Reload page with new recipe
                }
            });
        });
    }

    getCurrentRecipeCategory() {
        const recipeId = this.currentRecipe?.id;
        const categoryMap = {
            'chocolate-cake': 'desserts',
            'cheesecake': 'desserts',
            'tiramisu': 'desserts',
            'chocolate-chip-cookies': 'desserts',
            'beef-stir-fry': 'main-dishes',
            'grilled-salmon': 'main-dishes',
            'chicken-tacos': 'main-dishes',
            'caesar-salad': 'appetizers',
            'bruschetta': 'appetizers',
            'smoothie-bowl': 'beverages'
        };
        return categoryMap[recipeId] || 'desserts';
    }

    getAllRecipes() {
        return [
            {
                id: 'chocolate-cake',
                title: 'Rich Chocolate Cake',
                image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop',
                prepTime: '45 mins',
                servings: '8 servings',
                difficulty: 'Medium'
            },
            {
                id: 'beef-stir-fry',
                title: 'Asian Beef Stir Fry',
                image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&h=300&fit=crop',
                prepTime: '20 mins',
                servings: '4 servings',
                difficulty: 'Easy'
            },
            {
                id: 'caesar-salad',
                title: 'Classic Caesar Salad',
                image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&h=300&fit=crop',
                prepTime: '15 mins',
                servings: '4 servings',
                difficulty: 'Easy'
            },
            {
                id: 'cheesecake',
                title: 'New York Cheesecake',
                image: 'https://images.unsplash.com/photo-1524351199678-941a58a3df50?w=400&h=300&fit=crop',
                prepTime: '60 mins',
                servings: '12 servings',
                difficulty: 'Hard'
            },
            {
                id: 'grilled-salmon',
                title: 'Herb-Crusted Salmon',
                image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&h=300&fit=crop',
                prepTime: '25 mins',
                servings: '4 servings',
                difficulty: 'Medium'
            },
            {
                id: 'tiramisu',
                title: 'Classic Tiramisu',
                image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=300&fit=crop',
                prepTime: '30 mins',
                servings: '8 servings',
                difficulty: 'Medium'
            }
        ];
    }

    // Override the completeCooking method to show recipe-specific completion message
    completeCooking() {
        super.completeCooking();
        
        const recipeTitle = this.currentRecipe?.title || 'Recipe';
        this.showToast(
            `🎉 Congratulations! Your ${recipeTitle} is ready to enjoy!`, 
            'success',
            5000
        );
    }

    // Add custom styles for related recipes
    addCustomStyles() {
        const styles = `
            .back-navigation {
                margin: 20px 0;
                padding: 0 20px;
            }
            
            .back-btn {
                display: inline-flex;
                align-items: center;
                gap: 8px;
                color: #667eea;
                text-decoration: none;
                font-weight: 500;
                transition: all 0.3s ease;
                padding: 8px 16px;
                border-radius: 20px;
                background: rgba(102, 126, 234, 0.1);
            }
            
            .back-btn:hover {
                background: #667eea;
                color: white;
                transform: translateX(-5px);
            }
            
            .related-recipes {
                margin-top: 2rem;
            }
            
            .related-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                gap: 1rem;
                margin-top: 1rem;
            }
            
            .related-recipe-card {
                background: white;
                border-radius: 10px;
                overflow: hidden;
                box-shadow: 0 3px 10px rgba(0,0,0,0.1);
                cursor: pointer;
                transition: all 0.3s ease;
            }
            
            .related-recipe-card:hover {
                transform: translateY(-5px);
                box-shadow: 0 5px 20px rgba(0,0,0,0.15);
            }
            
            .related-recipe-card img {
                width: 100%;
                height: 120px;
                object-fit: cover;
            }
            
            .related-content {
                padding: 1rem;
            }
            
            .related-content h4 {
                font-size: 0.9rem;
                margin-bottom: 0.5rem;
                color: #333;
            }
            
            .related-meta {
                display: flex;
                justify-content: space-between;
                font-size: 0.8rem;
                color: #666;
            }
            
            .related-meta span {
                display: flex;
                align-items: center;
                gap: 4px;
            }
            
            .related-meta i {
                color: #667eea;
            }
        `;
        
        const styleSheet = document.createElement('style');
        styleSheet.textContent = styles;
        document.head.appendChild(styleSheet);
    }
}

// Initialize the dynamic recipe page
document.addEventListener('DOMContentLoaded', function() {
    const recipePage = new DynamicRecipePage();
    recipePage.addCustomStyles();
});
