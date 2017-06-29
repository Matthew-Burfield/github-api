import React from 'react'
import './Octocat.css'

const Octocat = (props) => (
  <div style={props.style}>
    <svg viewBox="0 0 900 873" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <defs>
            <linearGradient x1="59.4792517%" y1="57.1915848%" x2="18.0841466%" y2="1.60000684%" id="linearGradient-1">
                <stop stopColor="#FFFFFF" offset="0%"></stop>
                <stop stopColor="#1C0F10" offset="100%"></stop>
            </linearGradient>
            <polygon id="path-2" points="161.568317 21.7981651 190.885149 0 196.748515 7.9266055 170.689109 33.6880734"></polygon>
            <filter x="-7.1%" y="-7.4%" width="114.2%" height="114.8%" filterUnits="objectBoundingBox" id="filter-3">
                <feMorphology radius="2" operator="erode" in="SourceAlpha" result="shadowSpreadInner1"></feMorphology>
                <feGaussianBlur stdDeviation="1.5" in="shadowSpreadInner1" result="shadowBlurInner1"></feGaussianBlur>
                <feOffset dx="0" dy="0" in="shadowBlurInner1" result="shadowOffsetInner1"></feOffset>
                <feComposite in="shadowOffsetInner1" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner1"></feComposite>
                <feColorMatrix values="0 0 0 0 0.109803922   0 0 0 0 0.0588235294   0 0 0 0 0.062745098  0 0 0 0.5 0" type="matrix" in="shadowInnerInner1"></feColorMatrix>
            </filter>
            <path d="M161.568317,16.5137615 L0,144.66055 C0,144.66055 3.1496346,151.746494 8.46930693,158.53211 C13.7889793,165.317726 20.1960396,169.761468 20.1960396,169.761468 L175.90099,33.6880734 C175.90099,33.6880734 171.679978,27.1889894 169.386139,24.440367 C167.0923,21.6917446 161.568317,16.5137615 161.568317,16.5137615 Z" id="path-4"></path>
            <filter x="-12.5%" y="-14.4%" width="125.0%" height="128.7%" filterUnits="objectBoundingBox" id="filter-6">
                <feMorphology radius="6" operator="erode" in="SourceAlpha" result="shadowSpreadInner1"></feMorphology>
                <feGaussianBlur stdDeviation="4.5" in="shadowSpreadInner1" result="shadowBlurInner1"></feGaussianBlur>
                <feOffset dx="0" dy="-6" in="shadowBlurInner1" result="shadowOffsetInner1"></feOffset>
                <feComposite in="shadowOffsetInner1" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner1"></feComposite>
                <feColorMatrix values="0 0 0 0 0.109803922   0 0 0 0 0.0588235294   0 0 0 0 0.062745098  0 0 0 0.86865942 0" type="matrix" in="shadowInnerInner1" result="shadowMatrixInner1"></feColorMatrix>
                <feMorphology radius="1" operator="erode" in="SourceAlpha" result="shadowSpreadInner2"></feMorphology>
                <feGaussianBlur stdDeviation="9" in="shadowSpreadInner2" result="shadowBlurInner2"></feGaussianBlur>
                <feOffset dx="25" dy="-15" in="shadowBlurInner2" result="shadowOffsetInner2"></feOffset>
                <feComposite in="shadowOffsetInner2" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner2"></feComposite>
                <feColorMatrix values="0 0 0 0 0.109803922   0 0 0 0 0.0588235294   0 0 0 0 0.062745098  0 0 0 0.805734828 0" type="matrix" in="shadowInnerInner2" result="shadowMatrixInner2"></feColorMatrix>
                <feMerge>
                    <feMergeNode in="shadowMatrixInner1"></feMergeNode>
                    <feMergeNode in="shadowMatrixInner2"></feMergeNode>
                </feMerge>
            </filter>
            <radialGradient cx="50%" cy="50%" fx="50%" fy="50%" r="52.7407864%" gradientTransform="translate(0.500000,0.500000),scale(1.000000,0.986276),rotate(90.000000),translate(-0.500000,-0.500000)" id="radialGradient-7">
                <stop stopColor="#D18A21" offset="0%"></stop>
                <stop stopColor="#D18A21" offset="88.3014648%"></stop>
                <stop stopColor="#663601" offset="100%"></stop>
            </radialGradient>
            <path d="M8.77134986,13.1830986 C8.77134986,13.1830986 32.0194081,12.8206592 42.7603306,26.3661972 C65.19276,54.6560693 60.8512397,59.8732394 72.9118457,92.8309859 C84.9724518,125.788732 105.256198,149.408451 131.570248,154.352113 C157.884298,159.295775 179.264463,141.71831 187.487603,112.605634 C195.710744,83.4929577 199,63.1690141 199,63.1690141 C199,63.1690141 184.746556,53.2816901 171.041322,48.3380282 C157.336088,43.3943662 141.986226,46.6901408 141.986226,46.6901408 C141.986226,46.6901408 138.69697,68.1126761 134.311295,85.1408451 C131.080226,97.9662146 128.829201,103.267606 128.829201,103.267606 C128.829201,103.267606 123.163187,105.136553 107.449036,86.7887324 C91.7348844,68.4409119 83.3278237,43.943662 62.4958678,25.8169014 C41.6639118,7.69014085 9.8677686,3.29577465 9.8677686,3.29577465 C9.8677686,3.29577465 7.78156614,-0.62560284 4.9338843,0.549295775 C2.08620245,1.72419439 0.68812539,3.63601256 0.548209366,7.14084507 C0.408293343,10.6456776 1.98677497,13.3246444 3.2892562,14.2816901 C4.59173743,15.2387359 8.77134986,13.1830986 8.77134986,13.1830986 Z" id="path-8"></path>
            <path d="M55.9173554,57.1267606 C55.9173554,57.1267606 64.6887052,46.1408451 66.3333333,43.943662 C67.9779614,41.7464789 79.4903581,31.3098592 79.4903581,31.3098592 L77.2975207,26.915493 C77.2975207,26.915493 65.2071572,37.569997 63.0440771,40.0985915 C60.8809971,42.6271861 52.6280992,52.7323944 52.6280992,52.7323944 L55.9173554,57.1267606 Z" id="path-10"></path>
            <filter x="-11.2%" y="-9.9%" width="122.3%" height="119.9%" filterUnits="objectBoundingBox" id="filter-11">
                <feMorphology radius="1" operator="erode" in="SourceAlpha" result="shadowSpreadInner1"></feMorphology>
                <feGaussianBlur stdDeviation="2" in="shadowSpreadInner1" result="shadowBlurInner1"></feGaussianBlur>
                <feOffset dx="0" dy="-1" in="shadowBlurInner1" result="shadowOffsetInner1"></feOffset>
                <feComposite in="shadowOffsetInner1" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner1"></feComposite>
                <feColorMatrix values="0 0 0 0 0.4   0 0 0 0 0.223529412   0 0 0 0 0.192156863  0 0 0 1 0" type="matrix" in="shadowInnerInner1"></feColorMatrix>
            </filter>
            <path d="M0.548209366,0.549295775 C0.251550489,0.995165942 8.77134986,4.94366197 18.0909091,8.23943662 C27.4104683,11.5352113 40.7915507,13.6702898 41.1157025,13.1830986 C41.4398542,12.6959074 28.832868,5.71172148 21.3801653,3.29577465 C13.9274626,0.879827811 0.844868244,0.103425607 0.548209366,0.549295775 Z" id="path-12"></path>
            <filter x="-62.0%" y="-10.3%" width="224.0%" height="120.6%" filterUnits="objectBoundingBox" id="filter-14">
                <feGaussianBlur stdDeviation="2" in="SourceGraphic"></feGaussianBlur>
            </filter>
            <filter x="-113.9%" y="-32.4%" width="327.8%" height="164.7%" filterUnits="objectBoundingBox" id="filter-15">
                <feGaussianBlur stdDeviation="10" in="SourceGraphic"></feGaussianBlur>
            </filter>
            <filter x="-93.6%" y="-16.6%" width="287.2%" height="133.1%" filterUnits="objectBoundingBox" id="filter-16">
                <feGaussianBlur stdDeviation="5" in="SourceGraphic"></feGaussianBlur>
            </filter>
            <path d="M536.354,491.833333 C538.902,499.416667 564.382,488.583333 574.574,475.583333 C584.766,462.583333 552.916,390 558.012,381.333333 C561.609823,375.214587 598.681346,349.679048 610.246,341.25 C621.810654,332.820952 620.438,328.25 620.438,328.25 C620.438,328.25 638.274,308.75 635.726,263.25 C633.178,217.75 618.246118,189.509827 589.862,139.75 C561.477882,89.9901726 526.717623,51.4352673 524.888,50.9166667 C521.066,49.8333333 515.97,54.1666667 515.97,54.1666667 C515.97,54.1666667 473.928,17.3333333 426.79,4.33333333 C383.474,1.08333333 313.169012,-4.47583556 233.142,6.5 C154.154,17.3333333 119.756,53.0833333 119.756,53.0833333 C119.756,53.0833333 114.66,49.8333333 112.112,49.8333333 C109.564,49.8333333 60.1939647,103.599336 21.658,188.5 C-6.37,250.25 -1.35193545,285.142764 8.918,317.416667 C13.6851231,332.397644 33.124,347.75 49.686,357.5 C66.248,367.25 77.714,381.333333 77.714,381.333333 C77.714,381.333333 79.0420901,382.309672 73.892,406.25 C68.7419099,430.190328 57.33,465.833333 57.33,465.833333 C57.33,465.833333 67.8608192,481.32665 73.892,485.333333 C79.9231808,489.340017 98.098,492.916667 98.098,492.916667 C98.098,492.916667 95.8138054,469.280179 95.55,457.166667 C95.2861946,445.053154 95.55,375.916667 95.55,375.916667 C95.55,375.916667 95.8772132,363.374864 98.098,349.916667 C100.318787,336.458469 102.506066,334.817498 103.194,329.333333 C105.162798,313.638193 104.468,294.666667 104.468,294.666667 C104.468,294.666667 184.73,309.317074 309.582,308.75 C434.434,308.182926 532.532,294.666667 532.532,294.666667 C532.532,294.666667 533.07075,318.0795 533.806,329.333333 C534.113723,334.043385 536.376111,342.150319 537.628,354.25 C538.879889,366.349681 540.176,392.166667 540.176,392.166667 C540.176,392.166667 545.272,449.583333 541.45,465.833333 C539.578604,473.78995 537.564888,479.00562 536.354,483.166667 C535.143112,487.327713 535.953505,490.641383 536.354,491.833333 Z" id="path-17"></path>
            <linearGradient x1="100%" y1="57.382675%" x2="39.3478384%" y2="59.3752452%" id="linearGradient-19">
                <stop stopColor="#784740" stopOpacity="0.989300272" offset="0%"></stop>
                <stop stopColor="#12090B" offset="100%"></stop>
            </linearGradient>
            <path d="M619.164,327.166667 C622.986,327.166667 636.474573,308.634221 635.726,262.166667 C634.452,183.083333 532.532,52 526.162,52 C519.792,52 514.696,52 514.696,52 C514.696,52 557.504544,102.367673 565.656,128.916667 C573.807456,155.46566 582.218,271.916667 582.218,271.916667 L602.602,292.5 C602.602,292.5 615.342,327.166667 619.164,327.166667 Z" id="path-20"></path>
            <filter x="-3.7%" y="-1.6%" width="107.4%" height="103.3%" filterUnits="objectBoundingBox" id="filter-21">
                <feGaussianBlur stdDeviation="4" in="SourceAlpha" result="shadowBlurInner1"></feGaussianBlur>
                <feOffset dx="-1" dy="0" in="shadowBlurInner1" result="shadowOffsetInner1"></feOffset>
                <feComposite in="shadowOffsetInner1" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner1"></feComposite>
                <feColorMatrix values="0 0 0 0 0.0705882353   0 0 0 0 0.0352941176   0 0 0 0 0.0431372549  0 0 0 1 0" type="matrix" in="shadowInnerInner1"></feColorMatrix>
            </filter>
            <path d="M105.742,327.166667 C109.564,327.166667 123.052573,308.634221 122.304,262.166667 C121.03,183.083333 19.11,52 12.74,52 C6.37,52 1.274,52 1.274,52 C1.274,52 44.0825435,102.367673 52.234,128.916667 C60.3854565,155.46566 52.234,254.583333 52.234,254.583333 L89.18,292.5 C89.18,292.5 101.92,327.166667 105.742,327.166667 Z" id="path-22"></path>
            <filter x="-3.7%" y="-1.6%" width="107.4%" height="103.3%" filterUnits="objectBoundingBox" id="filter-23">
                <feGaussianBlur stdDeviation="4" in="SourceAlpha" result="shadowBlurInner1"></feGaussianBlur>
                <feOffset dx="-1" dy="0" in="shadowBlurInner1" result="shadowOffsetInner1"></feOffset>
                <feComposite in="shadowOffsetInner1" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner1"></feComposite>
                <feColorMatrix values="0 0 0 0 0.0705882353   0 0 0 0 0.0352941176   0 0 0 0 0.0431372549  0 0 0 1 0" type="matrix" in="shadowInnerInner1"></feColorMatrix>
            </filter>
            <path d="M587.314,222.083333 C584.766,176.583333 583.492,191.75 574.574,141.916667 C565.656,92.0833333 515.97,54.1666667 515.97,54.1666667 C515.97,54.1666667 473.928,17.3333333 426.79,4.33333333 C383.474,1.08333333 313.169012,-4.47583556 233.142,6.5 C193.72526,11.9060704 145.156508,26.9606554 114.66,58.5 C84.163492,90.0393446 71.5396752,138.383291 52.234,180.916667 C29.4817744,231.043323 61.152,245.916667 73.892,253.5 C86.632,261.083333 589.862,267.583333 587.314,222.083333 Z" id="path-24"></path>
            <filter x="-4.3%" y="-9.1%" width="108.7%" height="118.2%" filterUnits="objectBoundingBox" id="filter-25">
                <feMorphology radius="12" operator="erode" in="SourceAlpha" result="shadowSpreadInner1"></feMorphology>
                <feGaussianBlur stdDeviation="17.5" in="shadowSpreadInner1" result="shadowBlurInner1"></feGaussianBlur>
                <feOffset dx="0" dy="0" in="shadowBlurInner1" result="shadowOffsetInner1"></feOffset>
                <feComposite in="shadowOffsetInner1" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner1"></feComposite>
                <feColorMatrix values="0 0 0 0 0.137254902   0 0 0 0 0.0588235294   0 0 0 0 0.0745098039  0 0 0 1 0" type="matrix" in="shadowInnerInner1" result="shadowMatrixInner1"></feColorMatrix>
                <feGaussianBlur stdDeviation="5" in="SourceAlpha" result="shadowBlurInner2"></feGaussianBlur>
                <feOffset dx="0" dy="0" in="shadowBlurInner2" result="shadowOffsetInner2"></feOffset>
                <feComposite in="shadowOffsetInner2" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner2"></feComposite>
                <feColorMatrix values="0 0 0 0 0.137254902   0 0 0 0 0.0588235294   0 0 0 0 0.0745098039  0 0 0 1 0" type="matrix" in="shadowInnerInner2" result="shadowMatrixInner2"></feColorMatrix>
                <feMerge>
                    <feMergeNode in="shadowMatrixInner1"></feMergeNode>
                    <feMergeNode in="shadowMatrixInner2"></feMergeNode>
                </feMerge>
            </filter>
            <linearGradient x1="51.453747%" y1="83.1534527%" x2="44.1250303%" y2="-39.3309751%" id="linearGradient-26">
                <stop stopColor="#784740" stopOpacity="0.989300272" offset="0%"></stop>
                <stop stopColor="#230F13" offset="100%"></stop>
            </linearGradient>
            <linearGradient x1="55.9756752%" y1="-8.93884321%" x2="100%" y2="86.9056893%" id="linearGradient-27">
                <stop stopColor="#784740" stopOpacity="0" offset="0%"></stop>
                <stop stopColor="#12090B" offset="100%"></stop>
            </linearGradient>
            <path d="M73.892,251.333333 C73.892,251.333333 82.81,286 99.372,292.5 C146.22565,310.888403 160.743335,309.847888 273.91,312 C387.076665,314.152112 465.01,304.416667 499.408,299 C533.806,293.583333 567.062014,291.353899 574.574,282.75 C582.085986,274.146101 587.314,225.333333 587.314,225.333333 C587.314,225.333333 555.464,216.666667 524.888,216.666667 C509.997383,216.666667 401.79052,217.980977 295.568,226.416667 C189.34548,234.852356 73.892,251.333333 73.892,251.333333 Z" id="path-28"></path>
            <filter x="-1.5%" y="-7.8%" width="102.9%" height="115.7%" filterUnits="objectBoundingBox" id="filter-29">
                <feMorphology radius="7" operator="erode" in="SourceAlpha" result="shadowSpreadInner1"></feMorphology>
                <feGaussianBlur stdDeviation="4" in="shadowSpreadInner1" result="shadowBlurInner1"></feGaussianBlur>
                <feOffset dx="0" dy="0" in="shadowBlurInner1" result="shadowOffsetInner1"></feOffset>
                <feComposite in="shadowOffsetInner1" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner1"></feComposite>
                <feColorMatrix values="0 0 0 0 0.137254902   0 0 0 0 0.0588235294   0 0 0 0 0.0745098039  0 0 0 0.68 0" type="matrix" in="shadowInnerInner1"></feColorMatrix>
            </filter>
            <filter x="-47.9%" y="-100.3%" width="195.7%" height="300.7%" filterUnits="objectBoundingBox" id="filter-30">
                <feGaussianBlur stdDeviation="25" in="SourceGraphic"></feGaussianBlur>
            </filter>
        </defs>
        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="octopus" transform="translate(2.000000, 87.000000)">
                <g id="reflection" transform="translate(199.000000, 609.000000)" fillRule="nonzero">
                    <path d="M251.582,0.272 C390.478,0.272 503.078,39.698 503.078,88.332 C503.078,136.966 390.478,176.392 251.582,176.392 C112.685,176.392 0.086,136.966 0.086,88.332 C0.086,39.698 112.685,0.272 251.582,0.272 Z" id="blob" fill="#79DAF1"></path>
                    <path d="M197.038,174.389 C197.031,156.474 197.025,143.245 197.025,143.316 C196.577,104.009 185.344,97.037 179.651,90.468 C179.631,90.421 179.606,90.378 179.586,90.332 L179.553,90.351 C179.587,90.39 179.618,90.429 179.652,90.468 C182.431,96.915 183.851,104.576 183.3,113.65 L183.259,173.183 C168.508,171.731 154.311,169.817 140.792,167.493 C140.793,142.185 140.811,117.183 140.875,117.119 C135.868,71.187 109.23,83.51 107.707,66.965 C103.334,57.346 157.172,53.983 176.583,84.648 C176.585,84.659 176.588,84.667 176.589,84.676 L176.597,84.673 C176.592,84.664 176.588,84.656 176.582,84.648 C176.292,83.021 176.35,81.108 176.871,78.69 C178.579,64.61 243.074,79.562 241.768,140.514 L241.962,176.397 C226.594,176.194 211.581,175.513 197.038,174.389 Z" id="reflectionL" fill="#55BAE8"></path>
                </g>
                <g id="reflectionL-link" transform="translate(520.500000, 727.500000) scale(-1, 1) translate(-520.500000, -727.500000) translate(453.000000, 669.000000)" fillRule="nonzero" fill="#55BAE8">
                    <path d="M90.038,114.389 C90.031,96.474 90.025,83.245 90.025,83.316 C89.577,44.009 78.344,37.037 72.651,30.468 C72.631,30.421 72.606,30.378 72.586,30.332 L72.553,30.351 C72.587,30.39 72.618,30.429 72.652,30.468 C75.431,36.915 76.851,44.576 76.3,53.65 L76.259,113.183 C61.508,111.731 47.311,109.817 33.792,107.493 C33.793,82.185 33.811,57.183 33.875,57.119 C28.868,11.187 2.23,23.51 0.707,6.965 C-3.666,-2.654 50.172,-6.017 69.583,24.648 C69.585,24.659 69.588,24.667 69.589,24.676 L69.597,24.673 C69.592,24.664 69.588,24.656 69.582,24.648 C69.292,23.021 69.35,21.108 69.871,18.69 C71.579,4.61 136.074,19.562 134.768,80.514 L134.962,116.397 C119.594,116.194 104.581,115.513 90.038,114.389 Z" id="reflectionL"></path>
                </g>
                <g id="legs" transform="translate(307.000000, 431.000000)" fillRule="nonzero" fill="#000000">
                    <path d="M140.506,58.707 L140.506,0.842 L207.629,0.834 C207.629,0.834 245.796,14.083 247.82,73.113 C247.82,73.113 248.031,181.794 247.814,182.011 C252.82,227.943 279.459,215.62 280.982,232.165 C283.505,244.8 201.687,246.433 205.388,185.479 L205.47,97.997 C205.47,97.997 207.72,76.878 191.611,62.075 C191.611,62.075 191.662,188.665 191.662,188.447 C192.315,245.698 215.85,234.354 211.817,253.073 C210.109,267.153 145.614,252.202 146.92,191.249 L146.206,58.921 L140.506,58.707 Z" id="legsR"></path>
                    <g id="legsR-link" transform="translate(71.000000, 129.000000) scale(-1, 1) translate(-71.000000, -129.000000) ">
                        <path d="M0.506,58.707 L0.506,0.842 L67.629,0.834 C67.629,0.834 105.796,14.083 107.82,73.113 C107.82,73.113 108.031,181.794 107.814,182.011 C112.82,227.943 139.459,215.62 140.982,232.165 C143.505,244.8 61.687,246.433 65.388,185.479 L65.47,97.997 C65.47,97.997 67.72,76.878 51.611,62.075 C51.611,62.075 51.662,188.665 51.662,188.447 C52.315,245.698 75.85,234.354 71.817,253.073 C70.109,267.153 5.614,252.202 6.92,191.249 L6.206,58.921 L0.506,58.707 Z" id="legsR"></path>
                    </g>
                </g>
                <g id="tail" transform="translate(155.000000, 414.000000)" fillRule="nonzero">
                    <path d="M73.492,35.142 C111.712,110.962 188.233,69.131 188.233,69.131 C195.39,88.192 185.462,128.342 185.462,128.342 C185.462,128.342 84.076,158.629 53.863,71.156 C37.869,24.31 -2.442,19.994 1.897,7.185 C16.979,-9.343 56.689,9.449 73.492,35.142 Z" id="tailBody" fill="#000000"></path>
                    <ellipse id="tdot" fill="#BEE8DE" cx="170.836" cy="87.21" rx="7.625" ry="5.29"></ellipse>
                    <g id="tdot-link" transform="translate(139.500000, 85.000000)" fill="#BEE8DE">
                        <ellipse id="tdot" cx="7.836" cy="6.21" rx="7.625" ry="5.29"></ellipse>
                    </g>
                    <g id="tdot-link" transform="translate(116.000000, 84.500000)" fill="#BEE8DE">
                        <ellipse id="tdot" cx="7.836" cy="6.21" rx="7.625" ry="5.29"></ellipse>
                    </g>
                    <g id="tdot-link" transform="translate(92.700000, 75.500000)" fill="#BEE8DE">
                        <ellipse id="tdot" cx="7.836" cy="6.21" rx="7.625" ry="5.29"></ellipse>
                    </g>
                    <g id="tdot-link" transform="translate(75.800000, 62.500000)" fill="#BEE8DE">
                        <ellipse id="tdot" cx="7.836" cy="6.21" rx="7.625" ry="5.29"></ellipse>
                    </g>
                    <g id="tdot-link" transform="translate(63.400000, 46.500000)" fill="#BEE8DE">
                        <ellipse id="tdot" cx="7.836" cy="6.21" rx="7.625" ry="5.29"></ellipse>
                    </g>
                    <g id="tdot-link" transform="translate(52.200000, 30.300000)" fill="#BEE8DE">
                        <ellipse id="tdot" cx="7.836" cy="6.21" rx="7.625" ry="5.29"></ellipse>
                    </g>
                    <g id="tdot-link" transform="translate(40.000000, 16.000000)" fill="#BEE8DE">
                        <ellipse id="tdot" cx="7.836" cy="6.21" rx="7.625" ry="5.29"></ellipse>
                    </g>
                    <g id="tdot-link" transform="translate(20.000000, 4.700000)" fill="#BEE8DE">
                        <ellipse id="tdot" cx="7.836" cy="6.21" rx="7.625" ry="5.29"></ellipse>
                    </g>
                    <path d="M8.252,24.501 L14.835,47.919 C14.835,47.919 18.668,61.835 8.252,61.751 C-2.164,61.667 0.836,50.504 1.669,47.919 C2.502,45.334 8.252,24.501 8.252,24.501 Z" id="droplet" fill="#79DAF1"></path>
                </g>
                <g id="head">
                    <path d="M709.479,249.035 C711.224,441.235 538.385,433.559 447.885,435.059 C350.385,435.809 183.727,431.735 176.292,249.035 C172.126,187.607 189.958,144.664 218.984,112.55 C213.351,101.331 202.526,47.686 224.875,1.116 C267.143,-4.39 319.207,30.99 340.127,44.281 C379.83,34.143 418.951,31.177 447.385,31.177 C475.819,31.177 500.941,32.477 540.643,42.615 C561.564,29.324 611.294,-4.389 653.563,1.117 C675.911,47.686 666.086,93.999 660.454,105.218 C689.479,134.998 714.978,173.274 709.479,249.035 Z" id="fur" fill="#000000" fillRule="nonzero"></path>
                    <path d="M447.086,414 C549.08,415.097 648.086,410.667 645.086,290.667 C636.42,216.667 583.086,202.775 545.586,203.5 C512.42,202.775 477.086,207.5 447.086,207.5 C417.086,207.5 375.086,203.055 349.586,202.777 C302.419,199 244.586,225 244.086,297.5 C247.086,407 349.419,414.114 447.086,414 Z" id="face" fill="#FFC9AC" fillRule="nonzero"></path>
                    <g id="eyes" transform="translate(295.000000, 238.000000)" fillRule="nonzero">
                        <g id="eyeR-Inner">
                            <ellipse id="Oval" fill="#FFFFFF" cx="41.461" cy="59.88" rx="41.375" ry="59.88"></ellipse>
                            <ellipse id="Oval" fill="#C25C50" cx="42.086" cy="60.977" rx="28.667" ry="40.023"></ellipse>
                        </g>
                        <g id="eyeR-Inner-link" transform="translate(223.000000, 0.000000)">
                            <g id="eyeR-Inner">
                                <ellipse id="Oval" fill="#FFFFFF" cx="41.461" cy="59.88" rx="41.375" ry="59.88"></ellipse>
                                <ellipse id="Oval" fill="#C25C50" cx="42.086" cy="60.977" rx="28.667" ry="40.023"></ellipse>
                            </g>
                        </g>
                    </g>
                    <circle id="nose" fill="#C35D51" fillRule="nonzero" cx="445.211" cy="350.875" r="10.875"></circle>
                    <path d="M424.586,377.167 C424.586,377.167 431.169,390.834 445.211,390.834 C459.253,390.834 465.753,377.167 465.753,377.167" id="mouth" stroke="#C35D51" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"></path>
                    <g id="whiskers" transform="translate(0.000000, 318.000000)" strokeLinecap="round" stroke="#000000" strokeWidth="4">
                        <g id="whiskersR" transform="translate(693.000000, 0.000000)">
                            <path d="M202.086,14 C202.086,14 124.414,-4.106 6.324,1.943" id="Shape"></path>
                            <path d="M199.317,48.279 C199.317,48.279 118.212,23.432 0,20.661" id="Shape"></path>
                        </g>
                        <g id="whiskersR-link" transform="translate(101.500000, 24.500000) scale(-1, 1) translate(-101.500000, -24.500000) ">
                            <g id="whiskersR">
                                <path d="M202.086,14 C202.086,14 124.414,-4.106 6.324,1.943" id="Shape"></path>
                                <path d="M199.317,48.279 C199.317,48.279 118.212,23.432 0,20.661" id="Shape"></path>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
            <g id="sherlock_costume" className={`sherlock_costume ${props.costumeClassName}`} transform="translate(90.000000, 0.000000)">
                <g id="magnifying_glass" transform="translate(0.000000, 315.000000)">
                    <g id="handle" transform="translate(0.000000, 118.238532)">
                        <g id="Path-2">
                            <use fill="url(#linearGradient-1)" fillRule="evenodd" xlinkHref="#path-2"></use>
                            <use fill="black" fillOpacity="1" filter="url(#filter-3)" xlinkHref="#path-2"></use>
                        </g>
                        <mask id="mask-5" fill="white">
                            <use xlinkHref="#path-4"></use>
                        </mask>
                        <g id="Mask">
                            <use fill="#663931" fillRule="evenodd" xlinkHref="#path-4"></use>
                            <use fill="black" fillOpacity="1" filter="url(#filter-6)" xlinkHref="#path-4"></use>
                        </g>
                    </g>
                    <path d="M252.450495,155.229358 C210.173371,155.229358 175.90099,120.480082 175.90099,77.6146789 C175.90099,34.7492754 210.173371,0 252.450495,0 C294.727619,0 329,34.7492754 329,77.6146789 C329,120.480082 294.727619,155.229358 252.450495,155.229358 Z M252.450495,145.981651 C289.690345,145.981651 319.879208,115.372715 319.879208,77.6146789 C319.879208,39.8566426 289.690345,9.24770642 252.450495,9.24770642 C215.210645,9.24770642 185.021782,39.8566426 185.021782,77.6146789 C185.021782,115.372715 215.210645,145.981651 252.450495,145.981651 Z" id="outer_frame" fill="url(#radialGradient-7)"></path>
                    <ellipse id="inner_glass" stroke="#979797" strokeWidth="4" fillOpacity="0.389999986" fill="#107BE3" cx="252.450495" cy="77.6146789" rx="67.4287129" ry="68.3669725"></ellipse>
                </g>
                <g id="pipe" transform="translate(360.000000, 467.000000)">
                    <g id="Path-4" transform="translate(0.000000, 0.549296)">
                        <mask id="mask-9" fill="white">
                            <use xlinkHref="#path-8"></use>
                        </mask>
                        <use id="Mask" fill="#12090B" xlinkHref="#path-8"></use>
                        <g mask="url(#mask-9)">
                            <use fill="#D18A21" fillRule="evenodd" xlinkHref="#path-10"></use>
                            <use fill="black" fillOpacity="1" filter="url(#filter-11)" xlinkHref="#path-10"></use>
                        </g>
                        <path d="M171.297011,59.2763106 C189.116508,59.2763106 201.413295,55.5272321 201.413295,54.6457441 C201.413295,53.7642562 190.680937,42.358712 172.861439,42.358712 C155.041941,42.358712 142.112459,53.924362 142.082325,55.5891676 C142.05219,57.2539733 153.477513,59.2763106 171.297011,59.2763106 Z" id="Oval-6" fill="#76423B" mask="url(#mask-9)" transform="translate(171.747780, 50.817511) rotate(17.000000) translate(-171.747780, -50.817511) "></path>
                    </g>
                    <g id="pipe_opening" transform="translate(149.112948, 47.788732)">
                        <mask id="mask-13" fill="white">
                            <use xlinkHref="#path-12"></use>
                        </mask>
                        <use id="Mask" fill="#2E1B1A" xlinkHref="#path-12"></use>
                        <path d="M38.922865,13.7323944 C38.922865,13.7323944 27.0657135,7.53250428 20.8319559,5.49295775 C14.5981983,3.45341121 1.09641873,2.1971831 1.09641873,2.1971831 C1.09641873,2.1971831 12.6052595,8.04729283 18.6391185,9.88732394 C24.6729774,11.7273551 38.922865,13.7323944 38.922865,13.7323944 Z" id="Path" fill="#12090B" mask="url(#mask-13)"></path>
                    </g>
                    <path d="M44.4516105,51.0349911 C48.2293407,51.0349911 51.4563247,37.4987281 49.535304,20.3726413 C47.6142832,3.24655455 41.153062,-7.18147989 40.4822033,-7.18147989 C39.8113446,-7.18147989 45.8880027,2.29209039 46.9151093,20.5395625 C47.942216,38.7870346 40.6738803,51.0349911 44.4516105,51.0349911 Z" id="Oval-5" fillOpacity="0.550000012" fill="#FFFFFF" filter="url(#filter-14)" transform="translate(45.268966, 21.926756) rotate(-53.000000) translate(-45.268966, -21.926756) "></path>
                    <path d="M158.011331,153.515596 C164.838623,153.515596 180.664616,123.281254 180.664616,102.632586 C180.664616,81.983918 171.088699,60.8032885 164.261407,60.8032885 C157.434114,60.8032885 155.940804,81.983918 155.940804,102.632586 C155.940804,123.281254 151.184038,153.515596 158.011331,153.515596 Z" id="Oval-3" fill="#703F37" filter="url(#filter-15)" transform="translate(167.496557, 107.159442) rotate(18.000000) translate(-167.496557, -107.159442) "></path>
                    <path d="M81.2254535,110.618491 C103.879459,113.888882 87.3003894,95.1955312 87.3003894,68.5949904 C87.3003894,41.9944495 84.4385116,20.4304505 80.9082064,20.4304505 C77.3779013,20.4304505 80.4900879,38.0547281 80.4900879,64.6552689 C80.4900879,91.2558097 72.4593768,109.352997 81.2254535,110.618491 Z" id="Oval-4" fill="#703F37" filter="url(#filter-16)" transform="translate(85.140643, 65.710090) rotate(-30.000000) translate(-85.140643, -65.710090) "></path>
                </g>
                <g id="hat" transform="translate(42.000000, 0.000000)">
                    <ellipse id="Oval-8" fillOpacity="0.989300272" fill="#51302B" cx="306.397" cy="12.4583333" rx="26.117" ry="12.4583333"></ellipse>
                    <g id="Path-5" transform="translate(0.000000, 11.916667)">
                        <mask id="mask-18" fill="white">
                            <use xlinkHref="#path-17"></use>
                        </mask>
                        <use id="Mask" fill="#000000" xlinkHref="#path-17"></use>
                        <g id="Path-3" mask="url(#mask-18)">
                            <use fill="url(#linearGradient-19)" fillRule="evenodd" xlinkHref="#path-20"></use>
                            <use fill="black" fillOpacity="1" filter="url(#filter-21)" xlinkHref="#path-20"></use>
                        </g>
                        <g id="Path-3-Copy-2" mask="url(#mask-18)" transform="translate(61.803984, 189.583333) scale(-1, 1) translate(-61.803984, -189.583333) ">
                            <use fill="url(#linearGradient-19)" fillRule="evenodd" xlinkHref="#path-22"></use>
                            <use fill="black" fillOpacity="1" filter="url(#filter-23)" xlinkHref="#path-22"></use>
                        </g>
                        <g id="Path-3-Copy" mask="url(#mask-18)">
                            <use fill="#522E29" fillRule="evenodd" xlinkHref="#path-24"></use>
                            <use fill="black" fillOpacity="1" filter="url(#filter-25)" xlinkHref="#path-24"></use>
                        </g>
                        <g mask="url(#mask-18)">
                            <use fill="url(#linearGradient-26)" fillRule="evenodd" xlinkHref="#path-28"></use>
                            <use fill="url(#linearGradient-27)" fillRule="evenodd" xlinkHref="#path-28"></use>
                            <use fill="black" fillOpacity="1" filter="url(#filter-29)" xlinkHref="#path-28"></use>
                        </g>
                    </g>
                    <ellipse id="Oval-7" fill="#784740" filter="url(#filter-30)" transform="translate(232.617761, 121.523618) rotate(-16.000000) translate(-232.617761, -121.523618) " cx="232.617761" cy="121.523618" rx="78.351" ry="37.375"></ellipse>
                </g>
            </g>
        </g>
    </svg>
  </div>
)

export default Octocat