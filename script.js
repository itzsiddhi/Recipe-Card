// Interactive Recipe Card JavaScript
class RecipeCard {
    constructor() {
        this.currentStep = 0;
        this.totalSteps = 6;
        this.isCookingStarted = false;
        this.timer = null;
        this.timerSeconds = 0;
        this.timerRunning = false;
        this.cookingStartTime = null;
        
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.initializeProgress();
        this.initializeSections();
    }

    setupEventListeners() {
        // Toggle buttons for sections
        document.getElementById('ingredientsToggle').addEventListener('click', () => {
            this.toggleSection('ingredientsContent', 'ingredientsToggle');
        });
        
        document.getElementById('instructionsToggle').addEventListener('click', () => {
            this.toggleSection('instructionsContent', 'instructionsToggle');
        });

        // Section headers (also toggle)
        document.getElementById('ingredientsHeader').addEventListener('click', () => {
            this.toggleSection('ingredientsContent', 'ingredientsToggle');
        });
        
        document.getElementById('instructionsHeader').addEventListener('click', () => {
            this.toggleSection('instructionsContent', 'instructionsToggle');
        });

        // Action buttons
        document.getElementById('startCookingBtn').addEventListener('click', () => {
            this.startCooking();
        });
        
        document.getElementById('nextStepBtn').addEventListener('click', () => {
            this.nextStep();
        });
        
        document.getElementById('resetBtn').addEventListener('click', () => {
            this.resetCooking();
        });
        
        document.getElementById('printBtn').addEventListener('click', () => {
            this.printRecipe();
        });

        // Timer controls
        document.getElementById('pauseTimer').addEventListener('click', () => {
            this.toggleTimer();
        });

        // Ingredient hover effects
        this.setupIngredientHovers();
        
        // Step hover effects
        this.setupStepHovers();
    }

    initializeProgress() {
        this.updateProgress(0);
    }

    initializeSections() {
        // Start with ingredients expanded, instructions collapsed
        this.expandSection('ingredientsContent', 'ingredientsToggle');
        this.collapseSection('instructionsContent', 'instructionsToggle');
    }

    toggleSection(contentId, toggleBtnId) {
        const content = document.getElementById(contentId);
        const toggleBtn = document.getElementById(toggleBtnId);
        
        if (content.classList.contains('collapsed')) {
            this.expandSection(contentId, toggleBtnId);
        } else {
            this.collapseSection(contentId, toggleBtnId);
        }
    }

    expandSection(contentId, toggleBtnId) {
        const content = document.getElementById(contentId);
        const toggleBtn = document.getElementById(toggleBtnId);
        
        content.classList.remove('collapsed');
        toggleBtn.classList.add('rotated');
        
        // Add animation class
        content.style.animation = 'slideDown 0.4s ease forwards';
    }

    collapseSection(contentId, toggleBtnId) {
        const content = document.getElementById(contentId);
        const toggleBtn = document.getElementById(toggleBtnId);
        
        content.classList.add('collapsed');
        toggleBtn.classList.remove('rotated');
    }

    setupIngredientHovers() {
        const ingredients = document.querySelectorAll('.ingredient-item');
        
        ingredients.forEach(ingredient => {
            ingredient.addEventListener('mouseenter', () => {
                ingredient.style.transform = 'translateX(10px) scale(1.02)';
                ingredient.style.backgroundColor = '#e3f2fd';
                ingredient.style.borderLeft = '4px solid #667eea';
            });
            
            ingredient.addEventListener('mouseleave', () => {
                ingredient.style.transform = 'translateX(0) scale(1)';
                ingredient.style.backgroundColor = 'transparent';
                ingredient.style.borderLeft = 'none';
            });
            
            ingredient.addEventListener('click', () => {
                this.toggleIngredientCheck(ingredient);
            });
        });
    }

