<script>document.addEventListener('DOMContentLoaded', function() {
    const steps = document.querySelectorAll('.step');
    let activeStep = document.querySelector('.step.active') || steps[0];
    activeStep.classList.add('active');
    steps.forEach(step => {
        step.style.webkitTransform = 'translateZ(0)';
        step.style.backfaceVisibility = 'hidden';
    });
    void document.body.offsetHeight;

    document.querySelectorAll('.step').forEach(step => {
        step.addEventListener('click', function() {
            if (this === activeStep) return;
            
            const newActive = this;
            const oldActive = activeStep;
            
           
            newActive.classList.add('active');
            activeStep = newActive;
            
            
            requestAnimationFrame(() => {
                
                setTimeout(() => {
                    oldActive.classList.remove('active');
                    
                   
                    requestAnimationFrame(() => {
                        oldActive.style.webkitTransform = '';
                    });
                }, 0);
            });
        });
      const toggle = step.querySelector('.step-toggle');
        if (toggle) {
            toggle.addEventListener('click', function (event) {
                event.stopPropagation(); 
                step.click();
            });
        }
    });
});</script>
    <script>
const dropdowns = document.querySelectorAll('.dropdown');

// Закрываем все dropdown кроме текущего
function closeOtherDropdowns(currentDropdown) {
  dropdowns.forEach(dropdown => {
    if (dropdown !== currentDropdown && dropdown.classList.contains('active')) {
      dropdown.classList.remove('active');
    }
  });
}

// Обработчик клика по dropdown
dropdowns.forEach(dropdown => {
  const trigger = dropdown.querySelector('span');
  
  trigger.addEventListener('click', function(e) {
    e.stopPropagation();
    dropdown.classList.toggle('active');
    closeOtherDropdowns(dropdown);
  });
});

// Закрываем dropdown при клике вне его
document.addEventListener('click', function() {
  dropdowns.forEach(dropdown => {
    dropdown.classList.remove('active');
  });
});

// Предотвращаем закрытие при клике внутри dropdown
document.querySelectorAll('.dropdown-content').forEach(content => {
  content.addEventListener('click', function(e) {
    e.stopPropagation();
  });
});
</script>
    <script> document.addEventListener('DOMContentLoaded', () => {
            console.log('JavaScript загружен и готов к работе.'); // Проверяем ширину экрана const isMobile = window.matchMedia('(max-width: 768px)').matches; if (isMobile) { const hamburger = document.querySelector('.hamburger'); const menuItems = document.querySelector('.menu-items'); const dropdowns = document.querySelectorAll('.menu-item.dropdown'); console.log('hamburger:', hamburger); // Проверяем, есть ли элемент if (!hamburger) { console.error('Не удалось найти элемент .hamburger'); } if (!menuItems) { console.error('Не удалось найти элемент .menu-items'); } // Тогглируем меню hamburger.addEventListener('click', () => { console.log('Клик по бургеру!'); hamburger.classList.toggle('active'); menuItems.classList.toggle('active'); }); dropdowns.forEach(dropdown => { const dropdownContent = dropdown.querySelector('.dropdown-content'); if (!dropdownContent) { console.error('Не удалось найти dropdown-content внутри элемента: ', dropdown); } // Обработчик клика по меню dropdown.addEventListener('click', () => { console.log('Клик по элементу dropdown:', dropdown); dropdown.classList.toggle('active'); dropdownContent.classList.toggle('active'); }); }); } else { console.log('На десктопе бургер-меню не отображается'); }
        }); </script>
    <script> document.addEventListener('DOMContentLoaded', function () {
            const headers = document.querySelectorAll('.faq-question');
            headers.forEach(header => {
                header.addEventListener('dblclick', () => {
                    header.classList.remove('active');
                });
                header.addEventListener('click', () => {
                    document.querySelectorAll('.faq-question').forEach(otherStep => {
                        if (otherStep !== header) {
                            otherStep.classList.remove('active');
                        }
                    });
                    header.classList.toggle('active');
                });
            });
        });</script>
    <script>
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM loaded, initializing FAQ tabs...');
  
  const tabButtons = document.querySelectorAll('.faq-tab');
  const tabContents = document.querySelectorAll('.tab-content');
  
  console.log(`Found ${tabButtons.length} tab buttons and ${tabContents.length} tab contents`);
  
  tabButtons.forEach(button => {
    button.addEventListener('click', function() {
      console.log(`Tab clicked: ${this.textContent}, data-tab: ${this.getAttribute('data-tab')}`);
      
      tabButtons.forEach(btn => {
        btn.classList.remove('active');
        console.log(`Removed active class from ${btn.textContent}`);
      });
      
      this.classList.add('active');
      console.log(`Added active class to ${this.textContent}`);
      
      const tabId = this.getAttribute('data-tab');
      console.log(`Looking for content with ID: ${tabId}`);
      
      tabContents.forEach(content => {
        content.classList.remove('active');
        console.log(`Hiding content: ${content.id}`);
      });
      
      const activeContent = document.getElementById(tabId);
      if (activeContent) {
        activeContent.classList.add('active');
        console.log(`Showing content: ${tabId}`);
      } else {
        console.error(`Content not found for ID: ${tabId}`);
      }
    });
  });

  // Остальной код аккордеона...
});
  </script>
    
    [%.reviews_script%]
    <script>
