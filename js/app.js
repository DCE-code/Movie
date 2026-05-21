/**
 * NEBULA Cinema Platform - Pure Structural JavaScript Engine
 * Architecture: Clean Vanilla ES6, High-Performance, Accessible (WCAG 2.2 compliant)
 * Operation Standard: Pure decoupled data logic. Zero HTML strings or style strings mixed.
 */

document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    // --- 1. DECOUPLED MOVIES DATA SCHEMA (THE CENTRAL ARRAY PLATFORM) ---
    const MOVIES_DATABASE = [
        {
            "id": "nebula",
            "title": "NEBULA",
            "tagline": "The stars are closer than they look.",
            "videoUrl": "https://youtube.com",
            "bgClass": "nebula-bg",
            "heroClass": "nebula-hero",
            "cast": [
                { "role": "THE DIRECTOR", "name": "Alex Reed", "num": "01" },
                { "role": "THE VISION", "name": "Hoyte van Hoytema", "num": "02" },
                { "role": "THE CAST", "name": "Lila Vance", "num": "03" },
                { "role": "THE SCORE", "name": "M-83", "num": "04" }
            ]
        },
        {
            "id": "void",
            "title": "THE VOID",
            "tagline": "Nothing is as vast as the darkness.",
            "videoUrl": "https://youtube.com",
            "bgClass": "void-bg",
            "heroClass": "void-hero",
            "cast": [
                { "role": "THE DIRECTOR", "name": "Elena Rostova", "num": "01" },
                { "role": "THE VISION", "name": "Roger Deakins", "num": "02" },
                { "role": "THE CAST", "name": "Kaelen Voss", "num": "03" },
                { "role": "THE SCORE", "name": "Hans Zimmer", "num": "04" }
            ]
        }
    ];

    // --- 2. PRIMARY SYSTEM TARGET HOOKS ---
    const preloaderElement = document.getElementById('cinema-preloader');
    const dynamicPlatformContainer = document.getElementById('cinema-platform-target');
    const sidebarLinksContainer = document.querySelector('.sidebar-links');
    
    // Theater overlay modal handles
    const videoOverlayModal = document.getElementById('video-overlay');
    const trailerVideoIframe = document.getElementById('trailer-video');
    const closeTheaterButton = document.querySelector('.close-video');
    
    // Context sidebar menu handles
    const menuToggleButton = document.querySelector('.menu-toggle');
    const closeSidebarButton = document.querySelector('.sidebar-close');
    const sidebarNavigationElement = document.getElementById('sidebar-nav');

    // Focus state preservation marker
    let originalFocusElement = null;

    // --- 3. HARDWARE-SAFE RENDERING DOM ENGINE ---
    const buildCinemaPlatformLayout = () => {
        if (!dynamicPlatformContainer || !sidebarLinksContainer) return;

        MOVIES_DATABASE.forEach((movieItem) => {
            
            // Allocate Hero Element Section Block
            const movieHeroSection = document.createElement('section');
            movieHeroSection.id = `hero-${movieItem.id}`;
            movieHeroSection.classList.add('hero-parallax');
            movieHeroSection.setAttribute('aria-labelledby', `heading-${movieItem.id}`);

            const visualViewportWrapper = document.createElement('div');
            visualViewportWrapper.classList.add('parallax-viewport');
            visualViewportWrapper.setAttribute('aria-hidden', 'true');

            const staticBackgroundLayer = document.createElement('div');
            staticBackgroundLayer.classList.add('layer', 'layer-bg', movieItem.bgClass);
            
            const interactiveCharacterLayer = document.createElement('div');
            interactiveCharacterLayer.classList.add('layer', 'layer-hero', movieItem.heroClass);

            visualViewportWrapper.appendChild(staticBackgroundLayer);
            visualViewportWrapper.appendChild(interactiveCharacterLayer);
            movieHeroSection.appendChild(visualViewportWrapper);

            // Inner Presentation Information Block
            const contentInformationWrapper = document.createElement('div');
            contentInformationWrapper.classList.add('hero-content');

            const screenReaderOnlyHeading = document.createElement('h2');
            screenReaderOnlyHeading.id = `heading-${movieItem.id}`;
            screenReaderOnlyHeading.classList.add('sr-only');
            screenReaderOnlyHeading.textContent = movieItem.title;

            // Generate Scalable Vector Movie Title Text Path
            const svgTitleNamespace = "http://w3.org";
            const movieTitleSvgNode = document.createElementNS(svgTitleNamespace, 'svg');
            movieTitleSvgNode.setAttribute('viewBox', '0 0 600 150');
            movieTitleSvgNode.classList.add('movie-title-svg');
            movieTitleSvgNode.setAttribute('aria-hidden', 'true');

            const textPathSvgNode = document.createElementNS(svgTitleNamespace, 'text');
            textPathSvgNode.setAttribute('x', '50%');
            textPathSvgNode.setAttribute('y', '55%');
            textPathSvgNode.setAttribute('text-anchor', 'middle');
            textPathSvgNode.classList.add('title-path');
            textPathSvgNode.textContent = movieItem.title;

            movieTitleSvgNode.appendChild(textPathSvgNode);

            const taglineParagraphNode = document.createElement('p');
            taglineParagraphNode.classList.add('tagline');
            taglineParagraphNode.textContent = movieItem.tagline;

            // Micro-Interactive Media Trigger Element
            const videoLauncherButton = document.createElement('button');
            videoLauncherButton.classList.add('play-trigger', 'magnetic-target');
            videoLauncherButton.setAttribute('type', 'button');
            videoLauncherButton.setAttribute('aria-haspopup', 'dialog');
            videoLauncherButton.setAttribute('aria-controls', 'video-overlay');
            videoLauncherButton.setAttribute('data-target-stream-url', movieItem.videoUrl);

            const buttonLabelSpan = document.createElement('span');
            buttonLabelSpan.classList.add('btn-text');
            buttonLabelSpan.textContent = 'WATCH TRAILER';

            const buttonArrowIconSvg = document.createElementNS(svgTitleNamespace, 'svg');
            buttonArrowIconSvg.classList.add('btn-arrow');
            buttonArrowIconSvg.setAttribute('viewBox', '0 0 24 24');
            buttonArrowIconSvg.setAttribute('fill', 'none');
            buttonArrowIconSvg.setAttribute('stroke', 'currentColor');
            buttonArrowIconSvg.setAttribute('stroke-width', '2');

            const lineSegmentSvg = document.createElementNS(svgTitleNamespace, 'line');
            lineSegmentSvg.setAttribute('x1', '5');
            lineSegmentSvg.setAttribute('y1', '12');
            lineSegmentSvg.setAttribute('x2', '19');
            lineSegmentSvg.setAttribute('y2', '12');

            const polylineSegmentSvg = document.createElementNS(svgTitleNamespace, 'polyline');
            polylineSegmentSvg.setAttribute('points', '12 5 19 12 12 19');

            buttonArrowIconSvg.appendChild(lineSegmentSvg);
            buttonArrowIconSvg.appendChild(polylineSegmentSvg);
            videoLauncherButton.appendChild(buttonLabelSpan);
            videoLauncherButton.appendChild(buttonArrowIconSvg);

            contentInformationWrapper.appendChild(screenReaderOnlyHeading);
            contentInformationWrapper.appendChild(movieTitleSvgNode);
            contentInformationWrapper.appendChild(taglineParagraphNode);
            contentInformationWrapper.appendChild(videoLauncherButton);
            movieHeroSection.appendChild(contentInformationWrapper);
            
            dynamicPlatformContainer.appendChild(movieHeroSection);

            // Generate Layout Cards Flex Grid Tracking Section
            const productionTrackSection = document.createElement('section');
            productionTrackSection.classList.add('horizontal-scroll-section');
            productionTrackSection.setAttribute('aria-label', `${movieItem.title} Creative Production Metadata`);

            const productionTrackFlexContainer = document.createElement('div');
            productionTrackFlexContainer.classList.add('scroll-track');

            movieItem.cast.forEach((castMember) => {
                const creditCardArticle = document.createElement('article');
                creditCardArticle.classList.add('cast-card');
                creditCardArticle.setAttribute('tabindex', '0');

                const sequenceIndexSpan = document.createElement('span');
                sequenceIndexSpan.classList.add('card-num');
                sequenceIndexSpan.setAttribute('aria-hidden', 'true');
                sequenceIndexSpan.textContent = castMember.num;

                const textualMetadataContainer = document.createElement('div');
                textualMetadataContainer.classList.add('card-meta');

                const coreRoleHeading = document.createElement('h3');
                coreRoleHeading.textContent = castMember.role;

                const coreNameParagraph = document.createElement('p');
                coreNameParagraph.textContent = castMember.name;

                textualMetadataContainer.appendChild(coreRoleHeading);
                textualMetadataContainer.appendChild(coreNameParagraph);
                creditCardArticle.appendChild(sequenceIndexSpan);
                creditCardArticle.appendChild(textualMetadataContainer);
                
                productionTrackFlexContainer.appendChild(creditCardArticle);
            });

            productionTrackSection.appendChild(productionTrackFlexContainer);
            dynamicPlatformContainer.appendChild(productionTrackSection);

            // Connect Interactive Anchors Directly to Sidebar Drawer Navigation Lists
            const navigationListItemNode = document.createElement('li');
            const innerLinkAnchorNode = document.createElement('a');
            innerLinkAnchorNode.setAttribute('href', `#hero-${movieItem.id}`);
            innerLinkAnchorNode.classList.add('nav-link-item');
            innerLinkAnchorNode.textContent = movieItem.title;

            navigationListItemNode.appendChild(innerLinkAnchorNode);
            sidebarLinksContainer.appendChild(navigationListItemNode);
        });
    };

    // Execute database interface compiler loop instantly
    buildCinemaPlatformLayout();

    // --- 4. REBIND DYNAMICALLY GENERATED COMPONENT SELECTORS ---
    const compiledPlayTriggers = document.querySelectorAll('.play-trigger');
    const compiledSidebarLinks = document.querySelectorAll('.nav-link-item');

    // --- 5. SYSTEM PRELOADER TERMINATION ROUTINE ---
    window.addEventListener('load', () => {
        if (preloaderElement) {
            preloaderElement.classList.add('fade-out');
        }
    });

    // --- 6. ADVANCED THEATER PRESENTATION MANAGEMENT INTERFACE ---
    const openTheaterPresentationWindow = (event) => {
        if (!videoOverlayModal || !trailerVideoIframe) return;
        originalFocusElement = document.activeElement;

        const capturedTargetStreamUrl = event.currentTarget.getAttribute('data-target-stream-url');
        videoOverlayModal.classList.add('active');
        videoOverlayModal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';

        if (capturedTargetStreamUrl) {
            const URLJoinToken = capturedTargetStreamUrl.includes('?') ? '&' : '?';
            // Safe URL projection parameters passing API control flags safely
            trailerVideoIframe.src = `${capturedTargetStreamUrl}${URLJoinToken}autoplay=1&enablejsapi=1`;
        }

        setTimeout(() => { 
            if (closeTheaterButton) closeTheaterButton.focus(); 
        }, 120);
    };

    const closeTheaterPresentationWindow = () => {
        if (!videoOverlayModal || !trailerVideoIframe) return;
        videoOverlayModal.classList.remove('active');
        videoOverlayModal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
        
        trailerVideoIframe.src = ''; // Sever background streaming processes completely
        if (originalFocusElement) originalFocusElement.focus();
    };

    compiledPlayTriggers.forEach(btn => btn.addEventListener('click', openTheaterPresentationWindow));
    if (closeTheaterButton) {
        closeTheaterButton.addEventListener('click', closeTheaterPresentationWindow);
    }

    // --- 7. DYNAMIC SIDEBAR DRAWER STAGE CONTROLLER ---
    const displaySidebarPanelDrawer = () => {
        if (!sidebarNavigationElement) return;
        originalFocusElement = document.activeElement;

        sidebarNavigationElement.classList.add('active');
        sidebarNavigationElement.setAttribute('aria-hidden', 'false');
        if (menuToggleButton) menuToggleButton.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';

        setTimeout(() => { 
            if (closeSidebarButton) closeSidebarButton.focus(); 
        }, 100);
    };

    const hideSidebarPanelDrawer = () => {
        if (!sidebarNavigationElement) return;
        sidebarNavigationElement.classList.remove('active');
        sidebarNavigationElement.setAttribute('aria-hidden', 'true');
        if (menuToggleButton) menuToggleButton.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';

        if (originalFocusElement) originalFocusElement.focus();
    };

    if (menuToggleButton) menuToggleButton.addEventListener('click', displaySidebarPanelDrawer);
    if (closeSidebarButton) closeSidebarButton.addEventListener('click', hideSidebarPanelDrawer);
    compiledSidebarLinks.forEach(link => link.addEventListener('click', hideSidebarPanelDrawer));

    // --- 8. GLOBAL FOCUS TRACKING KEYBOARD INTERCEPTOR MATRIX (WCAG compliance) ---
    window.addEventListener('keydown', (event) => {
        const theaterStageIsOpen = videoOverlayModal && videoOverlayModal.classList.contains('active');
        const optionsSidebarIsOpen = sidebarNavigationElement && sidebarNavigationElement.classList.contains('active');

        if (event.key === 'Escape') {
            if (theaterStageIsOpen) closeTheaterPresentationWindow();
            if (optionsSidebarIsOpen) hideSidebarPanelDrawer();
            return;
        }

        if (event.key === 'Tab') {
            let isolatedActiveContainer = null;

            if (theaterStageIsOpen) isolatedActiveContainer = videoOverlayModal;
            else if (optionsSidebarIsOpen) isolatedActiveContainer = sidebarNavigationElement;

            if (isolatedActiveContainer) {
                const focusableNodesArray = isolatedActiveContainer.querySelectorAll('button, [tabindex="0"], a, iframe');
                const lowFocusNode = focusableNodesArray[0];
                const highFocusNode = focusableNodesArray[focusableNodesArray.length - 1];

                if (event.shiftKey && document.activeElement === lowFocusNode) {
                    highFocusNode.focus();
                    event.preventDefault();
                } else if (!event.shiftKey && document.activeElement === highFocusNode) {
                    lowFocusNode.focus();
                    event.preventDefault();
                }
            }
        }
    });
});