    setupStepHovers() {
        const steps = document.querySelectorAll('.instruction-step');
        
        steps.forEach(step => {
            step.addEventListener('mouseenter', () => {
                if (!step.classList.contains('active')) {
                    step.style.transform = 'translateX(5px)';
                    step.style.boxShadow = '0 3px 10px rgba(102, 126, 234, 0.1)';
                }
            });
            
            step.addEventListener('mouseleave', () => {
                if (!step.classList.contains('active')) {
                    step.style.transform = 'translateX(0)';
                    step.style.boxShadow = 'none';
                }
            });
        });
    }

    toggleIngredientCheck(ingredient) {
        ingredient.classList.toggle('checked');
        
        if (ingredient.classList.contains('checked')) {
            ingredient.style.opacity = '0.6';
            ingredient.style.textDecoration = 'line-through';
            ingredient.innerHTML = '<i class="fas fa-check" style="color: #28a745; margin-right: 10px;"></i>' + ingredient.innerHTML;
        } else {
            ingredient.style.opacity = '1';
            ingredient.style.textDecoration = 'none';
            const checkIcon = ingredient.querySelector('.fa-check');
            if (checkIcon) {
                checkIcon.remove();
            }
        }
    }

    startCooking() {
        if (this.isCookingStarted) return;
        
        this.isCookingStarted = true;
        this.currentStep = 0;
        this.cookingStartTime = Date.now();
        
        // Update UI
        const startBtn = document.getElementById('startCookingBtn');
        const nextBtn = document.getElementById('nextStepBtn');
        
        startBtn.innerHTML = '<i class="fas fa-check"></i> Cooking Started!';
        startBtn.disabled = true;
        startBtn.style.background = '#28a745';
        
        nextBtn.disabled = false;
        
        // Expand instructions section
        this.expandSection('instructionsContent', 'instructionsToggle');
        
        // Start timer
        this.startTimer();
        
        // Highlight first step
        this.highlightStep(1);
        
        // Update progress
        this.updateProgress(1 / this.totalSteps * 100);
        
        // Show encouraging message
        this.showToast('Cooking started! Follow the steps and enjoy!', 'success');
        
        // Scroll to instructions
        document.querySelector('.instructions-section').scrollIntoView({ 
            behavior: 'smooth',
            block: 'center'
        });
    }

    nextStep() {
        if (!this.isCookingStarted || this.currentStep >= this.totalSteps) return;
        
        // Mark current step as completed
        if (this.currentStep > 0) {
            this.markStepCompleted(this.currentStep);
        }
        
        this.currentStep++;
        
        // Update progress
        const progress = (this.currentStep / this.totalSteps) * 100;
        this.updateProgress(progress);
        
        if (this.currentStep <= this.totalSteps) {
            this.highlightStep(this.currentStep);
            
            // Update next button
            const nextBtn = document.getElementById('nextStepBtn');
            if (this.currentStep === this.totalSteps) {
                nextBtn.innerHTML = '<i class="fas fa-flag-checkered"></i> Complete!';
            }
            
            this.showToast(`Step ${this.currentStep} activated!`, 'info');
        } else {
            this.completeCooking();
        }
    }

    highlightStep(stepNumber) {
        // Remove all active states
        document.querySelectorAll('.instruction-step').forEach(step => {
            step.classList.remove('active');
        });
        
        // Add active state to current step
        const currentStep = document.querySelector(`[data-step="${stepNumber}"]`);
        if (currentStep) {
            currentStep.classList.add('active');
            
            // Scroll to active step
            currentStep.scrollIntoView({ 
                behavior: 'smooth',
                block: 'center'
            });
        }
    }

    markStepCompleted(stepNumber) {
        const step = document.querySelector(`[data-step="${stepNumber}"]`);
        if (step) {
            step.classList.remove('active');
            step.classList.add('completed');
            
            // Add checkmark to step number
            const stepNum = step.querySelector('.step-number');
            stepNum.innerHTML = '<i class="fas fa-check"></i>';
        }
    }