const popupOverlay = document.getElementById('popup-overlay');
const closePopupBtn = document.getElementById('close-popup');
const openPopupBtn = document.getElementById('open-popup');

// Функция для открытия попапа
function openPopup() {
  popupOverlay.classList.add('active');
}

// Функция для закрытия попапа
function closePopup() {
  popupOverlay.classList.remove('active');
}

// Добавляем обработчики событий
openPopupBtn.addEventListener('click', openPopup);
closePopupBtn.addEventListener('click', closePopup);

// Закрываем попап при клике вне его
popupOverlay.addEventListener('click', (event) => {
  if (event.target === popupOverlay) {
    closePopup();
  }
});
</script>
<script>
  
const popupOverlay2 = document.getElementById('popup-overlay2');
const closePopupBtn2 = document.getElementById('close-popup2');
const openPopupBtn2 = document.getElementById('open-popup2');


function openPopup2() {
  popupOverlay2.classList.add('active');
}


function closePopup2() {
  popupOverlay2.classList.remove('active');
}


openPopupBtn2.addEventListener('click', openPopup2);
closePopupBtn2.addEventListener('click', closePopup2);


popupOverlay2.addEventListener('click', (event) => {
  if (event.target === popupOverlay2) {
    closePopup2();
  }
});
</script>
<script>
  
const popupOverlay3 = document.getElementById('popup-overlay3');
const closePopupBtn3 = document.getElementById('close-popup3');
const openPopupBtn3 = document.getElementById('open-popup3');


function openPopup3() {
  popupOverlay3.classList.add('active');
  
}


function closePopup3() {
  popupOverlay3.classList.remove('active');
}


openPopupBtn3.addEventListener('click', openPopup3);
closePopupBtn3.addEventListener('click', closePopup3);


popupOverlay3.addEventListener('click', (event) => {
  if (event.target === popupOverlay3) {
    closePopup3();
  }
});
</script>

    <script>document.addEventListener('DOMContentLoaded', function () { // Обработка кликов по фото document.querySelectorAll('.review-photo').forEach(photo => { photo.addEventListener('click', function() { const popup = document.createElement('div'); popup.className = 'photo-popup'; popup.innerHTML = ` <span class="close-review-popup">&times;</span> <img src="${this.src}" alt="${this.alt}"> `; document.body.appendChild(popup); // Показываем попап popup.style.display = 'flex'; // Закрытие попапа popup.querySelector('.close-review-popup').addEventListener('click', function() { popup.remove(); }); }); });
                    });</script>
    <!-- <script>
    const submitButton = document.getElementById('popup-submit');
  const popupOverlay = document.querySelector('.popup-overlay');


