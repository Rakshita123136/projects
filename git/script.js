document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()
  
        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
        })
      })
    })
  
    // Add a simple command demonstration feature
    const commandList = document.querySelector(".command-list")
    if (commandList) {
      commandList.addEventListener("click", (e) => {
        if (e.target.tagName === "H3") {
          const command = e.target.textContent
          const description = e.target.nextElementSibling.textContent
          alert(`Command: ${command}\nDescription: ${description}\n\nTry this command in your terminal!`)
        }
      })
    }
  
    // Add a "Back to Top" button
    const backToTopButton = document.createElement("button")
    backToTopButton.textContent = "Back to Top"
    backToTopButton.style.position = "fixed"
    backToTopButton.style.bottom = "20px"
    backToTopButton.style.right = "20px"
    backToTopButton.style.display = "none"
    document.body.appendChild(backToTopButton)
  
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        backToTopButton.style.display = "block"
      } else {
        backToTopButton.style.display = "none"
      }
    })
  
    backToTopButton.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" })
    })
  
    // Add section reveal animation
    const observerOptions = {
        threshold: 0.1
    };
  
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
  
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
  
    // Add cool hover effect to command cards
    document.querySelectorAll('.command-card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
  
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });
  
    // Add success animation for copy button
    document.querySelectorAll('.copy-btn').forEach(button => {
        button.addEventListener('click', () => {
            button.classList.add('copied');
            setTimeout(() => {
                button.classList.remove('copied');
            }, 1500);
        });
    });
  
    // Command details data
    const commandDetails = {
        init: {
            title: 'git init',
            description: 'Initialize a new Git repository',
            usage: '$ git init',
            options: [
                '--bare: Create a bare repository',
                '--quiet: Only print error messages'
            ]
        },
        add: {
            title: 'git add',
            description: 'Stage changes for commit',
            usage: '$ git add <file-name>',
            options: [
                '-A: Stage all changes',
                '-p: Stage changes interactively',
                '--patch: Stage changes interactively'
            ]
        },
        commit: {
            title: 'git commit',
            description: 'Save staged changes to the repository',
            usage: '$ git commit -m "commit message"',
            options: [
                '-m: Add commit message',
                '-a: Stage modified and deleted files automatically',
                '--amend: Modify the last commit'
            ]
        },
        push: {
            title: 'git push',
            description: 'Upload local changes to remote repository',
            usage: '$ git push origin main',
            options: [
                '-u: Set upstream branch',
                '--force: Force push changes',
                '--tags: Push all tags'
            ]
        },
        pull: {
            title: 'git pull',
            description: 'Download changes from remote repository',
            usage: '$ git pull origin main',
            options: [
                '--rebase: Rebase instead of merge',
                '--no-commit: Don\'t commit automatically',
                '--squash: Squash all commits into one'
            ]
        }
    };
  
    // Handle planet clicks
    document.querySelectorAll('.command-planet').forEach(planet => {
        planet.addEventListener('click', () => {
            const command = planet.dataset.command;
            const details = commandDetails[command];
            const detailsPanel = document.querySelector('.command-details-panel');
            
            detailsPanel.innerHTML = `
                <h3>${details.title}</h3>
                <p>${details.description}</p>
                <div class="command-example">
                    <code>${details.usage}</code>
                    <button class="copy-btn" aria-label="Copy command">
                        <i class="fas fa-copy"></i>
                    </button>
                </div>
                <h4>Common Options:</h4>
                <ul>
                    ${details.options.map(opt => `<li><code>${opt}</code></li>`).join('')}
                </ul>
            `;
            
            detailsPanel.classList.add('active');
        });
    });
  
    // Pause animation on hover
    document.querySelectorAll('.command-planet').forEach(planet => {
        planet.addEventListener('mouseenter', () => {
            planet.style.animationPlayState = 'paused';
        });
        
        planet.addEventListener('mouseleave', () => {
            planet.style.animationPlayState = 'running';
        });
    });
  
    // Define the sections in order
    const sections = [
        'getting-started',
        'git-basics',
        'branching',
        'flags',
        'advanced'
    ];
  
    // Hide all sections initially
    document.querySelectorAll('.content-section').forEach(section => {
        section.style.display = 'none';
    });
  
    // Show the first section or the one in the URL hash
    const initialSection = window.location.hash.slice(1) || 'getting-started';
    document.getElementById(initialSection).style.display = 'block';
    updateNavigation(initialSection);
  
    // Add click handlers for sidebar links
    document.querySelectorAll('.section-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionId = e.target.getAttribute('href').slice(1);
            switchSection(sectionId);
        });
    });
  
    // Add click handlers for next/prev buttons
    document.querySelector('.next').addEventListener('click', (e) => {
        e.preventDefault();
        const currentSection = getCurrentSection();
        const currentIndex = sections.indexOf(currentSection);
        if (currentIndex < sections.length - 1) {
            switchSection(sections[currentIndex + 1]);
        }
    });
  
    document.querySelector('.prev').addEventListener('click', (e) => {
        e.preventDefault();
        const currentSection = getCurrentSection();
        const currentIndex = sections.indexOf(currentSection);
        if (currentIndex > 0) {
            switchSection(sections[currentIndex - 1]);
        }
    });
  
    // Mobile menu toggle
    const menuToggle = document.createElement('button');
    menuToggle.className = 'menu-toggle';
    menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    document.querySelector('.content-header').prepend(menuToggle);
  
    menuToggle.addEventListener('click', () => {
        document.querySelector('.sidebar').classList.toggle('active');
    });
  
    function getCurrentSection() {
        return window.location.hash.slice(1) || 'getting-started';
    }
  
    function switchSection(sectionId) {
        // Hide all sections
        document.querySelectorAll('.content-section').forEach(section => {
            section.style.display = 'none';
        });
        
        // Show selected section
        document.getElementById(sectionId).style.display = 'block';
        
        // Update URL hash
        window.location.hash = sectionId;
        
        // Update active state in sidebar
        document.querySelectorAll('.section-link').forEach(link => {
            link.classList.remove('active');
        });
        document.querySelector(`a[href="#${sectionId}"]`).classList.add('active');
  
        // Update navigation buttons
        updateNavigation(sectionId);
    }
  
    function updateNavigation(currentSectionId) {
        const currentIndex = sections.indexOf(currentSectionId);
        const prevButton = document.querySelector('.prev');
        const nextButton = document.querySelector('.next');
  
        // Update Previous button
        if (currentIndex > 0) {
            prevButton.style.display = 'inline-block';
        } else {
            prevButton.style.display = 'none';
        }
  
        // Update Next button
        if (currentIndex < sections.length - 1) {
            nextButton.style.display = 'inline-block';
        } else {
            nextButton.style.display = 'none';
        }
    }
  })
  
  