    completeCooking() {
        // Mark final step as completed
        this.markStepCompleted(this.totalSteps);
        
        // Update progress to 100%
        this.updateProgress(100);
        
        // Stop timer
        this.stopTimer();
        
        // Update buttons
        const nextBtn = document.getElementById('nextStepBtn');
        nextBtn.innerHTML = '<i class="fas fa-trophy"></i> Recipe Complete!';
        nextBtn.disabled = true;
        nextBtn.style.background = '#ffd700';
        nextBtn.style.color = '#333';
        
        // Calculate total cooking time
        const totalTime = Math.floor((Date.now() - this.cookingStartTime) / 1000);
        const minutes = Math.floor(totalTime / 60);
        const seconds = totalTime % 60;
        
        // Show completion message
        this.showToast(
            `🎉 Congratulations! Recipe completed in ${minutes}m ${seconds}s!`, 
            'success',
            5000
        );
        
        // Celebration animation
        this.celebrateCompletion();
    }

    celebrateCompletion() {
        // Add celebration class to recipe card
        const recipeCard = document.querySelector('.recipe-card');
        recipeCard.style.animation = 'pulse 0.6s ease-in-out 3';
        
        // Create confetti effect (simple version)
        this.createConfetti();
    }

    createConfetti() {
        for (let i = 0; i < 50; i++) {
            const confetti = document.createElement('div');
            confetti.style.cssText = `
                position: fixed;
                width: 10px;
                height: 10px;
                background: ${['#667eea', '#764ba2', '#ffd700', '#28a745', '#dc3545'][i % 5]};
                top: -10px;
                left: ${Math.random() * 100}vw;
                border-radius: 50%;
                z-index: 9999;
                pointer-events: none;
                animation: confettiFall 3s ease-out forwards;
            `;
            
            document.body.appendChild(confetti);
            
            setTimeout(() => {
                if (document.body.contains(confetti)) {
                    document.body.removeChild(confetti);
                }
            }, 3000);
        }
    }

    resetCooking() {
        this.isCookingStarted = false;
        this.currentStep = 0;
        this.stopTimer();
        this.resetTimer();
        
        // Reset UI elements
        const startBtn = document.getElementById('startCookingBtn');
        const nextBtn = document.getElementById('nextStepBtn');
        
        startBtn.innerHTML = '<i class="fas fa-play"></i> Start Cooking';
        startBtn.disabled = false;
        startBtn.style.background = '';
        
        nextBtn.innerHTML = '<i class="fas fa-arrow-right"></i> Next Step';
        nextBtn.disabled = true;
        nextBtn.style.background = '';
        nextBtn.style.color = '';
        
        // Reset all steps
        document.querySelectorAll('.instruction-step').forEach((step, index) => {
            step.classList.remove('active', 'completed');
            const stepNum = step.querySelector('.step-number');
            stepNum.innerHTML = index + 1;
        });
        
        // Reset ingredients
        document.querySelectorAll('.ingredient-item.checked').forEach(ingredient => {
            this.toggleIngredientCheck(ingredient);
        });
        
        // Reset progress
        this.updateProgress(0);
        
        this.showToast('Recipe reset successfully!', 'info');
    }

    updateProgress(percentage) {
        const progressBar = document.getElementById('progressBar');
        const progressText = document.getElementById('progressText');
        
        progressBar.style.setProperty('--progress-width', `${percentage}%`);
        progressBar.style.width = `${percentage}%`;
        
        if (percentage === 0) {
            progressText.textContent = 'Ready to start cooking!';
        } else if (percentage === 100) {
            progressText.textContent = '🎉 Recipe completed! Enjoy your delicious cake!';
        } else {
            const step = Math.ceil((percentage / 100) * this.totalSteps);
            progressText.textContent = `Step ${step} of ${this.totalSteps} - ${Math.round(percentage)}% complete`;
        }
    }