submitButton.addEventListener('click', (event) => {
  event.preventDefault(); 

  
  const phoneInput = document.querySelector('.popup-input');
  const phone = phoneInput.value;
  
  fetch('/send-form', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ phone })
  })
  .then(response => {
    if (response.ok) {
      
      nameInput.value = '';
      emailInput.value = '';
      popupOverlay.classList.remove('active');
                
                
                showNotification('Форма успешно отправлена!');
    } else {
      alert('Произошла ошибка при отправке формы. Пожалуйста, попробуйте еще раз.');
    }
  })
  .catch(error => {
    console.error('Ошибка при отправке формы:', error);
    alert('Произошла ошибка при отправке формы. Пожалуйста, попробуйте еще раз.');
  });
});
</script>
-->

    <script>document.querySelectorAll('[data-subsection]').forEach(link => {
                        link.addEventListener('click', function (e) {
                            e.preventDefault();
                            const sectionId = this.getAttribute('data-subsection');
                            const targetSection = document.getElementById(sectionId);
                            if (targetSection) {
                                targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                            }
                        });
                    });</script>
    <script> document.querySelector('.hamburger').addEventListener('click', function () {
                        this.classList.toggle('active');
                        document.querySelector('.menu-items').classList.toggle('active');
                    }); </script>
    <script> // Получаем все ссылки внутри элементов с классом 'dropdown-content'
                    document.querySelectorAll('.dropdown-content a').forEach(function (link) {
                        link.addEventListener('click', function (event) {
                            event.preventDefault(); // Предотвращаем стандартное поведение ссылок const url = this.getAttribute('href'); if (url && url !== '#') { // Переход по ссылке window.location.href = url; } });
                        }); </script>
    <script> const featuresSlider = document.getElementById('featuresSlider');
                        if (featuresSlider) {
                            let featuresSlide = 0;
                            window.scrollFeatures = function (dir) {
                                const dots = document.querySelectorAll('.mobile-indicators .dot');
                                const total = featuresSlider.children.length;

                                function updateDots(index) {
                                    dots.forEach(dot => dot.classList.remove('active'));
                                    if (dots[index]) {
                                        dots[index].classList.add('active');
                                    }
                                }

                                updateDots(featuresSlide);
                                featuresSlide += dir;
                                featuresSlide = Math.max(0, Math.min(featuresSlide, total - 1));
                                const screenWidth = window.innerWidth;
                                let offsetVW;
                                if (screenWidth <= 389) {
                                    offsetVW = 98.75;
                                } else if (screenWidth <= 399) {
                                    offsetVW = 98;
                                } else if (screenWidth <= 430) {
                                    offsetVW = 97.57;
                                } else if (screenWidth <= 450) {
                                    offsetVW = 99;
                                  
                                } else if (screenWidth <= 900) {
                                    offsetVW = 102.8;
                                } else if (screenWidth <= 1100) {
                                    offsetVW = 102.5;
                                }
                                featuresSlider.style.transform = `translateX(-${featuresSlide * offsetVW}vw) translateY(25%)`;
                                updateDots(featuresSlide);
                            };
                        } </script>
    <script> const stainsSlider = document.getElementById('stainsSlider');
                        if (stainsSlider) {
                            let stainsSlide = 0;
                            window.scrollStains = function (dir) {
                                const stainsDots = document.querySelectorAll('.stains-indicators .dot');
                                const total = stainsSlider.children.length;
                                stainsSlide += dir;
                                stainsSlide = Math.max(0, Math.min(stainsSlide, total - 1));
                                const screenWidth = window.innerWidth;
                                let offsetVW;

                                function updateStainsDots(index) {
                                    stainsDots.forEach(dot => dot.classList.remove('active'));
                                    if (stainsDots[index]) {
                                        stainsDots[index].classList.add('active');
                                    }
                                }

                                updateStainsDots(stainsSlide);
                                if (screenWidth <= 390) {
                                    offsetVW = 102.5;
                                } else if (screenWidth <= 430) {
                                    offsetVW = 101.8;
                                } else if (screenWidth <= 450) {
                                    offsetVW = 100.15;
                                }
                              	else if (screenWidth <= 900) {
                                    offsetVW = 100.6;
                                }
                              	else if (screenWidth <= 1100) {
                                    offsetVW = 100.5;
                                }else {
                                    offsetVW = 104;
                                }
                                stainsSlider.style.transform = `translateX(-${stainsSlide * offsetVW}vw)`;
                                updateStainsDots(stainsSlide);
                            };
                        } </script>
    <script> const preservesSlider = document.getElementById('preservesSlider');
                        if (preservesSlider) {
                            let preservesSlide = 0;
                            const preservesDots = document.querySelectorAll('.preserves-indicators .dot');
                            window.scrollPreserves = function (dir) {
                                const total = preservesSlider.children.length;
                                console.log(total);
                                preservesSlide += dir;
                                console.log(dir);
                                preservesSlide = Math.max(0, Math.min(preservesSlide, total - 1));
                                const screenWidth = window.innerWidth;
                                let offsetVW;

                                function updatePreservesDots(index) {
                                    preservesDots.forEach(dot => dot.classList.remove('active'));
                                    if (preservesDots[index]) {
                                        preservesDots[index].classList.add('active');
                                    }
                                }

                                updatePreservesDots(preservesSlide);
                                if (screenWidth <= 389) {
                                    offsetVW = 102.2;
                                } else if (screenWidth <= 399) {
                                    offsetVW = 102.8;
                                } else if (screenWidth <= 430) {
                                    offsetVW = 102.1;
                                } else if (screenWidth <= 450) {
                                    offsetVW = 100.15;
                                } 
                              	else if (screenWidth <= 900) {
                                    offsetVW = 100.55;
                                }
                              else if (screenWidth <= 1100) {
                                    offsetVW = 100.35;
                                }
                              else {
                                    offsetVW = 104;
                                }
                                preservesSlider.style.transform = `translateX(-${preservesSlide * offsetVW}vw)`;
                                updatePreservesDots(preservesSlide);
                            };
                        }</script>

<script>
document.getElementById('popup-submit3').addEventListener('click', function (e) {
    e.preventDefault();
    const phoneInput3 = document.querySelector('input[name="phone3"]');
    const phone3 = phoneInput3.value.trim();

    
    if (!phone3.match(/^\+?\d{10,15}$/)) {
        alert('Введите корректный номер');
        return;
    }

    
    const bitrixUrl = 'https://nporeton.bitrix24.ru/rest/1/armbnmb6m5dndkz9/crm.lead.add.json';

    
    const leadData = {
        fields: {
            "NAME": "", 
            "PHONE": [{"VALUE": phone3, "VALUE_TYPE": "WORK"}],
            "TITLE": "Заявка с сайта retona.ru, "+phone3,
            "UF_CRM_1729677151": "retona.ru",
            "UF_CRM_1750870894": "Стиральная машинка"
            
        }
    };

    
    fetch(bitrixUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(leadData)
    })
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            console.error("Ошибка при создании лида:", data.error_description);
            alert('Ошибка при отправке заявки');
        } else {
            console.log("Лид успешно создан, ID:", data.result);
            alert('Заявка успешно отправлена');
            phoneInput3.value = '';
        }
    })
    .catch(error => {
        console.error("Ошибка сети:", error);
        alert('Сетевая ошибка при отправке');
    });
});
</script>

