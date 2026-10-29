/* Evidence shown in the side panel. Each row on the page links here with data-ev="<id>".
   items: [image name in assets/ev/, kind, caption {zh, en}]
   kind: cert = certificate or award, photo = photo, fig = research figure, doc = document or slide */
window.EV = {
    acra2026: {
        title: { zh: "Flow-Field Optimization of an Anion-Exchange-Membrane Water Electrolyzer Cell", en: "Flow-Field Optimization of an Anion-Exchange-Membrane Water Electrolyzer Cell" },
        meta: { zh: "ACRA 2026 第 12 屆亞洲冷凍空調研討會，台中", en: "12th Asian Conference on Refrigeration and Air-Conditioning (ACRA 2026), Taichung" },
        cite: "M.-C. Kung and P.-J. Chen*, “Flow-field optimization of an anion-exchange-membrane water electrolyzer cell,” in Proc. ACRA 2026, Taichung, Taiwan, 2026, Paper ACRA2026-031.",
        body: {
            zh: ["以產氧側流場為對象，用 COMSOL 建立含流道、多孔鎳網與進出口歧管的三維 CFD 模型，目標是降低壓降並改善流場均勻度。加入出口擴散道後，壓降比基準設計低約 34%，近電極的流速也提高。", "我擔任第一作者，負責模型建立、網格測試、與實驗數據比對、參數分析、RSM 最佳化、英文論文撰寫，以及英文口頭發表與問答。本文為國科會計畫（NSTC 114-2637-E-167-015）成果。"],
            en: ["A 3D CFD model of the oxygen-side flow field, including channels, porous nickel mesh and manifolds, built in COMSOL to lower pressure drop and improve flow uniformity. Adding an outlet diffuser cut pressure drop by about 34% against the baseline and raised near-electrode velocity.", "As first author I built the model, ran the mesh study, compared results with experimental data, carried out the parametric analysis and RSM optimization, wrote the paper in English and gave the English talk. This paper is an output of NSTC project 114-2637-E-167-015."]
        },
        items: [
            ["acra-badge", "photo", { zh: "研討會現場名牌，Paper ID 31", en: "Conference name card, Paper ID 31" }],
            ["acra-slide", "doc", { zh: "英文發表簡報首頁", en: "Title slide of the English talk" }],
            ["acra-outlet", "fig", { zh: "有無出口擴散道的壓降與平均流速比較（論文圖）", en: "Pressure drop and mean velocity with and without the outlet diffuser (paper figure)" }],
            ["acra-model", "fig", { zh: "單電池模型：產氫側（陰極）、鎳網、KOH 入口、產氧側（陽極）與產氧出口", en: "Single-cell model: hydrogen side (cathode), nickel mesh, KOH inlet, oxygen side (anode) and oxygen outlet" }],
            ["acra-porosity", "fig", { zh: "鎳網孔隙率對壓降與平均流速的影響", en: "Effect of nickel-mesh porosity on pressure drop and mean velocity" }],
            ["acra-angle", "fig", { zh: "入口擴散角對壓降與平均流速的影響", en: "Effect of inlet divergence angle on pressure drop and mean velocity" }],
            ["acra-thickness", "fig", { zh: "擴散層厚度對壓降與平均流速的影響", en: "Effect of diffusion-layer thickness on pressure drop and mean velocity" }]
        ]
    },
    ilass2025: {
        title: { zh: "Flow-Field and Thermal Characteristics of Single-Cell AEM Electrolyzer", en: "Flow-Field and Thermal Characteristics of Single-Cell AEM Electrolyzer" },
        meta: { zh: "ILASS-Asia 2025 第 24 屆亞洲液體霧化與噴霧系統研討會，國立成功大學", en: "ILASS-Asia 2025, 24th Annual Conference on Liquid Atomization and Spray Systems–Asia, National Cheng Kung University" },
        cite: "M.-C. Kung and P.-J. Chen*, “Flow-field and thermal characteristics of single-cell AEM electrolyzer,” ILASS-Asia 2025, Tainan, Taiwan, 2025.",
        body: {
            zh: ["以直徑 100 mm 的 AEM 水電解單電池為對象，比較陽極側有無多孔鎳網的流場。沒有鎳網時，流線進入腔體後迅速擴張，膜面附近形成停滯區；加入鎳網後分布較均勻，陽極面平均流速提高約 22%，但壓降約為 17 倍。這個取捨是我後來在 ACRA 2026 比較孔隙率與擴散道設計的原因。", "這是我第一次在國際研討會以英文口頭發表，負責建模、模擬分析、英文簡報與現場問答。"],
            en: ["A 100 mm AEM water-electrolysis cell, compared with and without a porous nickel mesh on the anode side. Without the mesh the flow spreads quickly after the inlet and leaves stagnant zones near the membrane; with it the distribution is more even and anode-side mean velocity rises by about 22%, but pressure drop is about 17 times higher. That trade-off led to the porosity and diffuser study I presented at ACRA 2026.", "My first English talk at an international conference. I did the modeling, the analysis, the English slides and the Q&A."]
        },
        items: [
            ["ilass-cert", "cert", { zh: "參加證書", en: "Certificate of participation" }],
            ["ilass-venue", "photo", { zh: "會場，國立成功大學", en: "At the venue, National Cheng Kung University" }],
            ["ilass-slide", "doc", { zh: "英文發表簡報首頁", en: "Title slide of the English talk" }],
            ["ilass-velocity", "fig", { zh: "陽極面俯視速度分布：各組左圖無鎳網、右圖有鎳網", en: "Anode-side velocity, top view: in each pair, left without mesh, right with mesh" }],
            ["ilass-bars", "fig", { zh: "有無鎳網的平均流速與壓降比較", en: "Mean velocity and pressure drop with and without the mesh" }]
        ]
    },
    hefc2025: {
        title: { zh: "AEM 陰離子膜電解槽流道設計與傳熱數值分析", en: "Flow-Channel Design and Heat-Transfer Numerical Analysis of an AEM Electrolyzer (in Chinese)" },
        meta: { zh: "HEFC 2025 國際氫能與燃料電池學術研討會，PH-100", en: "HEFC 2025 International Hydrogen Energy and Fuel Cell Conference, PH-100" },
        cite: "陳鵬仁、龔孟謙*，〈AEM 陰離子膜電解槽流道設計與傳熱數值分析〉，HEFC 2025 國際氫能與燃料電池學術研討會，PH-100，2025。",
        body: {
            zh: ["以 COMSOL 建立單電池三維模型，耦合層流流動、固液熱傳與 OH⁻ 的擴散與導電，探討入口流速、流道幾何與膜材性質的影響；入口流速 0.1 m/s 時，主流道速度均勻度約 93%。", "我負責建模、物性設定、模擬分析與口頭發表，並擔任通訊作者。這是我第一次同時耦合流動、熱傳與物種傳輸。"],
            en: ["A 3D single-cell COMSOL model coupling laminar flow, conjugate heat transfer and OH⁻ diffusion and conduction, used to study inlet velocity, channel geometry and membrane properties. At an inlet velocity of 0.1 m/s, main-channel velocity uniformity was about 93%.", "I built the model, set the material properties, ran the analysis and gave the talk, as corresponding author. It was my first model coupling flow, heat transfer and species transport."]
        },
        items: [
            ["hefc25-letter", "doc", { zh: "論文接受函", en: "Acceptance letter" }],
            ["hefc25-model", "fig", { zh: "單電池模型幾何", en: "Single-cell model geometry" }],
            ["hefc25-oh", "fig", { zh: "膜面 OH⁻ 濃度分布", en: "OH⁻ concentration on the membrane" }]
        ]
    },
    isme2025: {
        title: { zh: "AEM 電解氫槽結構參數最佳化", en: "Structural Parameter Optimization of an AEM Hydrogen Electrolyzer (in Chinese)" },
        meta: { zh: "ISME 2025 第十屆台灣機電工程國際學會全國學術研討會，Paper 150，國立成功大學", en: "10th ISME National Conference (ISME 2025), Paper 150, National Cheng Kung University" },
        cite: "龔孟謙，〈AEM 電解氫槽結構參數最佳化〉，ISME 2025 第十屆台灣機電工程國際學會全國學術研討會，Paper 150，2025。",
        body: {
            zh: ["把單電池模型擴充成 12 個 Ø100 mm Cell 以貫通道串聯的流道模型。基準條件下，後段 Cell 的流速衰減約 40%，高溫區集中在第 3–10 Cell。依結果提出優化入口擴散幾何、採用薄鎳網加局部肋片的改善方向；這些仍是模擬預估，尚未經實驗驗證。", "我擔任第一作者，負責模型建立、模擬分析、論文撰寫與口頭發表。"],
            en: ["The single-cell model extended to twelve Ø100 mm cells connected in series through a central channel. Under baseline conditions, velocity in the downstream cells dropped by about 40% and hot spots concentrated in cells 3–10. I proposed a revised inlet diffuser and a thin mesh with local ribs; these are simulation estimates, not yet tested.", "As first author I built the model, ran the analysis, wrote the paper and gave the talk."]
        },
        items: [
            ["isme-cert", "cert", { zh: "參賽證明", en: "Certificate of participation" }],
            ["isme-talk", "photo", { zh: "口頭發表，國立成功大學", en: "Oral presentation, National Cheng Kung University" }],
            ["isme-slide", "doc", { zh: "發表簡報首頁", en: "Title slide" }],
            ["isme-model", "fig", { zh: "模型：Ø100 mm × 12 Cell", en: "Model: Ø100 mm × 12 cells" }],
            ["isme-velocity", "fig", { zh: "速度場", en: "Velocity field" }],
            ["isme-temp", "fig", { zh: "溫度場", en: "Temperature field" }]
        ]
    },
    csme2024: {
        title: { zh: "AEM 電解氫槽結構參數最佳化", en: "Structural Parameter Optimization of an AEM Hydrogen Electrolyzer (in Chinese)" },
        meta: { zh: "CSME 2024 中國機械工程學會第四十一屆全國學術研討會，E17-005，國立高雄科技大學", en: "41st National Conference of the Chinese Society of Mechanical Engineers (CSME 2024), E17-005, National Kaohsiung University of Science and Technology" },
        cite: "陳鵬仁、龔孟謙*，〈AEM 電解氫槽結構參數最佳化〉，CSME 2024 中國機械工程學會第四十一屆全國學術研討會，E17-005，2024。",
        body: {
            zh: ["把鎳網厚度、入口擴散道角度與入口流量三個參數放在一起分析，以反應曲面法建立性能指標（平均流速／壓降）的回歸模型，再用牛頓梯度法求最佳參數；模型預測的性能指標比現行產品參數高約 20%。", "我擔任通訊作者並上台口頭發表，負責模型建立、參數模擬、反應曲面最佳化與簡報製作。"],
            en: ["Nickel-mesh thickness, inlet diffuser angle and inlet flow rate analyzed together: a response-surface regression of the performance index (mean velocity / pressure drop), optimized with Newton's gradient method. The predicted index was about 20% higher than with the current product parameters.", "As corresponding author I built the model, ran the parametric simulations and the RSM optimization, made the slides and gave the talk."]
        },
        items: [
            ["csme-cert", "cert", { zh: "出席證明", en: "Certificate of attendance" }],
            ["csme-model", "fig", { zh: "上：產氧端模型；下：入口擴散道角度 70°、92°、115°", en: "Top: oxygen-side model; bottom: inlet diffuser angles of 70°, 92° and 115°" }],
            ["csme-angle", "fig", { zh: "入口擴散道角度對壓降與平均流速的影響", en: "Effect of inlet diffuser angle on pressure drop and mean velocity" }],
            ["csme-opt", "fig", { zh: "最佳化前後性能指標比較（+20%）", en: "Performance index before and after optimization (+20%)" }]
        ]
    },
    acmt2024: {
        title: { zh: "電解槽近膜流場特性數值模擬研究", en: "Numerical Simulation of Near-Membrane Flow Characteristics in an Electrolyzer (in Chinese)" },
        meta: { zh: "ACMT 2024 第二屆臺灣計算力學學會年會，迷你論壇", en: "2nd Annual Meeting of the Association for Computational Mechanics Taiwan (ACMT 2024), mini-forum" },
        cite: "陳鵬仁、龔孟謙*、林志嘉、許豐家，〈電解槽近膜流場特性數值模擬研究〉，ACMT 2024 第二屆臺灣計算力學學會年會，2024。",
        body: {
            zh: ["與工研院綠能所合作，以有限元素法建立產氧端三維流場模型，探討鎳網厚度與擴散層孔隙率的影響。網格獨立測試後與工研院實驗壓降比對，網格 400 萬時平均誤差約 0.006 bar；孔隙率超過 50% 後，壓降與平均流速的變化趨於平緩。", "我擔任通訊作者並在迷你論壇口頭發表，負責模型建立、參數模擬、結果整理與簡報。"],
            en: ["With ITRI's Green Energy and Environment Research Laboratories, a 3D finite-element model of the oxygen side used to study nickel-mesh thickness and diffusion-layer porosity. After a mesh-independence study, simulated pressure drop matched ITRI's measurements with a mean error of about 0.006 bar at 4 million elements; above 50% porosity, pressure drop and mean velocity level off.", "As corresponding author I built the model, ran the simulations, organized the results and presented them at the mini-forum."]
        },
        items: [
            ["acmt-cert", "cert", { zh: "台灣計算力學學會感謝狀", en: "Letter of appreciation, Association for Computational Mechanics Taiwan" }],
            ["acmt-model", "fig", { zh: "上：Ø100 mm 產氧端模型與入口擴散道；下：鎳網層與速度量測面（距電極 1 mm）", en: "Top: Ø100 mm oxygen-side model and inlet diffuser; bottom: mesh layer and the velocity plane 1 mm from the electrode" }],
            ["acmt-porosity", "fig", { zh: "擴散層孔隙率對壓降與平均流速的影響", en: "Effect of diffusion-layer porosity on pressure drop and mean velocity" }]
        ]
    },
    hefc2024: {
        title: { zh: "電解氫設備結構流場特性分析研究", en: "Structural Flow-Field Analysis of Electrolytic Hydrogen Equipment (in Chinese)" },
        meta: { zh: "HEFC 2024 第十九屆全國氫能與燃料電池學術研討會，S-020，一般論文組優等", en: "19th National Hydrogen Energy and Fuel Cell Conference (HEFC 2024), S-020; Excellent Paper Award" },
        cite: "陳鵬仁、龔孟謙*，〈電解氫設備結構流場特性分析研究〉，HEFC 2024 第十九屆全國氫能與燃料電池學術研討會，S-020，2024。",
        body: {
            zh: ["我加入陳鵬仁老師研究團隊後的第一篇論文。用 COMSOL 建立產氧端三維流場模型，比較出口擴散道有無、鎳網層有無與入口擴散道角度，對進出口壓降與電極附近流速的影響，獲一般論文組優等。", "我擔任通訊作者並上台口頭發表，負責模型建立、模擬分析與簡報製作。"],
            en: ["My first paper after joining Prof. Peng-Jen Chen's group: a 3D COMSOL model of the oxygen side comparing designs with and without an outlet diffuser, with and without the nickel-mesh layer, and with different inlet diffuser angles, measured by pressure drop and near-electrode velocity. It received the Excellent Paper Award in the general paper category.", "As corresponding author I built the model, ran the analysis, made the slides and gave the talk."]
        },
        items: [
            ["hefc24-award", "cert", { zh: "一般論文組優等獎狀", en: "Excellent Paper Award certificate" }],
            ["hefc24-photo", "photo", { zh: "頒獎，與陳鵬仁老師合影", en: "At the award ceremony with Prof. Peng-Jen Chen" }],
            ["hefc24-outlet", "fig", { zh: "左：無出口擴散道；右：有出口擴散道", en: "Left: without outlet diffuser; right: with outlet diffuser" }],
            ["hefc24-pressure", "fig", { zh: "壓降比較", en: "Pressure drop comparison" }]
        ]
    },
    capstone: {
        title: { zh: "應用機器學習與基因演算法進行電解槽幾何數據最佳化", en: "Electrolyzer Geometry Optimization Using Machine Learning and Genetic Algorithms" },
        meta: { zh: "大三專題，3 人小組，我擔任組長；114 學年度系專題成果競賽 系統整合應用組第二名", en: "Junior-year capstone, team of 3, team lead; 2nd Place, System Integration Applications category, 2025–26 department competition" },
        body: {
            zh: ["以 COMSOL 分階段耦合層流場、H₂ 物種傳輸與電流分布，建立 3D 五層簡化模型；用 200 筆模擬資料訓練 MLP 代理模型，再以基因演算法在固定 MEA 尺寸與可加工範圍內搜尋參數。最佳化設計的壓降由 125.3 Pa 降至 80.6 Pa（−35.6%），流速均勻度由 0.672 提高到 0.839（+24.8%），這些是模型條件下的數值結果，尚未經實驗驗證。", "在 40 筆測試資料上，壓降代理模型的 R² 約 0.70，產氫效率模型只有約 −0.21，所以與效率有關的結果只能當作初步參考；我把這點照實寫進了專題報告。", "我負責 COMSOL 建模與模擬、實驗操作與量測、專題網站建置與 Windows 執行檔打包，並協助 Python、機器學習與基因演算法開發。"],
            en: ["A simplified five-layer 3D COMSOL model, solved by coupling laminar flow, H₂ species transport and current distribution in stages. An MLP surrogate trained on 200 simulation samples, then a genetic algorithm searching parameters within a fixed MEA size and machinable limits. The optimized design lowered pressure drop from 125.3 to 80.6 Pa (−35.6%) and raised flow uniformity from 0.672 to 0.839 (+24.8%). These are model results, not yet validated experimentally.", "On 40 test samples the pressure-drop surrogate reached R² ≈ 0.70, but the hydrogen-efficiency surrogate only ≈ −0.21, so efficiency-related results are preliminary. I reported that plainly in the project report.", "I handled COMSOL modeling and simulation, experiments and measurements, the project website and the Windows executable, and helped with the Python, machine-learning and genetic-algorithm code."]
        },
        items: [
            ["cap-award", "cert", { zh: "系統整合應用組第二名獎狀", en: "2nd Place certificate" }],
            ["cap-team", "photo", { zh: "頒獎後與組員和老師合影", en: "With teammates and teacher after the award" }],
            ["cap-poster", "doc", { zh: "專題海報", en: "Project poster" }],
            ["cap-booth", "photo", { zh: "成果展攤位與實體設備", en: "Exhibition booth with the test hardware" }],
            ["cap-bench", "photo", { zh: "電解槽實驗設備", en: "Electrolyzer test bench" }],
            ["cap-cell", "photo", { zh: "電解槽流道板", en: "Electrolyzer flow plates" }],
            ["cap-model", "fig", { zh: "COMSOL 3D 五層模型", en: "Five-layer 3D COMSOL model" }],
            ["cap-data", "fig", { zh: "200 筆資料：入口流速與壓降", en: "200 samples: inlet velocity vs. pressure drop" }],
            ["cap-web", "fig", { zh: "專題網站：最佳化模式", en: "Project website: optimization mode" }]
        ]
    },
    fixture: {
        title: { zh: "AEM-25 單電池水電解測試治具", en: "AEM-25 Single-Cell Electrolysis Test Fixture" },
        meta: { zh: "自行設計，Rev. B", en: "Own design, Rev. B" },
        body: {
            zh: ["自行設計 25 cm²（50 × 50 mm）單電池測試治具，完成 9 張工程圖與 BOM，目前設計完成、尚未加工。實習之後，我設計治具與流道時會多考慮加工、組裝與現場量測的可行性。"],
            en: ["A 25 cm² (50 × 50 mm) single-cell test fixture with nine engineering drawings and a BOM. The design is complete; it has not been machined yet. Since my internship I design fixtures and channels with machining, assembly and on-site measurement in mind."]
        },
        items: [
            ["fix-assembly", "doc", { zh: "組立外觀：正視與側視", en: "Assembly: front and side elevations" }],
            ["fix-drawing", "doc", { zh: "工程圖", en: "Engineering drawing" }]
        ]
    },
    chiba: {
        title: { zh: "日本千葉大學 Global Study Program", en: "Chiba University Global Study Program, Japan" },
        meta: { zh: "國際教養學部特別聽講學生", en: "Special auditing student, College of Liberal Arts and Sciences" },
        body: {
            zh: ["千葉大學、德國 HTW Dresden 與本校三校學生混合分組，主題是汽車產業的挑戰與機會。參訪 ISUZU 藤澤工廠、Atlas Copco、TRUMPF、Bosch Japan、出光興產潤滑油研究所，以及千葉大學次世代移動動力源研究中心。", "期末和組員用英文發表〈What drives innovation in the Japanese and German automotive industry?〉，我負責汽車產業過去的創新驅動因素。第一天也用英文向日德師生介紹台灣的廟宇文化與擲筊。"],
            en: ["Students from Chiba University, HTW Dresden and my university worked in mixed teams on the challenges and opportunities facing the automotive industry. We visited ISUZU's Fujisawa plant, Atlas Copco, TRUMPF, Bosch Japan, Idemitsu's lubricants laboratory and Chiba University's next-generation mobility power research center.", "Our team's final English presentation asked “What drives innovation in the Japanese and German automotive industry?”; I covered the drivers of past innovations. On the first day I also presented Taiwanese temple culture to the Japanese and German students."]
        },
        items: [
            ["chiba-0", "photo", { zh: "文化簡報，本組介紹台灣廟宇文化", en: "Our cultural presentation on Taiwanese temples" }],
            ["chiba-1", "photo", { zh: "Workshop 跨國分組討論", en: "Workshop with the international team" }],
            ["chiba-2", "photo", { zh: "Bosch Japan 橫濱總部參訪", en: "Bosch Japan headquarters, Yokohama" }],
            ["chiba-3", "photo", { zh: "次世代移動動力源研究中心參訪", en: "Next-generation mobility power research center" }],
            ["chiba-4", "photo", { zh: "分組成果發表", en: "Final team presentation" }],
            ["chiba-5", "photo", { zh: "領取 GSP 參加證明書", en: "Receiving the GSP certificate" }]
        ]
    },
    intern: {
        title: { zh: "正裕科技工程股份有限公司，機電工程實習", en: "Cheng Yu Technology Engineering Co., Ltd., M&E engineering intern" },
        meta: { zh: "2026.01.12 – 02.13，廠辦大樓新建工程", en: "12 Jan – 13 Feb 2026, new office and factory building" },
        body: {
            zh: ["判讀 1–4 樓配電圖與 1–3 樓照明電氣平面圖，帶施工圖到現場，依查驗板項目確認電力、弱電線架與消防管線的位置、高程、尺寸與吊架間距，並填寫查驗紀錄。高處作業時依規範穿戴安全帽、背心與安全帶。", "實習以協助查驗與紀錄為主，還沒有參與設計；它讓我開始在設計時考慮東西最後要怎麼被安裝和量測。"],
            en: ["I read power distribution drawings for floors 1–4 and lighting plans for floors 1–3, took them on site, checked the position, elevation, size and hanger spacing of power and low-voltage cable trays and fire-protection piping against the inspection board, and filled in the records. Work at height followed the site's safety rules.", "The internship was inspection and record-keeping, not design, but it made me think about how a design will be installed and measured."]
        },
        items: [
            ["intern-0", "photo", { zh: "依查驗板項目確認消防管線尺寸、高程與位置", en: "Checking fire-protection piping against the inspection board" }],
            ["intern-1", "photo", { zh: "電力線架施工查驗", en: "Inspecting power cable trays" }],
            ["intern-3", "photo", { zh: "高處作業區查驗", en: "Inspection in a work-at-height area" }],
            ["intern-5", "photo", { zh: "AutoCAD 施工圖判讀", en: "Reading AutoCAD construction drawings" }],
            ["intern-6", "photo", { zh: "配電盤與電氣元件", en: "Distribution panel and components" }]
        ]
    },
    wind: {
        title: { zh: "台電風力發電機虛實整合與 AR 維修輔助平台", en: "Taipower Wind Turbine AR Maintenance Platform" },
        meta: { zh: "產學合作，負責 3D CAD 建模", en: "Industry–academia project; 3D CAD modeling" },
        body: {
            zh: ["依風機工程圖與剖視圖，用 SOLIDWORKS 重建機艙內部零組件並完成組立，轉成 FBX 後由團隊導入 Unity／AR。我也協助程式功能測試、開發環境建置與 AR 智慧眼鏡體驗測試；整套 AR、PLC 與資料庫系統由團隊完成，不是我獨立完成。"],
            en: ["From the turbine's engineering and section drawings I rebuilt the nacelle's internal components in SOLIDWORKS and assembled them, then exported FBX files for the team to bring into Unity/AR. I also helped with program testing, environment setup and AR smart-glasses testing. The AR, PLC and database system was a team effort, not mine alone."]
        },
        items: [
            ["wind-0", "fig", { zh: "完整 3D CAD 組立模型：機艙內部機構與零組件配置", en: "Full 3D CAD assembly of the nacelle interior" }],
            ["wind-1", "fig", { zh: "內部結構建模與剖視", en: "Internal structure, section view" }],
            ["wind-4", "fig", { zh: "機艙、輪轂與內部設備配置", en: "Nacelle, hub and equipment layout" }],
            ["wind-ar", "photo", { zh: "AR 智慧眼鏡體驗測試", en: "Testing with AR smart glasses" }]
        ]
    },
    sign: {
        title: { zh: "國科會 AI 即時手語辨識計畫", en: "NSTC AI Real-Time Sign-Language Recognition" },
        meta: { zh: "計畫協作：Python 程式與資料採樣", en: "Project contributor: Python code and data collection" },
        body: {
            zh: ["蒐集整理公開手語影片，裁除準備與結束動作並轉成影像序列；用 Python、OpenCV 與 MediaPipe 寫即時影像程式，把 Pose 33 點與雙手 42 點共 75 個關鍵點的 X、Y、Z 座標整理成辨識模型可用的資料。模型端（LSTM 等）由團隊負責。"],
            en: ["I collected public sign-language videos, trimmed them into image sequences, and wrote real-time Python/OpenCV/MediaPipe code that turns 75 keypoints (33 pose, 42 hand) into X, Y, Z coordinates for the recognition model. The model itself (LSTM and others) was the team's work."]
        },
        items: [
            ["sign-0", "fig", { zh: "即時臉部網格、雙手關鍵點與姿態辨識", en: "Real-time face mesh, hand keypoints and pose" }],
            ["sign-1", "fig", { zh: "程式整合畫面", en: "The integrated program" }],
            ["sign-2", "fig", { zh: "辨識輸出：「謝謝」", en: "Recognized: “thank you”" }],
            ["sign-3", "fig", { zh: "辨識輸出：「你」", en: "Recognized: “you”" }]
        ]
    },
    cnc: {
        title: { zh: "精密模具設計與加工", en: "Precision Mold Design and Machining" },
        meta: { zh: "選修課，4 人小組", en: "Elective course, team of 4" },
        body: {
            zh: ["用同一支 hyperMILL 3D 輪廓投影路徑做三次參數實驗，調整主軸轉速與進給率後，加工時間從 982 秒降到 305 秒（−69%），能耗從 59 Wh 降到 17 Wh（−70%），平均 Ra 降低約 41%。", "我另外寫了一個 CNC 連線程式（C#），即時讀取主軸負載、轉速、進給率和機台正在執行的 G-code 行號。"],
            en: ["Three trials on the same hyperMILL 3D projection toolpath. Tuning spindle speed and feed rate cut machining time from 982 to 305 s (−69%), energy from 59 to 17 Wh (−70%), and mean Ra by about 41%.", "I also wrote a CNC connectivity program in C# that reads spindle load, speed, feed rate and the active G-code line in real time."]
        },
        items: [
            ["cnc-summary", "doc", { zh: "總結：加工時間、能耗與表面粗糙度", en: "Summary: time, energy and surface roughness" }],
            ["cnc-table", "doc", { zh: "三次實驗報表", en: "Results of the three trials" }],
            ["cnc-toolpath", "fig", { zh: "hyperMILL 刀具路徑", en: "hyperMILL toolpath" }],
            ["cnc-machine", "photo", { zh: "加工中心與工件", en: "Machining center and workpiece" }],
            ["cnc-part", "photo", { zh: "加工完成的工件", en: "Finished part" }],
            ["cnc-energy", "photo", { zh: "控制器能耗量測", en: "Energy reading on the controller" }]
        ]
    },
    usr: {
        title: { zh: "USR 馬力埔動畫《馬力埔的古往今來》", en: "USR Animation: Malipu, Past and Present" },
        meta: { zh: "第四屆 USR 學生成果分享競賽，指導老師：謝翠玲", en: "4th USR Student Showcase Competition" },
        body: {
            zh: ["以生成式 AI 串聯 1913 年馬力埔歷史、新社香菇產業、農村再造與永續未來。我負責分鏡規劃、中英文 Prompt 與 Negative Prompt 設計；為了避免年代錯置，我們把場景分成歷史、現代、未來三套規則。"],
            en: ["A generative-AI story linking Malipu's 1913 history, Xinshe's shiitake industry, rural renewal and a sustainable future. I planned the storyboard and wrote the Chinese/English prompts and negative prompts; we set separate rules for historical, present-day and future scenes to keep the eras consistent."]
        },
        items: [
            ["usr-3", "cert", { zh: "參賽證明", en: "Certificate of participation" }],
            ["usr-0", "photo", { zh: "競賽成果發表現場", en: "Presenting at the competition" }],
            ["usr-4", "photo", { zh: "與指導老師及團隊合照", en: "With our advisor and team" }],
            ["usr-1", "doc", { zh: "簡報：五段式故事架構", en: "Slide: the five-part story" }]
        ]
    },
    ccu: {
        title: { zh: "國立中正大學｜綠色工具機實作應用", en: "National Chung Cheng University | Green Machine Tool Practical Applications" },
        meta: { zh: "2024 暑修，3 學分", en: "Summer 2024, 3 credits" },
        body: {
            zh: ["從 NX CAM、Mastercam 規劃刀具路徑、跑加工模擬與參數設定，到操作 YCM CNC 加工中心完成具 CCU 圖樣的實體工件。課程期間也以勤益參與學生身分接受現場採訪。"],
            en: ["From toolpath planning, simulation and parameter setup in NX CAM and Mastercam to machining a part with the CCU logo on a YCM CNC machining center. I was also interviewed on site as a visiting student."]
        },
        items: [
            ["ccu-0", "photo", { zh: "YCM NMV 76A CNC 加工設備", en: "YCM NMV 76A CNC machining center" }],
            ["ccu-2", "fig", { zh: "CAD/CAM 建模與刀具路徑規劃", en: "CAD/CAM modeling and toolpath planning" }],
            ["ccu-4", "photo", { zh: "CNC 實機操作與加工確認", en: "Operating the CNC machine" }],
            ["ccu-5", "photo", { zh: "成品加工與結果驗證", en: "Finished part" }],
            ["ccu-9", "photo", { zh: "跨校交流與採訪", en: "On-site interview" }]
        ]
    },
    nchu: {
        title: { zh: "國立中興大學｜半導體製造技術、半導體元件物理", en: "National Chung Hsing University | Semiconductor Manufacturing Technology; Physics of Semiconductor Devices" },
        meta: { zh: "2025 暑修", en: "Summer 2025" },
        body: {
            zh: ["製程端學到薄膜沉積、熱製程、離子佈植、蝕刻、CMP 與材料分析，元件端學到能帶、載子傳輸、p-n 接面、BJT、MOS 電容與 MOSFET。"],
            en: ["Processes: deposition, thermal processing, ion implantation, etching, CMP and materials analysis. Devices: band structure, carrier transport, p-n junctions, BJTs, MOS capacitors and MOSFETs."]
        },
        items: [
            ["nchu-0", "photo", { zh: "課堂講解與晶體材料展示", en: "Lecture with crystal samples" }],
            ["nchu-3", "photo", { zh: "化學蝕刻示範與晶圓樣品觀察", en: "Chemical etching demonstration and wafer samples" }],
            ["nchu-5", "photo", { zh: "半導體元件物理手寫演算", en: "Device-physics calculations by hand" }]
        ]
    },
    cswp: {
        title: { zh: "CSWP 認證", en: "CSWP certification" },
        meta: { zh: "Certified SOLIDWORKS Professional，Mechanical Design，2024 年 2 月", en: "Certified SOLIDWORKS Professional, Mechanical Design, February 2024" },
        items: [["cswp", "cert", { zh: "Dassault Systèmes 證書", en: "Dassault Systèmes certificate" }]]
    },
    ipas: {
        title: { zh: "iPAS AI 應用規劃師（初級）", en: "iPAS AI Application Planner (Associate)" },
        meta: { zh: "經濟部產業人才能力鑑定，2026 年 10 月", en: "Ministry of Economic Affairs assessment, October 2026" },
        items: [["ipas", "cert", { zh: "能力鑑定證書（身分證號與生日已遮蔽）", en: "Certificate (ID number and birth date hidden)" }]]
    },
    tqc: {
        title: { zh: "電腦軟體應用 丙級技術士", en: "Computer Software Application, Level C Technician" },
        meta: { zh: "勞動部，2024 年 8 月", en: "Ministry of Labor, August 2024" },
        items: [["tqc", "cert", { zh: "技術士證（身分證號、生日與證號已遮蔽）", en: "License (ID number, birth date and license number hidden)" }]]
    },
    vestas: {
        title: { zh: "Vestas 風機課程", en: "Vestas wind turbine courses" },
        meta: { zh: "Wind Turbine Introduction（2025 年 4 月）、Converter（2025 年 5 月）", en: "Wind Turbine Introduction (April 2025), Converter (May 2025)" },
        items: [
            ["vestas-wt", "cert", { zh: "Wind Turbine Introduction 結業證書", en: "Wind Turbine Introduction certificate" }],
            ["vestas-conv", "cert", { zh: "Converter（變流器）結業證書", en: "Converter certificate" }]
        ]
    },
    tairoa: {
        title: { zh: "TAIROA 工業機器人工作坊", en: "TAIROA Industrial Robot Workshop" },
        meta: { zh: "2024 年 7 月，14 小時", en: "July 2024, 14 hours" },
        body: { zh: ["HIWIN 六軸機械手臂的 I/O 配線與教導程式。"], en: ["I/O wiring and teach programming on a HIWIN six-axis robot arm."] },
        items: [
            ["tairoa-cert", "cert", { zh: "培訓證書（身分證號已遮蔽）", en: "Certificate (ID number hidden)" }],
            ["tairoa-arm", "photo", { zh: "機械手臂工作站", en: "Robot arm workstation" }],
            ["tairoa-wiring", "photo", { zh: "I/O 配線盤", en: "I/O wiring panel" }]
        ]
    },
    cadre: {
        title: { zh: "班級幹部", en: "Class officer" },
        meta: { zh: "班長、副班長（三學期）、畢委會班委代表、資訊股長", en: "Class leader, vice class leader (three semesters), graduation committee representative, IT officer" },
        items: [["cadre", "cert", { zh: "擔任幹部證明（學號已遮蔽）", en: "Certificate of class offices (student ID hidden)" }]]
    },
    skate: {
        title: { zh: "滑板社 器材幹部", en: "Skateboarding Club equipment officer" },
        meta: { zh: "114 學年度", en: "2025–26" },
        items: [
            ["skate-cert", "cert", { zh: "幹部證明書（學號已遮蔽）", en: "Certificate (student ID hidden)" }],
            ["skate-photo", "photo", { zh: "社團活動合照", en: "Club photo" }]
        ]
    },
    ta: {
        title: { zh: "教學助理與校內計畫", en: "Teaching assistant and campus projects" },
        meta: { zh: "電腦輔助機械製圖、程式語言等課程", en: "Computer-Aided Mechanical Drawing, Programming Languages and others" },
        items: [["ta-record", "doc", { zh: "校內計畫與教學助理聘任紀錄", en: "Appointment records for TA and campus project roles" }]]
    },
    office: {
        title: { zh: "系辦工讀", en: "Department office assistant" },
        meta: { zh: "協助四技申請入學面試報到", en: "Helped with check-in for undergraduate admission interviews" },
        items: [
            ["office-0", "photo", { zh: "面試報到", en: "Interview check-in" }],
            ["office-1", "photo", { zh: "面試報到", en: "Interview check-in" }]
        ]
    },
    bls: {
        title: { zh: "志願服務訓練", en: "Volunteer training" },
        meta: { zh: "志工基礎教育訓練 6 小時、基本救命術 8 小時，2024 年 9 月", en: "Volunteer basic training (6 h) and basic life support (8 h), September 2024" },
        items: [
            ["bls-record", "doc", { zh: "志願服務紀錄冊訓練紀錄", en: "Training record in the volunteer service book" }],
            ["bls-photo", "photo", { zh: "基本救命術訓練", en: "Basic life support training" }]
        ]
    }
};
window.EV_SIZE = {"acra-slide":[1600,900],"acra-model":[1100,350],"acra-porosity":[506,350],"acra-angle":[506,352],"acra-badge":[1065,1600],"ilass-cert":[1522,1076],"ilass-venue":[1400,1050],"ilass-slide":[1600,900],"ilass-velocity":[1300,320],"ilass-bars":[1600,666],"hefc25-letter":[1132,1600],"hefc25-model":[1178,598],"hefc25-oh":[459,388],"isme-cert":[1135,1600],"isme-talk":[460,411],"isme-slide":[1600,1200],"isme-model":[700,583],"isme-velocity":[660,572],"isme-temp":[650,562],"csme-cert":[962,1393],"csme-model":[1100,566],"csme-angle":[900,524],"csme-opt":[900,538],"acmt-cert":[1136,1600],"acmt-model":[1100,668],"acmt-porosity":[900,539],"hefc24-award":[1126,1600],"hefc24-photo":[900,677],"hefc24-outlet":[900,533],"hefc24-pressure":[900,758],"cap-poster":[1556,2200],"cap-award":[1140,1600],"cap-team":[1400,1050],"cap-booth":[1600,1200],"cap-model":[329,300],"cap-data":[755,490],"cap-web":[1010,783],"cap-bench":[1600,1200],"cap-cell":[1200,1600],"fix-assembly":[1132,768],"fix-drawing":[1600,1132],"chiba-0":[1200,900],"chiba-1":[1200,900],"chiba-2":[1200,900],"chiba-3":[1200,900],"chiba-4":[1200,900],"chiba-5":[1200,900],"intern-0":[1600,900],"intern-1":[1600,1200],"intern-3":[1600,1200],"intern-5":[1536,1152],"intern-6":[1536,1152],"wind-0":[1118,696],"wind-1":[1600,1200],"wind-4":[1280,960],"wind-ar":[1200,1600],"wind-test":[900,1600],"sign-0":[1600,783],"sign-1":[874,579],"sign-2":[853,679],"sign-3":[851,680],"cnc-machine":[1200,1600],"cnc-part":[1200,1600],"cnc-toolpath":[876,736],"cnc-energy":[683,1417],"cnc-table":[1200,675],"cnc-summary":[1200,675],"usr-0":[1477,830],"usr-1":[1600,900],"usr-3":[1112,1600],"usr-4":[1477,830],"ccu-0":[1500,1034],"ccu-2":[1500,1012],"ccu-4":[1152,778],"ccu-5":[1500,1012],"ccu-9":[1444,1147],"nchu-0":[1536,1059],"nchu-3":[1536,1228],"nchu-5":[1536,1228],"cswp":[1259,857],"ipas":[1162,1542],"tqc":[1468,936],"vestas-wt":[1116,1600],"vestas-conv":[1114,1600],"tairoa-cert":[1600,1110],"tairoa-arm":[1200,1600],"tairoa-wiring":[1600,1200],"cadre":[1039,704],"skate-cert":[1086,1572],"skate-photo":[1567,979],"ta-record":[827,1129],"office-0":[960,1280],"office-1":[960,1280],"bls-record":[1170,716],"bls-photo":[901,1600],"acra-outlet":[725,363],"acra-thickness":[505,351]};