    startTimer() {
        this.timerRunning = true;
        this.timerSeconds = 0;
        document.getElementById('timerContainer').classList.add('active');
        
        this.timer = setInterval(() => {
            if (this.timerRunning) {
                this.timerSeconds++;
                this.updateTimerDisplay();
            }
        }, 1000);
    }

    stopTimer() {
        this.timerRunning = false;
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }
    }

    toggleTimer() {
        const pauseBtn = document.getElementById('pauseTimer');
        
        if (this.timerRunning) {
            this.timerRunning = false;
            pauseBtn.innerHTML = '<i class="fas fa-play"></i>';
            pauseBtn.style.background = '#28a745';
        } else {
            this.timerRunning = true;
            pauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
            pauseBtn.style.background = '#667eea';
        }
    }

    resetTimer() {
        this.stopTimer();
        this.timerSeconds = 0;
        this.updateTimerDisplay();
        document.getElementById('timerContainer').classList.remove('active');
        
        const pauseBtn = document.getElementById('pauseTimer');
        pauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
        pauseBtn.style.background = '#667eea';
    }

    updateTimerDisplay() {
        const minutes = Math.floor(this.timerSeconds / 60);
        const seconds = this.timerSeconds % 60;
        const display = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        document.getElementById('timerDisplay').textContent = display;
    }

    printRecipe() {
        // Ensure all sections are visible for printing
        const ingredientsContent = document.getElementById('ingredientsContent');
        const instructionsContent = document.getElementById('instructionsContent');
        
        ingredientsContent.classList.remove('collapsed');
        instructionsContent.classList.remove('collapsed');
        
        this.showToast('Preparing recipe for printing...', 'info');
        
        setTimeout(() => {
            window.print();
        }, 500);
    }

    showToast(message, type = 'info', duration = 3000) {
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.innerHTML = message;
        
        // Style the toast
        Object.assign(toast.style, {
            position: 'fixed',
            top: '20px',
            right: '20px',
            padding: '15px 20px',
            borderRadius: '8px',
            color: 'white',
            fontWeight: '500',
            zIndex: '10000',
            maxWidth: '350px',
            transform: 'translateX(100%)',
            transition: 'transform 0.3s ease',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            fontSize: '14px',
            lineHeight: '1.4'
        });

        // Set color based on type
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

// Additional CSS animations to be injected
const additionalStyles = `
@keyframes confettiFall {
    0% {
        transform: translateY(-10px) rotate(0deg);
        opacity: 1;
    }
    100% {
        transform: translateY(100vh) rotate(720deg);
        opacity: 0;
    }
}

.ingredient-item {
    transition: all 0.3s ease;
}

.ingredient-item:hover {
    transform: translateX(5px) scale(1.02);
}

.toast {
    font-family: 'Poppins', sans-serif;
}
`;

// Inject additional styles
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);

// Initialize the recipe card when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    new RecipeCard();
});

// Add some fun interactions for engagement
document.addEventListener('DOMContentLoaded', function() {
    // Add floating animation to the recipe card
    const recipeCard = document.querySelector('.recipe-card');
    if (recipeCard) {
        setInterval(() => {
            recipeCard.style.transform = 'translateY(-2px)';
            setTimeout(() => {
                recipeCard.style.transform = 'translateY(0px)';
            }, 2000);
        }, 4000);
    }
    
    // Add sparkle effect to the recipe title
    const title = document.querySelector('.recipe-title');
    if (title) {
        title.addEventListener('mouseenter', () => {
            title.style.textShadow = '2px 2px 4px rgba(0, 0, 0, 0.5), 0 0 20px rgba(255, 215, 0, 0.8)';
        });
        
        title.addEventListener('mouseleave', () => {
            title.style.textShadow = '2px 2px 4px rgba(0, 0, 0, 0.5)';
        });
    }
});