<script>
document.getElementById('popup-submit2').addEventListener('click', function(e) {
    e.preventDefault();
    const phoneInput2 = document.querySelector('input[name="phone2"]');
    const phone2 = phoneInput2.value.trim();

    if (!phone2.match(/^\+?\d{10,15}$/)) {
        alert('Введите корректный номер');
        return;
    }

    const bitrixUrl = 'https://nporeton.bitrix24.ru/rest/1/armbnmb6m5dndkz9/crm.lead.add.json';

    const leadData = {
        fields: {
            "NAME": "",
            "PHONE": [{"VALUE": phone2, "VALUE_TYPE": "WORK"}],
            "TITLE": "Заявка с сайта retona.ru, "+phone2,
            "UF_CRM_1729677151": "retona.ru",
            "UF_CRM_1750870894": "Стиральная машинка"
        }
    };

    fetch(bitrixUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(leadData)
    })
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            alert('Ошибка при отправке заявки');
        } else {
            alert('Заявка успешно отправлена');
            phoneInput2.value = '';
        }
    })
    .catch(error => {
        alert('Сетевая ошибка при отправке');
    });
});
</script>

<script>
document.getElementById('popup-submit').addEventListener('click', function(e) {
    e.preventDefault();
    const phoneInput = document.querySelector('input[name="phone"]');
    const phone = phoneInput.value.trim();

    if (!phone.match(/^\+?\d{10,15}$/)) {
        alert('Введите корректный номер');
        return;
    }

    const bitrixUrl = 'https://nporeton.bitrix24.ru/rest/1/armbnmb6m5dndkz9/crm.lead.add.json';

    const leadData = {
        fields: {
            "NAME": "",
            "PHONE": [{"VALUE": phone, "VALUE_TYPE": "WORK"}],
            "TITLE": "Заявка с сайта retona.ru, "+phone,
            "UF_CRM_1729677151": "retona.ru",
            "UF_CRM_1750870894": "Стиральная машинка"
        }
    };

    fetch(bitrixUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(leadData)
    })
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            alert('Ошибка при отправке заявки');
        } else {
            alert('Заявка успешно отправлена');
            phoneInput.value = '';
        }
    })
    .catch(error => {
        alert('Сетевая ошибка при отправке');
    });
});
</script>
<script>
  function handleTabletLayout() {
  const element = document.querySelector('.footer .container'); 
  if (!element) return;

  const mediaQuery = window.matchMedia('(min-width: 760px) and (max-width: 1025px)');

  function updateLayout(e) {
    if (e.matches) { 
      element.classList.remove('md:flex-row');
      element.classList.remove('md:ml-32');
      element.classList.add('md:flex-col');
    } else { 
      element.classList.remove('md:flex-col');
      element.classList.add('md:flex-row');
       element.classList.add('md:ml-32');
    }
  }


  updateLayout(mediaQuery);
  mediaQuery.addListener(updateLayout);
}


