// PHILOS哲学人格测试 - 题目数据库

const questions = {
    "simple": [
        // 简易版测试 - 25题
        {
            id: 1,
            category: "reality",
            question: "世界的本质是固定不变的，还是处于不断变化之中？",
            options: [
                {text: "世界有固定的本质和真理", value: "U"},
                {text: "世界处于永恒的变化之中", value: "V"}
            ]
        },
        {
            id: 2,
            category: "cognition",
            question: "你认为认识世界的主要方式是什么？",
            options: [
                {text: "通过逻辑和推理", value: "R"},
                {text: "通过感受和经验", value: "X"}
            ]
        },
        {
            id: 3,
            category: "ethics",
            question: "判断行为对错的标准应该是什么？",
            options: [
                {text: "行为的结果和影响", value: "G"},
                {text: "行为是否符合道德原则", value: "D"}
            ]
        },
        {
            id: 4,
            category: "society",
            question: "在社会中，个人与集体的关系应该是怎样的？",
            options: [
                {text: "集体利益优先于个人利益", value: "O"},
                {text: "个人自由和差异应该被尊重", value: "M"}
            ]
        },
        {
            id: 5,
            category: "reality",
            question: "你认为真理是绝对的还是相对的？",
            options: [
                {text: "存在绝对的真理", value: "U"},
                {text: "真理是相对的，取决于情境", value: "V"}
            ]
        },
        {
            id: 6,
            category: "cognition",
            question: "在做重要决定时，你更依赖什么？",
            options: [
                {text: "理性分析和逻辑思考", value: "R"},
                {text: "直觉和个人感受", value: "X"}
            ]
        },
        {
            id: 7,
            category: "ethics",
            question: "你认为道德规则应该是怎样的？",
            options: [
                {text: "根据具体情况灵活调整", value: "G"},
                {text: "应该有普遍适用的原则", value: "D"}
            ]
        },
        {
            id: 8,
            category: "society",
            question: "你如何看待社会秩序？",
            options: [
                {text: "秩序和统一很重要", value: "O"},
                {text: "多样性和自由更重要", value: "M"}
            ]
        },
        {
            id: 9,
            category: "reality",
            question: "你认为事物的本质是否可知？",
            options: [
                {text: "通过理性可以认识事物的本质", value: "U"},
                {text: "事物的本质是不断变化的，难以完全认识", value: "V"}
            ]
        },
        {
            id: 10,
            category: "cognition",
            question: "你更相信哪种知识来源？",
            options: [
                {text: "科学和逻辑推理", value: "R"},
                {text: "个人经验和直觉", value: "X"}
            ]
        },
        {
            id: 11,
            category: "ethics",
            question: "在面对道德困境时，你会怎么做？",
            options: [
                {text: "考虑哪种选择能带来最好的结果", value: "G"},
                {text: "遵循道德原则，不管结果如何", value: "D"}
            ]
        },
        {
            id: 12,
            category: "society",
            question: "你认为理想的社会应该是什么样的？",
            options: [
                {text: "和谐统一，共同目标", value: "O"},
                {text: "多元包容，个性自由", value: "M"}
            ]
        },
        {
            id: 13,
            category: "reality",
            question: "你认为变化是表面的还是本质的？",
            options: [
                {text: "变化是表面的，本质不变", value: "U"},
                {text: "变化是本质的，一切都在流动", value: "V"}
            ]
        },
        {
            id: 14,
            category: "cognition",
            question: "你如何看待抽象思维和具体经验？",
            options: [
                {text: "抽象思维更能把握本质", value: "R"},
                {text: "具体经验更真实可靠", value: "X"}
            ]
        },
        {
            id: 15,
            category: "ethics",
            question: "你认为道德价值的来源是什么？",
            options: [
                {text: "行为的后果和效用", value: "G"},
                {text: "内在的道德义务", value: "D"}
            ]
        },
        {
            id: 16,
            category: "society",
            question: "你如何看待社会中的差异和分歧？",
            options: [
                {text: "应该寻求共识和统一", value: "O"},
                {text: "差异是正常且有价值的", value: "M"}
            ]
        },
        {
            id: 17,
            category: "reality",
            question: "你认为宇宙是否有目的和秩序？",
            options: [
                {text: "宇宙有内在的秩序和目的", value: "U"},
                {text: "宇宙是随机和无目的的", value: "V"}
            ]
        },
        {
            id: 18,
            category: "cognition",
            question: "你更重视理论知识还是实践经验？",
            options: [
                {text: "理论知识更基础", value: "R"},
                {text: "实践经验更重要", value: "X"}
            ]
        },
        {
            id: 19,
            category: "ethics",
            question: "你认为道德判断应该基于什么？",
            options: [
                {text: "最大多数人的最大幸福", value: "G"},
                {text: "普遍的道德法则", value: "D"}
            ]
        },
        {
            id: 20,
            category: "society",
            question: "你如何看待个人权利和社会责任？",
            options: [
                {text: "社会责任优先于个人权利", value: "O"},
                {text: "个人权利应该得到保障", value: "M"}
            ]
        },
        {
            id: 21,
            category: "reality",
            question: "你认为本质和现象的关系是怎样的？",
            options: [
                {text: "本质决定现象", value: "U"},
                {text: "现象就是本质，没有固定本质", value: "V"}
            ]
        },
        {
            id: 22,
            category: "cognition",
            question: "你如何看待逻辑和情感在认识中的作用？",
            options: [
                {text: "逻辑是认识的基础", value: "R"},
                {text: "情感和直觉同样重要", value: "X"}
            ]
        },
        {
            id: 23,
            category: "ethics",
            question: "你认为道德是否具有普遍性？",
            options: [
                {text: "道德原则应该普遍适用", value: "D"},
                {text: "道德因文化和情境而异", value: "G"}
            ]
        },
        {
            id: 24,
            category: "society",
            question: "你如何看待传统和创新的关系？",
            options: [
                {text: "传统是社会稳定的基础", value: "O"},
                {text: "创新是社会发展的动力", value: "M"}
            ]
        },
        {
            id: 25,
            category: "reality",
            question: "你认为真理是被发现的还是被创造的？",
            options: [
                {text: "真理是客观存在的，需要被发现", value: "U"},
                {text: "真理是人类创造的，随时代变化", value: "V"}
            ]
        }
    ],
    "complex": [
        // 完整版测试 - 55题
        {
            id: 1,
            category: "reality",
            question: "世界的本质是固定不变的，还是处于不断变化之中？",
            options: [
                {text: "世界有固定的本质和真理", value: "U"},
                {text: "世界处于永恒的变化之中", value: "V"}
            ]
        },
        {
            id: 2,
            category: "cognition",
            question: "你认为认识世界的主要方式是什么？",
            options: [
                {text: "通过逻辑和推理", value: "R"},
                {text: "通过感受和经验", value: "X"}
            ]
        },
        {
            id: 3,
            category: "ethics",
            question: "判断行为对错的标准应该是什么？",
            options: [
                {text: "行为的结果和影响", value: "G"},
                {text: "行为是否符合道德原则", value: "D"}
            ]
        },
        {
            id: 4,
            category: "society",
            question: "在社会中，个人与集体的关系应该是怎样的？",
            options: [
                {text: "集体利益优先于个人利益", value: "O"},
                {text: "个人自由和差异应该被尊重", value: "M"}
            ]
        },
        {
            id: 5,
            category: "reality",
            question: "你认为真理是绝对的还是相对的？",
            options: [
                {text: "存在绝对的真理", value: "U"},
                {text: "真理是相对的，取决于情境", value: "V"}
            ]
        },
        {
            id: 6,
            category: "cognition",
            question: "在做重要决定时，你更依赖什么？",
            options: [
                {text: "理性分析和逻辑思考", value: "R"},
                {text: "直觉和个人感受", value: "X"}
            ]
        },
        {
            id: 7,
            category: "ethics",
            question: "你认为道德规则应该是怎样的？",
            options: [
                {text: "根据具体情况灵活调整", value: "G"},
                {text: "应该有普遍适用的原则", value: "D"}
            ]
        },
        {
            id: 8,
            category: "society",
            question: "你如何看待社会秩序？",
            options: [
                {text: "秩序和统一很重要", value: "O"},
                {text: "多样性和自由更重要", value: "M"}
            ]
        },
        {
            id: 9,
            category: "reality",
            question: "你认为事物的本质是否可知？",
            options: [
                {text: "通过理性可以认识事物的本质", value: "U"},
                {text: "事物的本质是不断变化的，难以完全认识", value: "V"}
            ]
        },
        {
            id: 10,
            category: "cognition",
            question: "你更相信哪种知识来源？",
            options: [
                {text: "科学和逻辑推理", value: "R"},
                {text: "个人经验和直觉", value: "X"}
            ]
        },
        {
            id: 11,
            category: "ethics",
            question: "在面对道德困境时，你会怎么做？",
            options: [
                {text: "考虑哪种选择能带来最好的结果", value: "G"},
                {text: "遵循道德原则，不管结果如何", value: "D"}
            ]
        },
        {
            id: 12,
            category: "society",
            question: "你认为理想的社会应该是什么样的？",
            options: [
                {text: "和谐统一，共同目标", value: "O"},
                {text: "多元包容，个性自由", value: "M"}
            ]
        },
        {
            id: 13,
            category: "reality",
            question: "你认为变化是表面的还是本质的？",
            options: [
                {text: "变化是表面的，本质不变", value: "U"},
                {text: "变化是本质的，一切都在流动", value: "V"}
            ]
        },
        {
            id: 14,
            category: "cognition",
            question: "你如何看待抽象思维和具体经验？",
            options: [
                {text: "抽象思维更能把握本质", value: "R"},
                {text: "具体经验更真实可靠", value: "X"}
            ]
        },
        {
            id: 15,
            category: "ethics",
            question: "你认为道德价值的来源是什么？",
            options: [
                {text: "行为的后果和效用", value: "G"},
                {text: "内在的道德义务", value: "D"}
            ]
        },
        {
            id: 16,
            category: "society",
            question: "你如何看待社会中的差异和分歧？",
            options: [
                {text: "应该寻求共识和统一", value: "O"},
                {text: "差异是正常且有价值的", value: "M"}
            ]
        },
        {
            id: 17,
            category: "reality",
            question: "你认为宇宙是否有目的和秩序？",
            options: [
                {text: "宇宙有内在的秩序和目的", value: "U"},
                {text: "宇宙是随机和无目的的", value: "V"}
            ]
        },
        {
            id: 18,
            category: "cognition",
            question: "你更重视理论知识还是实践经验？",
            options: [
                {text: "理论知识更基础", value: "R"},
                {text: "实践经验更重要", value: "X"}
            ]
        },
        {
            id: 19,
            category: "ethics",
            question: "你认为道德判断应该基于什么？",
            options: [
                {text: "最大多数人的最大幸福", value: "G"},
                {text: "普遍的道德法则", value: "D"}
            ]
        },
        {
            id: 20,
            category: "society",
            question: "你如何看待个人权利和社会责任？",
            options: [
                {text: "社会责任优先于个人权利", value: "O"},
                {text: "个人权利应该得到保障", value: "M"}
            ]
        },
        {
            id: 21,
            category: "reality",
            question: "你认为本质和现象的关系是怎样的？",
            options: [
                {text: "本质决定现象", value: "U"},
                {text: "现象就是本质，没有固定本质", value: "V"}
            ]
        },
        {
            id: 22,
            category: "cognition",
            question: "你如何看待逻辑和情感在认识中的作用？",
            options: [
                {text: "逻辑是认识的基础", value: "R"},
                {text: "情感和直觉同样重要", value: "X"}
            ]
        },
        {
            id: 23,
            category: "ethics",
            question: "你认为道德是否具有普遍性？",
            options: [
                {text: "道德原则应该普遍适用", value: "D"},
                {text: "道德因文化和情境而异", value: "G"}
            ]
        },
        {
            id: 24,
            category: "society",
            question: "你如何看待传统和创新的关系？",
            options: [
                {text: "传统是社会稳定的基础", value: "O"},
                {text: "创新是社会发展的动力", value: "M"}
            ]
        },
        {
            id: 25,
            category: "reality",
            question: "你认为真理是被发现的还是被创造的？",
            options: [
                {text: "真理是客观存在的，需要被发现", value: "U"},
                {text: "真理是人类创造的，随时代变化", value: "V"}
            ]
        },
        {
            id: 26,
            category: "cognition",
            question: "你认为知识的确定性来源于哪里？",
            options: [
                {text: "来源于逻辑和数学的确定性", value: "R"},
                {text: "来源于经验的可靠性", value: "X"}
            ]
        },
        {
            id: 27,
            category: "ethics",
            question: "在面对利益冲突时，你会优先考虑什么？",
            options: [
                {text: "整体的最大利益", value: "G"},
                {text: "道德责任和义务", value: "D"}
            ]
        },
        {
            id: 28,
            category: "society",
            question: "你如何看待社会规则和个人自由的关系？",
            options: [
                {text: "规则是自由的保障", value: "O"},
                {text: "自由应该少受规则限制", value: "M"}
            ]
        },
        {
            id: 29,
            category: "reality",
            question: "你认为世界的存在是否依赖于人的意识？",
            options: [
                {text: "世界独立于人的意识存在", value: "U"},
                {text: "世界的意义依赖于人的意识", value: "V"}
            ]
        },
        {
            id: 30,
            category: "cognition",
            question: "你如何看待科学和哲学的关系？",
            options: [
                {text: "科学是哲学的基础", value: "R"},
                {text: "哲学为科学提供意义", value: "X"}
            ]
        },
        {
            id: 31,
            category: "ethics",
            question: "你认为道德教育的重点应该是什么？",
            options: [
                {text: "培养对后果的责任感", value: "G"},
                {text: "培养对道德原则的尊重", value: "D"}
            ]
        },
        {
            id: 32,
            category: "society",
            question: "你认为社会进步的动力是什么？",
            options: [
                {text: "集体的协作和努力", value: "O"},
                {text: "个人的创造力和自由", value: "M"}
            ]
        },
        {
            id: 33,
            category: "reality",
            question: "你认为时间是线性的还是循环的？",
            options: [
                {text: "时间是线性的，有开始和结束", value: "U"},
                {text: "时间是循环的，不断重复", value: "V"}
            ]
        },
        {
            id: 34,
            category: "cognition",
            question: "你如何看待直觉在决策中的作用？",
            options: [
                {text: "直觉应该被理性分析验证", value: "R"},
                {text: "直觉是宝贵的智慧来源", value: "X"}
            ]
        },
        {
            id: 35,
            category: "ethics",
            question: "你认为动物有道德地位吗？",
            options: [
                {text: "动物的道德地位取决于它们的感受能力", value: "G"},
                {text: "动物有内在的道德价值", value: "D"}
            ]
        },
        {
            id: 36,
            category: "society",
            question: "你如何看待财富分配的公平性？",
            options: [
                {text: "应该追求结果的平等", value: "O"},
                {text: "应该保障机会的平等", value: "M"}
            ]
        },
        {
            id: 37,
            category: "reality",
            question: "你认为宇宙的规律是必然的还是偶然的？",
            options: [
                {text: "宇宙规律是必然的，可被理性认识", value: "U"},
                {text: "宇宙规律是偶然的，可能不同", value: "V"}
            ]
        },
        {
            id: 38,
            category: "cognition",
            question: "你如何看待语言在思维中的作用？",
            options: [
                {text: "语言是思维的工具", value: "R"},
                {text: "语言塑造思维方式", value: "X"}
            ]
        },
        {
            id: 39,
            category: "ethics",
            question: "你认为撒谎在什么情况下是可接受的？",
            options: [
                {text: "当撒谎能避免更大的伤害时", value: "G"},
                {text: "撒谎始终是不道德的", value: "D"}
            ]
        },
        {
            id: 40,
            category: "society",
            question: "你如何看待文化多样性？",
            options: [
                {text: "文化多样性应该被统一的价值观整合", value: "O"},
                {text: "文化多样性本身就是价值", value: "M"}
            ]
        },
        {
            id: 41,
            category: "reality",
            question: "你认为美是客观的还是主观的？",
            options: [
                {text: "美有客观标准", value: "U"},
                {text: "美是主观感受", value: "V"}
            ]
        },
        {
            id: 42,
            category: "cognition",
            question: "你如何看待梦境和现实的关系？",
            options: [
                {text: "梦境是现实的反映", value: "R"},
                {text: "梦境揭示潜意识的真理", value: "X"}
            ]
        },
        {
            id: 43,
            category: "ethics",
            question: "你认为死刑是否道德？",
            options: [
                {text: "死刑是对严重犯罪的合理惩罚", value: "G"},
                {text: "死刑侵犯生命权，不道德", value: "D"}
            ]
        },
        {
            id: 44,
            category: "society",
            question: "你如何看待政府的角色？",
            options: [
                {text: "政府应该积极干预社会", value: "O"},
                {text: "政府应该最小化干预", value: "M"}
            ]
        },
        {
            id: 45,
            category: "reality",
            question: "你认为人类有固定的本性吗？",
            options: [
                {text: "人类有固定的本性", value: "U"},
                {text: "人类本性是社会建构的", value: "V"}
            ]
        },
        {
            id: 46,
            category: "cognition",
            question: "你如何看待神秘体验和宗教信仰？",
            options: [
                {text: "神秘体验需要理性解释", value: "R"},
                {text: "神秘体验是独特的认识方式", value: "X"}
            ]
        },
        {
            id: 47,
            category: "ethics",
            question: "你认为环境保护的道德基础是什么？",
            options: [
                {text: "环境保护有利于人类福祉", value: "G"},
                {text: "自然本身有内在价值", value: "D"}
            ]
        },
        {
            id: 48,
            category: "society",
            question: "你如何看待教育的目的？",
            options: [
                {text: "教育应该培养社会需要的人才", value: "O"},
                {text: "教育应该促进个人的全面发展", value: "M"}
            ]
        },
        {
            id: 49,
            category: "reality",
            question: "你认为自由意志存在吗？",
            options: [
                {text: "人类有自由意志", value: "U"},
                {text: "自由意志是幻觉，受因果决定", value: "V"}
            ]
        },
        {
            id: 50,
            category: "cognition",
            question: "你如何看待历史的意义？",
            options: [
                {text: "历史有客观规律可循", value: "R"},
                {text: "历史的意义取决于我们的解读", value: "X"}
            ]
        },
        {
            id: 51,
            category: "ethics",
            question: "你认为堕胎的道德地位是什么？",
            options: [
                {text: "堕胎的道德性取决于具体情况", value: "G"},
                {text: "堕胎侵犯胎儿生命权", value: "D"}
            ]
        },
        {
            id: 52,
            category: "society",
            question: "你如何看待技术发展对社会的影响？",
            options: [
                {text: "技术应该服务于社会整体利益", value: "O"},
                {text: "技术应该增强个人能力和自由", value: "M"}
            ]
        },
        {
            id: 53,
            category: "reality",
            question: "你认为宇宙是有限的还是无限的？",
            options: [
                {text: "宇宙是有限的，有边界", value: "U"},
                {text: "宇宙是无限的，无边界", value: "V"}
            ]
        },
        {
            id: 54,
            category: "cognition",
            question: "你如何看待数学的本质？",
            options: [
                {text: "数学是客观真理的表达", value: "R"},
                {text: "数学是人类思维的创造", value: "X"}
            ]
        },
        {
            id: 55,
            category: "ethics",
            question: "你认为正义的本质是什么？",
            options: [
                {text: "正义是公平分配的结果", value: "G"},
                {text: "正义是对权利的尊重", value: "D"}
            ]
        }
    ]
};