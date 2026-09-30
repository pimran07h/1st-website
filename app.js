/**
 * AGRI ADVISORY // FARMER INTELLIGENCE SYSTEM
 * Authoritative, Deadpan Interaction Controller
 * Strictly implements subtle psychological friction without any cartoon funkiness.
 */

document.addEventListener('DOMContentLoaded', () => {

  // ------------------------------------------------------------------------
  // 1. "Start Advisory" Action Morphs Into Verbose Corporate Title
  // ------------------------------------------------------------------------
  const btnStartAdvisory = document.getElementById('btnStartAdvisory');
  const subBannerTitle = document.getElementById('subBannerTitle');
  const subBannerTag = document.getElementById('subBannerTag');

  if (btnStartAdvisory) {
    btnStartAdvisory.addEventListener('click', () => {
      const regSection = document.getElementById('registration-section');
      if (regSection) regSection.scrollIntoView({ behavior: 'smooth' });

      if (subBannerTitle) {
        subBannerTitle.textContent = 'AGRONOMIC CONSULTATIVE MODULE v2.4 • INITIATE AGRICULTURAL INTELLIGENCE CONSULTATION';
      }
      if (subBannerTag) {
        subBannerTag.textContent = 'ENGAGEMENT ELEVATED';
      }
      showToast('Engagement upgraded: Initiate Agricultural Intelligence Consultation.', 'win98');
      playSubtleClick();
    });
  }

  // ------------------------------------------------------------------------
  // 2. Multi-Step Button Escalation Wizard (Section 11)
  // Get Advice -> Continue -> Proceed Further -> Continue Advisory Process ->
  // Proceed With Current Agricultural Parameters -> Almost Done -> Finalize -> Confirm Finalization
  // ------------------------------------------------------------------------
  const stepEscalationModal = document.getElementById('stepEscalationModal');
  const btnWizardEscalate = document.getElementById('btnWizardEscalate');
  const wizardStepCounter = document.getElementById('wizardStepCounter');
  const wizardHeading = document.getElementById('wizardHeading');
  const wizardText = document.getElementById('wizardText');
  const btnCloseWizard = document.getElementById('btnCloseWizard');

  const escalationStages = [
    { label: 'Continue', heading: 'Stage 1: Intent Registration', desc: 'Confirming your primary consultative motivation. Click Continue to advance.' },
    { label: 'Proceed Further', heading: 'Stage 2: Zonal Boundary Verification', desc: 'Checking field coordinates against provincial groundwater registers. Proceed Further.' },
    { label: 'Continue Advisory Process', heading: 'Stage 3: Nitrogen Parameter Allocation', desc: 'Validating synthetic urea application quotas. Click Continue Advisory Process.' },
    { label: 'Proceed With Current Agricultural Parameters', heading: 'Stage 4: Fowl & Tractor Balancing', desc: 'Correlating declared tractor chassis pigment with biological nitrogen. Advance.' },
    { label: 'Almost Done', heading: 'Stage 5: Monsoon Confidence Normalization', desc: 'Calculating psychometric rain trust factor against 10-year variance. Almost Done.' },
    { label: 'Finalize', heading: 'Stage 6: Algorithmic Synthesis', desc: 'Synthesizing all statutory agricultural parameters into advisory certificate format.' },
    { label: 'Confirm Finalization', heading: 'Stage 7: Final Endorsement Required', desc: 'You have reached the final administrative confirmation threshold. Confirm Finalization.' }
  ];

  let currentWizardStep = 0;

  function openEscalationWizard() {
    currentWizardStep = 0;
    updateWizardUI();
    if (stepEscalationModal) stepEscalationModal.style.display = 'flex';
    playSubtleClick();
  }

  function updateWizardUI() {
    if (!stepEscalationModal) return;
    const stage = escalationStages[currentWizardStep];
    if (wizardStepCounter) wizardStepCounter.textContent = `STAGE ${currentWizardStep + 1} OF 7`;
    if (wizardHeading) wizardHeading.textContent = stage.heading;
    if (wizardText) wizardText.textContent = stage.desc;
    if (btnWizardEscalate) btnWizardEscalate.textContent = stage.label;
  }

  if (btnWizardEscalate) {
    btnWizardEscalate.addEventListener('click', () => {
      currentWizardStep++;
      if (currentWizardStep < escalationStages.length) {
        updateWizardUI();
        playSubtleClick();
      } else {
        stepEscalationModal.style.display = 'none';
        showToast('Advisory finalization confirmed without explanation.', 'pink');
        const regSection = document.getElementById('registration-section');
        if (regSection) regSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  btnCloseWizard?.addEventListener('click', () => {
    if (stepEscalationModal) stepEscalationModal.style.display = 'none';
  });

  // Connect crop action buttons to the escalation wizard
  document.querySelectorAll('.btn-crop-action').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openEscalationWizard();
    });
  });

  // ------------------------------------------------------------------------
  // 3. Notification Counter: Toggles between '0' and '0+'
  // ------------------------------------------------------------------------
  const notifBadge = document.getElementById('notifBadge');
  const btnNotifToggle = document.getElementById('btnNotifToggle');
  const notifDropdown = document.getElementById('notifDropdown');

  let notifStateZero = true;
  setInterval(() => {
    notifStateZero = !notifStateZero;
    if (notifBadge) {
      notifBadge.textContent = notifStateZero ? '0' : '0+';
    }
  }, 10000);

  if (btnNotifToggle && notifDropdown) {
    btnNotifToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      notifDropdown.classList.toggle('show');
      playSubtleClick();
    });

    document.addEventListener('click', (e) => {
      if (!btnNotifToggle.contains(e.target) && !notifDropdown.contains(e.target)) {
        notifDropdown.classList.remove('show');
      }
    });
  }

  // ------------------------------------------------------------------------
  // 4. "Do Not Touch" Button & Modal
  // ------------------------------------------------------------------------
  const btnDoNotTouch = document.getElementById('btnDoNotTouch');
  const doNotTouchModal = document.getElementById('doNotTouchModal');
  const btnCloseHarmModal = document.getElementById('btnCloseHarmModal');
  const btnAcknowledgeModal = document.getElementById('btnAcknowledgeModal');

  if (btnDoNotTouch && doNotTouchModal) {
    btnDoNotTouch.addEventListener('click', () => {
      doNotTouchModal.style.display = 'flex';
      playSubtleClick();
    });

    const hideHarmModal = () => {
      doNotTouchModal.style.display = 'none';
      playSubtleClick();
    };

    btnCloseHarmModal?.addEventListener('click', hideHarmModal);
    btnAcknowledgeModal?.addEventListener('click', hideHarmModal);
  }

  // ------------------------------------------------------------------------
  // 5. Upward Opening "More" Menu
  // ------------------------------------------------------------------------
  const btnMoreNav = document.getElementById('btnMoreNav');
  const upwardMenu = document.getElementById('upwardMenu');

  if (btnMoreNav && upwardMenu) {
    btnMoreNav.addEventListener('click', (e) => {
      e.stopPropagation();
      upwardMenu.classList.toggle('show');
      playSubtleClick();
    });

    document.addEventListener('click', (e) => {
      if (!btnMoreNav.contains(e.target) && !upwardMenu.contains(e.target)) {
        upwardMenu.classList.remove('show');
      }
    });
  }

  // ------------------------------------------------------------------------
  // 6. Crop Filter & Confirmation Modal on Reset
  // ------------------------------------------------------------------------
  const filterBtns = document.querySelectorAll('.crop-filter-strip .filter-btn:not(#btnResetFilter)');
  const btnResetFilter = document.getElementById('btnResetFilter');
  const confirmFilterModal = document.getElementById('confirmFilterModal');
  const btnConfirmResetYes = document.getElementById('btnConfirmResetYes');
  const btnConfirmResetNo = document.getElementById('btnConfirmResetNo');
  const cropCards = document.querySelectorAll('.crop-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');

      cropCards.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-season') === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
      playSubtleClick();
    });
  });

  if (btnResetFilter && confirmFilterModal) {
    btnResetFilter.addEventListener('click', () => {
      confirmFilterModal.style.display = 'flex';
      playSubtleClick();
    });

    btnConfirmResetYes?.addEventListener('click', () => {
      confirmFilterModal.style.display = 'none';
      filterBtns.forEach(b => b.classList.remove('active'));
      document.querySelector('.crop-filter-strip .filter-btn[data-filter="all"]')?.classList.add('active');
      cropCards.forEach(card => card.style.display = 'flex');
      showToast('All crop cards restored to standard visibility.', 'pink');
      playSubtleClick();
    });

    btnConfirmResetNo?.addEventListener('click', () => {
      confirmFilterModal.style.display = 'none';
      playSubtleClick();
    });
  }

  // ------------------------------------------------------------------------
  // 7. 1-73 Confidence Slider & Daypart Toggles
  // ------------------------------------------------------------------------
  const confidenceSlider = document.getElementById('confidenceSlider');
  const confidenceVal = document.getElementById('confidenceVal');

  if (confidenceSlider && confidenceVal) {
    confidenceSlider.addEventListener('input', () => {
      confidenceVal.textContent = confidenceSlider.value;
    });
  }

  const btnMorning = document.getElementById('btnMorning');
  const btnEvening = document.getElementById('btnEvening');
  if (btnMorning && btnEvening) {
    btnMorning.addEventListener('click', () => {
      btnMorning.classList.add('active');
      btnEvening.classList.remove('active');
      playSubtleClick();
    });
    btnEvening.addEventListener('click', () => {
      btnEvening.classList.add('active');
      btnMorning.classList.remove('active');
      playSubtleClick();
    });
  }

  // ------------------------------------------------------------------------
  // 8. Farmer Advisory Registration Form with 3.8s Progress Simulation
  // ------------------------------------------------------------------------
  const farmerRegistrationForm = document.getElementById('farmerRegistrationForm');
  const slowProgressWrap = document.getElementById('slowProgressWrap');
  const progressStatusMsg = document.getElementById('progressStatusMsg');
  const progressFill = document.getElementById('progressFill');
  const advisoryCertCard = document.getElementById('advisoryCertCard');
  const certBody = document.getElementById('certBody');
  const btnDismissCert = document.getElementById('btnDismissCert');
  const btnCancelForm = document.getElementById('btnCancelForm');

  if (farmerRegistrationForm) {
    farmerRegistrationForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('farmerName')?.value || 'Ramesh Patel';
      const crop = document.getElementById('cropSelect')?.value || 'Wheat';
      const area = document.getElementById('landArea')?.value || '4.5';
      const tractor = document.getElementById('tractorColor')?.value || 'Classic Agrarian Green';
      const chickens = document.getElementById('chickenCount')?.value || '7';
      const confScore = confidenceSlider ? confidenceSlider.value : '42';

      slowProgressWrap.style.display = 'block';
      advisoryCertCard.style.display = 'none';
      progressFill.style.width = '10%';

      const steps = [
        { pct: '25%', msg: 'Calibrating dew-point algorithms against tractor pigmentation...' },
        { pct: '50%', msg: `Normalizing ${chickens} chickens against nitrate equilibrium...` },
        { pct: '75%', msg: `Reconciling farming confidence ${confScore}/73 with 10-year monsoon variance...` },
        { pct: '90%', msg: 'Harmonizing circadian farming schedule with potassium reserves...' },
        { pct: '100%', msg: 'Compiling Official Computational Advisory Certificate...' }
      ];

      let sIndex = 0;
      const interval = setInterval(() => {
        if (sIndex < steps.length) {
          progressFill.style.width = steps[sIndex].pct;
          progressStatusMsg.textContent = steps[sIndex].msg;
          sIndex++;
        } else {
          clearInterval(interval);
          setTimeout(() => {
            slowProgressWrap.style.display = 'none';
            advisoryCertCard.style.display = 'block';

            certBody.innerHTML = `
              <p><strong>Applicant Name:</strong> ${name}</p>
              <p><strong>Designated Crop:</strong> ${crop.toUpperCase()} (${area} Acres Cultivation)</p>
              <p><strong>Recommended Irrigation:</strong> <span style="font-size: 15px; font-weight: 800; color: #166534;">YES</span></p>
              <p style="font-size: 11px; color: #475569;">Frequency: 2–3 times/week</p>
              <p style="font-size: 8.5px; color: #94a3b8;">Recommendation confidence: 87.234981%</p>
              <p><strong>Tractor Chassis Spectral Offset:</strong> ${tractor} requires an additional 4.2 kg/acre of gypsum.</p>
              <p><strong>Avian Biological Credit:</strong> Biological output from ${chickens} poultry units credited to top-dressing.</p>
              <p><strong>Cultivator Psychometric Factor:</strong> Daily confidence ${confScore}/73 recorded.</p>
              <p style="margin-top: 6px; color: #166534; font-weight: 700;">Status: Your crop information has been successfully considered.</p>
            `;
            showToast('Your crop information has been successfully considered.', 'pink');
          }, 600);
        }
      }, 700);
    });

    btnCancelForm?.addEventListener('click', () => {
      farmerRegistrationForm.reset();
      slowProgressWrap.style.display = 'none';
      advisoryCertCard.style.display = 'none';
      showToast('Form registration purged. Soil records remain unaltered.', 'hazard');
      playSubtleClick();
    });

    btnDismissCert?.addEventListener('click', () => {
      advisoryCertCard.style.display = 'none';
      playSubtleClick();
    });
  }

  // ------------------------------------------------------------------------
  // 9. APMC Market Mandi Sorting Quirk
  // Arrow is on Market Name, but sorting actually sorts by ARRIVALS!
  // ------------------------------------------------------------------------
  const thMarketSort = document.getElementById('thMarketSort');
  const mandiTable = document.getElementById('mandiTable');
  let sortVolAscending = false;

  if (thMarketSort && mandiTable) {
    thMarketSort.addEventListener('click', () => {
      const tbody = mandiTable.querySelector('tbody');
      const rows = Array.from(tbody.querySelectorAll('tr'));
      sortVolAscending = !sortVolAscending;

      rows.sort((a, b) => {
        const volA = parseInt(a.querySelector('.td-volume-cell')?.textContent.replace(/\D/g, '') || '0', 10);
        const volB = parseInt(b.querySelector('.td-volume-cell')?.textContent.replace(/\D/g, '') || '0', 10);
        return sortVolAscending ? volA - volB : volB - volA;
      });

      rows.forEach(r => tbody.appendChild(r));
      showToast('Sorting applied according to unlabelled volumetric column.', 'brutalist');
      playSubtleClick();
    });
  }

  // ------------------------------------------------------------------------
  // 10. Weather Controls
  // ------------------------------------------------------------------------
  const btnWeatherPurple = document.getElementById('btnWeatherPurple');
  const tempDisplay = document.getElementById('tempDisplay');
  const btnPeriodPrev = document.getElementById('btnPeriodPrev');
  const btnPeriodNext = document.getElementById('btnPeriodNext');
  const periodDisplay = document.getElementById('periodDisplay');

  const horizons = [
    'Horizon: Lunar Octave 1',
    'Horizon: Solar Equinox 4',
    'Horizon: Bimonthly Barometric Cycle',
    'Horizon: Historical 1998 Analog'
  ];
  let hIdx = 0;

  function cycleHorizon(delta) {
    hIdx = (hIdx + delta + horizons.length) % horizons.length;
    if (periodDisplay) periodDisplay.textContent = horizons[hIdx];
    showToast(`Forecast baseline shifted to ${horizons[hIdx]}.`, 'win98');
    playSubtleClick();
  }

  btnPeriodPrev?.addEventListener('click', () => cycleHorizon(-1));
  btnPeriodNext?.addEventListener('click', () => cycleHorizon(1));

  if (btnWeatherPurple && tempDisplay) {
    btnWeatherPurple.addEventListener('click', () => {
      const cur = parseFloat(tempDisplay.textContent);
      const updated = (cur + (Math.random() > 0.5 ? 0.3 : -0.2)).toFixed(1);
      tempDisplay.textContent = updated;
      showToast('Weather information is currently being weathered.', 'pink');
      playSubtleClick();
    });
  }

  // ------------------------------------------------------------------------
  // 11. Fertilizer Button
  // ------------------------------------------------------------------------
  const btnFinalizeDosage = document.getElementById('btnFinalizeDosage');
  if (btnFinalizeDosage) {
    btnFinalizeDosage.addEventListener('click', () => {
      showToast('Fertilizer schedule V finalized and dispatched to local cooperative.', 'win98');
      playSubtleClick();
    });
  }

  // ------------------------------------------------------------------------
  // 12. Advanced Advisory: "Recalculate Everything" Button
  // ------------------------------------------------------------------------
  const btnRecalculateEverything = document.getElementById('btnRecalculateEverything');
  const valCropScore = document.getElementById('valCropScore');
  const valSoilScore = document.getElementById('valSoilScore');
  const valRainScore = document.getElementById('valRainScore');
  const valFertScore = document.getElementById('valFertScore');
  const recalcStatus = document.getElementById('recalcStatus');

  if (btnRecalculateEverything) {
    btnRecalculateEverything.addEventListener('click', () => {
      if (valCropScore) valCropScore.textContent = (884.2201 + (Math.random() * 0.008 - 0.004)).toFixed(4) + ' λ';
      if (valSoilScore) valSoilScore.textContent = (0.9418 + (Math.random() * 0.004 - 0.002)).toFixed(4) + ' θ';
      if (valRainScore) valRainScore.textContent = '± ' + (14.882 + (Math.random() * 0.04 - 0.02)).toFixed(3) + '% μ';
      if (valFertScore) valFertScore.textContent = (112.409 + (Math.random() * 0.02 - 0.01)).toFixed(3) + '% κ';

      if (recalcStatus) {
        recalcStatus.textContent = 'All 14,000 baseline constants recalculated according to unverified atmospheric variance.';
      }
      showToast('Everything has been recalculated according to unspecified baseline parameters.', 'brutalist');
      playSubtleClick();
    });
  }

  // ------------------------------------------------------------------------
  // 13. Harmless Toasts
  // ------------------------------------------------------------------------
  const toastStack = document.getElementById('toastStack');
  const toastCatalog = [
    { text: 'Your dashboard is ready.', style: 'pink' },
    { text: 'Your dashboard has been viewed.', style: 'pink' },
    { text: 'Weather information has been checked.', style: 'win98' },
    { text: 'You have successfully remained on this page.', style: 'hazard' },
    { text: 'No new notifications.', style: 'brutalist' },
    { text: 'Soil strata verified. Density is adequate.', style: 'win98' }
  ];

  function showToast(message, styleType = 'win98') {
    if (!toastStack) return;

    const toast = document.createElement('div');
    toast.className = `toast-item toast-style-${
      styleType === 'pink' ? 'pink-pill' :
      styleType === 'brutalist' ? 'brutalist-black' :
      styleType === 'hazard' ? 'hazard-yellow' : 'win98'
    }`;

    toast.innerHTML = `
      <span>${message}</span>
      <button class="toast-close-btn" title="Dismiss dispatch">✕</button>
    `;

    toast.querySelector('.toast-close-btn').addEventListener('click', () => {
      toast.remove();
    });

    toastStack.appendChild(toast);

    setTimeout(() => {
      if (toast.parentElement) {
        toast.style.opacity = '0';
        toast.style.transition = 'opacity 0.4s';
        setTimeout(() => toast.remove(), 400);
      }
    }, 7000);
  }

  let toastIdx = 0;
  setInterval(() => {
    const item = toastCatalog[toastIdx % toastCatalog.length];
    showToast(item.text, item.style);
    toastIdx++;
  }, 36000);

  // Initial welcome toast after 3 seconds
  setTimeout(() => {
    showToast('Your session is working normally.', 'brutalist');
  }, 3000);

  // ------------------------------------------------------------------------
  // 14. Subtle Web Audio Feedback
  // ------------------------------------------------------------------------
  function playSubtleClick() {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(520, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(240, ctx.currentTime + 0.035);

      gain.gain.setValueAtTime(0.02, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.035);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.04);
    } catch {
      // Audio policy catch
    }
  }

});