window.addEventListener('DOMContentLoaded', handleTabletLayout);
window.addEventListener('resize', handleTabletLayout);
</script>
<script>
  document.addEventListener('DOMContentLoaded', function() {
  function updateFooterLayout() {
    
    const footer = document.querySelector('footer');
    if (!footer) return; 
    
    const firstFlexRow = footer.querySelector('.flex-row:first-child');
    if (!firstFlexRow) return; 

    
    if (window.innerWidth <= 1100) {
      firstFlexRow.classList.replace('flex-row', 'flex-col');
    } else {
      firstFlexRow.classList.replace('flex-col', 'flex-row');
    }
  }

  
  updateFooterLayout();
  window.addEventListener('resize', updateFooterLayout);
});
</script>
<script>
function setupSwipe(sliderId, scrollFunction) {
  const slider = document.getElementById(sliderId);
  if (!slider) return;

  let touchStartX = 0;
  let touchEndX = 0;
  const threshold = 50; 

  slider.addEventListener('touchstart', function(e) {
    touchStartX = e.touches[0].clientX;
  }, { passive: true });

  slider.addEventListener('touchmove', function(e) {
    touchEndX = e.touches[0].clientX;
  }, { passive: true });

  slider.addEventListener('touchend', function() {
    const diff = touchStartX - touchEndX;
    
    if (diff > threshold) {
      
      scrollFunction(1);
    } else if (diff < -threshold) {
      
      scrollFunction(-1);
    }
  }, { passive: true });
}


document.addEventListener('DOMContentLoaded', function() {
  
  setupSwipe('featuresSlider', scrollFeatures);
  
  
  setupSwipe('stainsSlider', scrollStains);
  
  
  setupSwipe('preservesSlider', scrollPreserves);
});
</script>
  <script>
function makePhoneCall() {
    const rawPhoneNumber = '+78002226900';
    const formattedNumber = '8 (800) 222-69-00';   
    if (/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        window.location.href = `tel:${rawPhoneNumber}`;
    } else {
        if (confirm(`Позвоните нам: ${formattedNumber}\n\nХотите скопировать номер?`)) {
            navigator.clipboard.writeText(rawPhoneNumber)
                .then(() => alert('Номер скопирован!'))
                .catch(() => alert('Нажмите Ctrl+C чтобы скопировать'));
        }
    }
}
</script>
  <script>
document.addEventListener('DOMContentLoaded', function () {
    const offset = 120;
    if (window.location.hash) {
        const id = window.location.hash.substring(1);
        const target = document.getElementById(id);
        if (target) {
            setTimeout(() => {
                const top = target.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({ top, behavior: 'smooth' });
            }, 100); 
        }
    }
});
</script>
  <script>
  document.addEventListener('DOMContentLoaded', function() {  
  const comparisonBtn = document.querySelector('.btn-comparison'); 
  if (comparisonBtn) {   
    comparisonBtn.addEventListener('mouseenter', function() {
      this.style.cursor = 'pointer';
    });      
    comparisonBtn.addEventListener('click', function() {
      window.location.href = 'https://retona.ru/retona_vs_auto/';
    });
  }
});
  </script>
  [%.logo_script%]
  [%.cookie%]
  [%.collect_cookies%]
  [%.dropdown_active%]
  [%.yandex_metrika%]
