const additionalQuestions = [ ]; 
const questionDatabase = [
    {
        "id": "1-01",
        "question": "資料庫管理系統的簡稱是下列何項？",
        "options": [
            {
                "label": "DSS",
                "value": "A"
            },
            {
                "label": "DBMS",
                "value": "B"
            },
            {
                "label": "MBA",
                "value": "C"
            },
            {
                "label": "MDBS",
                "value": "D"
            }
        ],
        "answer": [
            "B"
        ],
        "type": "single"
    },
    {
        "id": "1-02",
        "question": "下列何項不是資料庫管理系統的主要功能？",
        "options": [
            {
                "label": "動態復原故障的資料庫",
                "value": "A"
            },
            {
                "label": "降低資料的重複性",
                "value": "B"
            },
            {
                "label": "無法供人同時使用",
                "value": "C"
            },
            {
                "label": "提供並行控制確保資料正確性",
                "value": "D"
            }
        ],
        "answer": [
            "C"
        ],
        "type": "single"
    },
    {
        "id": "1-03",
        "question": "主從式架構系統的構成要件中，包括下列哪三大要件？(複選)",
        "options": [
            {
                "label": "伺服器(Server)",
                "value": "A"
            },
            {
                "label": "網路(Network)",
                "value": "B"
            },
            {
                "label": "用戶(Client)",
                "value": "C"
            },
            {
                "label": "電子信箱(E-mai)",
                "value": "D"
            }
        ],
        "answer": [
            "A", "B", "C"
        ],
        "type": "multiple"
    },
    {
        "id": "1-04",
        "question": "下列有關主從式架構與中央集中式架構差異的敘述，何者正確？(複選)",
        "options": [
            {
                "label": "主從式架構可以針對不同的需要，在網路上安裝各類的伺服器",
                "value": "A"
            },
            {
                "label": "用戶端不再是終端機，而是具有處理能力的個人電腦",
                "value": "B"
            },
            {
                "label": "用戶與伺服器之間，是以共用式的網路連接",
                "value": "C"
            },
            {
                "label": "用戶與用戶之間可以透過網路互動或是作資源共享",
                "value": "D"
            }
        ],
        "answer": [
            "A", "B", "C", "D"
        ],
        "type": "multiple"
    },
    {
        "id": "1-05",
        "question": "在兩層式應用系架構下，用戶端包含下列哪些應用功能？(複選)",
        "options": [
            {
                "label": "使用者介面(User Interface)",
                "value": "A"
            },
            {
                "label": "應用邏輯(Application Logic)",
                "value": "B"
            },
            {
                "label": "營運規則(Bussiness Rules)",
                "value": "C"
            },
            {
                "label": "資料存取(Data Access)",
                "value": "D"
            }
        ],
        "answer": [
            "A","B","C"
        ],
        "type": "multiple"
    },
    {
        "id": "1-06",
        "question": "三層式(Three-tier)應用系統架構主要是改善兩層式應用系統架構系統的缺點，兩者的差別在於將何項功能獨立置於應用伺服器？",
        "options": [
            {
                "label": "使用者介面(User Interface)",
                "value": "A"
            },
            {
                "label": "應用邏輯(Application Logic)",
                "value": "B"
            },
            {
                "label": "管運規則(Bussiness Rules)",
                "value": "C"
            },
            {
                "label": "資料存取(Data Access)",
                "value": "D"
            }
        ],
        "answer": [
            "C"
        ],
        "type": "single"
    },
    {
        "id": "1-07",
        "question": "採用兩層式應用架構有下列哪些缺點需要克服？(複選)",
        "options": [
            {
                "label": "無論伺服器或客戶端，對於硬體設備的要求需要較高等级的配備",
                "value": "A"
            },
            {
                "label": "每一用戶端應用都必須與伺服器連線，當同時上線的使用者很多，會佔用伺服器較多的資源",
                "value": "B"
            },
            {
                "label": "營運規則會隨企業的運作而改變，修改營運規則後，會造成新版本軟體派發的困難",
                "value": "C"
            },
            {
                "label": "營運規則與應用邏輯位於伺服端，加快運算的速度",
                "value": "D"
            }
        ],
        "answer": [
            "B", "C"
        ],
        "type": "multiple"
    },
    {
        "id": "1-08",
        "question": "關聯式資料庫管理系統簡稱為下列何項？",
        "options": [
            {
                "label": "RDSS",
                "value": "A"
            },
            {
                "label": "RDBMS",
                "value": "B"
            },
            {
                "label": "RMBAS",
                "value": "C"
            },
            {
                "label": "RDSM",
                "value": "D"
            }
        ],
        "answer": [
            "B"
        ],
        "type": "single"
    },
    {
        "id": "1-09",
        "question": "目前被普遍使用於關聯式資料庫的標準查詢語言為何？",
        "options": [
            {
                "label": "VB.NET",
                "value": "A"
            },
            {
                "label": "C++",
                "value": "B"
            },
            {
                "label": "JAVA",
                "value": "C"
            },
            {
                "label": "SQL",
                "value": "D"
            }
        ],
        "answer": [
            "D"
        ],
        "type": "single"
    },
    {
        "id": "1-10",
        "question": "有關關聯式資料庫是以哪種結構方式將資料組織起來的？",
        "options": [
            {
                "label": "階層結構",
                "value": "A"
            },
            {
                "label": "網狀結構",
                "value": "B"
            },
            {
                "label": "表格結構",
                "value": "C"
            },
            {
                "label": "星狀結構",
                "value": "D"
            }
        ],
        "answer": [
            "C"
        ],
        "type": "single"
    },
    {
        "id": "1-11",
        "question": "下列哪一種資料庫的資料是分類儲存在許多二維的資料表中，並將資料表與資料表之間以共同欄位建立關聯？",
        "options": [
            {
                "label": "關聯式(Relational)",
                "value": "A"
            },
            {
                "label": "網路式(Network)",
                "value": "B"
            },
            {
                "label": "階層式(Hierarchical)",
                "value": "C"
            },
            {
                "label": "星狀式(Star)",
                "value": "D"
            }
        ],
        "answer": [
            "A"
        ],
        "type": "single"
    },
    {
        "id": "1-12",
        "question": "下列關於關聯式資料庫中資料表架構的敘述，何者有誤？",
        "options": [
            {
                "label": "在資料表中不會有空白的記錄，以及數量不一的欄位",
                "value": "A"
            },
            {
                "label": "在資料表中，每一列的資料不會有重複的情況出現",
                "value": "B"
            },
            {
                "label": "在資料表中，每一列的排序順序並沒有固定,而且可以改變排列順序",
                "value": "C"
            },
            {
                "label": "每一資料庫僅由一個資料表組成",
                "value": "D"
            }
        ],
        "answer": [
            "D"
        ],
        "type": "single"
    },
    {
        "id": "1-13",
        "question": "下列何者不是主鍵的特性？",
        "options": [
            {
                "label": "欄位中的每一個值都具有唯一性",
                "value": "A"
            },
            {
                "label": "在意義上要有代表性，不可為虛值(null value)",
                "value": "B"
            },
            {
                "label": "一個主鍵最多包含20個欄位",
                "value": "C"
            },
            {
                "label": "具有一般索引的功能",
                "value": "D"
            }
        ],
        "answer": [
            "C"
        ],
        "type": "single"
    },
    {
        "id": "1-14",
        "question": "下列資料庫應用軟體，哪些是屬於關聯式資料管理系統？(複選)",
        "options": [
            {
                "label": "MySQL",
                "value": "A"
            },
            {
                "label": "Access",
                "value": "B"
            },
            {
                "label": "Oracle",
                "value": "C"
            },
            {
                "label": "SQL Server",
                "value": "D"
            }
        ],
        "answer": [
            "A", "B", "C", "D"
        ],
        "type": "multiple"
    },
    {
        "id": "1-15",
        "question": "在關聯式資料庫中，資料表與資料表之間的連接需透過鍵(Key)來完成，下列有關鍵(Key)的敘述中，何者錯誤？",
        "options": [
            {
                "label": "資料庫中任一欄位均可視為主鍵(Primary Key)",
                "value": "A"
            },
            {
                "label": "在資料庫中,所有可以作為主鍵的欄位均可稱為候選鍵(Candidate Key)",
                "value": "B"
            },
            {
                "label": "候選鍵沒被選為主鍵者，稱為候補鍵(Alternate Key)",
                "value": "C"
            },
            {
                "label": "外部鍵(Foreign Key)指的是可以用來指向其他資料表内主鍵的欄位",
                "value": "D"
            }
        ],
        "answer": [
            "A"
        ],
        "type": "single"
    },
    {
        "id": "1-16",
        "question": "關於鍵值的說明，下列敘述何者有誤？",
        "options": [
            {
                "label": "鍵的作用是用來連結資料表與資料表",
                "value": "A"
            },
            {
                "label": "資料表中可以作為辨別每筆記錄的依據欄位為主鍵",
                "value": "B"
            },
            {
                "label": "資料庫中可作為主鍵的欄位稱為候補鍵",
                "value": "C"
            },
            {
                "label": "候補鍵可以用來指向其他資料表内的主鍵",
                "value": "D"
            }
        ],
        "answer": [
            "D"
        ],
        "type": "single"
    },
    {
        "id": "1-17",
        "question": "下關於關聯式資料庫的敘述，何者不正確？",
        "options": [
            {
                "label": "資料的儲存以表格為基礎",
                "value": "A"
            },
            {
                "label": "表格内的資料必須依欄位順序排列",
                "value": "B"
            },
            {
                "label": "表格内的資料不可以重複",
                "value": "C"
            },
            {
                "label": "表格内的欄位代表資料的屬性",
                "value": "D"
            }
        ],
        "answer": [
            "C"
        ],
        "type": "single"
    },
    {
        "id": "1-18",
        "question": "下列敘逃何者不正確？",
        "options": [
            {
                "label": "關聯式資料庫資料表格的主鍵值不可以是空值",
                "value": "A"
            },
            {
                "label": "資料庫是一套管理大量資料的系統軟體",
                "value": "B"
            },
            {
                "label": "未經正視化的資料庫也可以避免資料的重複",
                "value": "C"
            },
            {
                "label": "Update 是結構化查詢語言(SQL)的指令之一",
                "value": "D"
            }
        ],
        "answer": [
            "C"
        ],
        "type": "single"
    },
    {
        "id": "1-19",
        "question": "在關聯式資料庫中，下列敘述何者正確？(複選)",
        "options": [
            {
                "label": "記錄就是資料儲存的單位，即是一般所看到的一列",
                "value": "A"
            },
            {
                "label": "在資料表中可分成數個欄位，每個欄位相關的值組成一筆記錄",
                "value": "B"
            },
            {
                "label": "同性質的記錄集合成為一個資料表",
                "value": "C"
            },
            {
                "label": "一個或數個相關的資料表就組成一個資料庫",
                "value": "D"
            }
        ],
        "answer": [
            "A","B","C","D"
        ],
        "type": "multiple"
    },
    {
        "id": "1-20",
        "question": "關聯式資料庫中，資料表與資料表之間是透過下列何者來完成連結？",
        "options": [
            {
                "label": "超連結(Hyperlink)",
                "value": "A"
            },
            {
                "label": "鍵(Key)",
                "value": "B"
            },
            {
                "label": "光纖",
                "value": "C"
            },
            {
                "label": "網路",
                "value": "D"
            }
        ],
        "answer": [
            "B"
        ],
        "type": "single"
    },
    {
        "id": "1-21",
        "question": "在邏輯的觀念上，關聯式資料庫的組成由小而大順序，下列哪一項是正確的？",
        "options": [
            {
                "label": "值 → 欄 → 資料表 → 資料庫",
                "value": "A"
            },
            {
                "label": "記錄 → 欄 → 資料表 → 資料庫",
                "value": "B"
            },
            {
                "label": "值 → 記錄 → 欄 → 資料庫",
                "value": "C"
            },
            {
                "label": "值 → 記錄 → 資料表 → 資料庫",
                "value": "D"
            }
        ],
        "answer": [
            "D"
        ],
        "type": "single"
    },
    {
        "id": "1-22",
        "question": "關聯式資料庫中所謂的「記錄」，其意涵和下列何者相同？",
        "options": [
            {
                "label": "欄位",
                "value": "A"
            },
            {
                "label": "列",
                "value": "B"
            },
            {
                "label": "值",
                "value": "C"
            },
            {
                "label": "欄位名稱",
                "value": "D"
            }
        ],
        "answer": [
            "B"
        ],
        "type": "single"
    },
    {
        "id": "1-23",
        "question": "某公司人事資料表中，哪一個欄位最適合做為主键(Primary Key)？",
        "options": [
            {
                "label": "職號",
                "value": "A"
            },
            {
                "label": "單位",
                "value": "B"
            },
            {
                "label": "職稱",
                "value": "C"
            },
            {
                "label": "分機號碼",
                "value": "D"
            }
        ],
        "answer": [
            "A"
        ],
        "type": "single"
    },
    {
        "id": "1-24",
        "question": "下列有關關聯式資料庫的資料表中，主鍵(Primary Key)的敘述何者錯誤？",
        "options": [
            {
                "label": "不可為空值(Null)",
                "value": "A"
            },
            {
                "label": "該值不可有重複",
                "value": "B"
            },
            {
                "label": "一個資料表中只能有一組主鍵",
                "value": "C"
            },
            {
                "label": "該值的資料類型不可為日期",
                "value": "D"
            }
        ],
        "answer": [
            "D"
        ],
        "type": "single"
    },
    {
        "id": "1-25",
        "question": "所有符合主鍵條件的鍵，稱為下列何項？",
        "options": [
            {
                "label": "Composite Key",
                "value": "A"
            },
            {
                "label": "Foreign Key",
                "value": "B"
            },
            {
                "label": "Alternate Key",
                "value": "C"
            },
            {
                "label": "Candidate Key",
                "value": "D"
            }
        ],
        "answer": [
            "D"
        ],
        "type": "single"
    },
    {
        "id": "1-26",
        "question": "下列關聯式資料庫的敘述，何項是正確的？",
        "options": [
            {
                "label": "一個資料表(table)是由許多欄位組成的",
                "value": "A"
            },
            {
                "label": "需依照主鍵欄位内容排序來儲存資料",
                "value": "B"
            },
            {
                "label": "不需依照欄位内容排序來儲存資料",
                "value": "C"
            },
            {
                "label": "主鍵欄位内容值可重複",
                "value": "D"
            }
        ],
        "answer": [
            "C"
        ],
        "type": "single"
    },
    {
        "id": "1-27",
        "question": "關聯式資料庫如何產生關聯？",
        "options": [
            {
                "label": "使用兩個資料表的共通欄位相互關聯",
                "value": "A"
            },
            {
                "label": "使用資料庫的樹狀結構建立關聯",
                "value": "B"
            },
            {
                "label": "使用特殊的檔名來建立關聯",
                "value": "C"
            },
            {
                "label": "使用物件導向的觀念來建立關聯",
                "value": "D"
            }
        ],
        "answer": [
            "A"
        ],
        "type": "single"
    },
    {
        "id": "1-28",
        "question": "在資料表中設定何種屬性，可以做為唯一識別該筆記錄的依據？",
        "options": [
            {
                "label": "主鍵",
                "value": "A"
            },
            {
                "label": "連外鍵",
                "value": "B"
            },
            {
                "label": "關聯鍵",
                "value": "C"
            },
            {
                "label": "連結鍵",
                "value": "D"
            }
        ],
        "answer": [
            "A"
        ],
        "type": "single"
    },
    {
        "id": "1-29",
        "question": "在資料庫的規劃中，能將資料的重複性减至最小的過程稱為？",
        "options": [
            {
                "label": "正規化",
                "value": "A"
            },
            {
                "label": "結構化",
                "value": "B"
            },
            {
                "label": "階層化",
                "value": "C"
            },
            {
                "label": "模組化",
                "value": "D"
            }
        ],
        "answer": [
            "A"
        ],
        "type": "single"
    },
    {
        "id": "1-30",
        "question": "資料庫設計中，正規化的目的為何？",
        "options": [
            {
                "label": "降低資料重複",
                "value": "A"
            },
            {
                "label": "减少資料的錯誤",
                "value": "B"
            },
            {
                "label": "提高存取速度",
                "value": "C"
            },
            {
                "label": "節省資料處理時間",
                "value": "D"
            }
        ],
        "answer": [
            "A"
        ],
        "type": "single"
    },
    {
        "id": "1-31",
        "question": "關於關聯式資料庫資料表格的正規化(Normalization)，下列敘述何者不正確？",
        "options": [
            {
                "label": "正規化會減少資料表格的個數",
                "value": "A"
            },
            {
                "label": "正規化可以减少資料的重複性",
                "value": "B"
            },
            {
                "label": "正規化可以降低資料不一致或錯誤的情況發生",
                "value": "C"
            },
            {
                "label": "第三正規型式刪除遞移依賴性(transitive dependency)",
                "value": "D"
            }
        ],
        "answer": [
            "A"
        ],
        "type": "single"
    },
    {
        "id": "1-32",
        "question": "可以消除表格部份依賴關係的是下列哪個正規化？",
        "options": [
            {
                "label": "第一正規化",
                "value": "A"
            },
            {
                "label": "第二正規化",
                "value": "B"
            },
            {
                "label": "第三正規化",
                "value": "C"
            },
            {
                "label": "第四正規化",
                "value": "D"
            }
        ],
        "answer": [
            "B"
        ],
        "type": "single"
    },
    {
        "id": "1-33",
        "question": "消除重複性資料是在哪個正規化階段完成？",
        "options": [
            {
                "label": "1NF",
                "value": "A"
            },
            {
                "label": "2NF",
                "value": "B"
            },
            {
                "label": "3NF",
                "value": "C"
            },
            {
                "label": "BCNF",
                "value": "D"
            }
        ],
        "answer": [
            "A"
        ],
        "type": "single"
    },
    {
        "id": "1-34",
        "question": "完成第一正規化的表格最重要的是能滿足哪項條件？",
        "options": [
            {
                "label": "每個欄位只能含有一個值",
                "value": "A"
            },
            {
                "label": "非主鍵的欄位對主鍵有完全地功能性相依(Fully Functional Dependency)關係",
                "value": "B"
            },
            {
                "label": "非主鍵的欄位之間沒有「完全地功能性相依」關係",
                "value": "C"
            },
            {
                "label": "除去任何因功能相依所造成的異常結果",
                "value": "D"
            }
        ],
        "answer": [
            "A"
        ],
        "type": "single"
    },
    {
        "id": "1-35",
        "question": "下列何者是第一正規化過程中對資料庫處理的步驟？",
        "options": [
            {
                "label": "去除重複資料",
                "value": "A"
            },
            {
                "label": "消除部份功能相依",
                "value": "B"
            },
            {
                "label": "消除遞移相依",
                "value": "C"
            },
            {
                "label": "消除功能相關產生的問題",
                "value": "D"
            }
        ],
        "answer": [
            "A"
        ],
        "type": "single"
    },
    {
        "id": "1-36",
        "question": "「在資料表中欄與列的交會只會存放單一筆資料」可以滿足哪一階段的正規化型式？",
        "options": [
            {
                "label": "1NF",
                "value": "A"
            },
            {
                "label": "2NF",
                "value": "B"
            },
            {
                "label": "3NF",
                "value": "C"
            },
            {
                "label": "BCNF",
                "value": "D"
            }
        ],
        "answer": [
            "A"
        ],
        "type": "single"
    },
    {
        "id": "1-37",
        "question": "滿足所有非主鍵的欄位，必須只能由主鍵來做唯一識別的資料表是哪一階段的正規化型式？",
        "options": [
            {
                "label": "1NF",
                "value": "A"
            },
            {
                "label": "2NF",
                "value": "B"
            },
            {
                "label": "3NF",
                "value": "C"
            },
            {
                "label": "BCNF",
                "value": "D"
            }
        ],
        "answer": [
            "B"
        ],
        "type": "single"
    },
    {
        "id": "1-38",
        "question": "關聯式資料庫設計正規化包括下列哪些答案？(複選)",
        "options": [
            {
                "label": "1NF",
                "value": "A"
            },
            {
                "label": "2NF",
                "value": "B"
            },
            {
                "label": "3NF",
                "value": "C"
            },
            {
                "label": "BCNF",
                "value": "D"
            }
        ],
        "answer": [
            "A", "B", "C", "D"
        ],
        "type": "multiple"
    },
    {
        "id": "1-39",
        "question": "對於關聯式資料庫中，下列有關正規化的敘述，何者是正確的？",
        "options": [
            {
                "label": "第一正規化允許有多重值屬性",
                "value": "A"
            },
            {
                "label": "一個關聯表符合 2NF 必須其每個非主鍵欄位均關聯於所有主鍵欄位",
                "value": "B"
            },
            {
                "label": "BCNF 對每一功能相依，其左邊必定為主鍵",
                "value": "C"
            },
            {
                "label": "資料表内所有非候選鍵屬性均完全功能性相依於主鍵的限制，稱於 BCNF",
                "value": "D"
            }
        ],
        "answer": [
            "B"
        ],
        "type": "single"
    },
    {
        "id": "1-40",
        "question": "在正規化的過程中，資料表加入主鍵欄位是屬於哪一個階段？",
        "options": [
            {
                "label": "1NF",
                "value": "A"
            },
            {
                "label": "2NF",
                "value": "B"
            },
            {
                "label": "3NF",
                "value": "C"
            },
            {
                "label": "BCNF",
                "value": "D"
            }
        ],
        "answer": [
            "A"
        ],
        "type": "single"
    },
    {
        "id": "2-01",
        "question": "下列哪一個資料庫管理系統是可以免費使用的？",
        "options": [
            {
                "label": "Microsoft Access 2003",
                "value": "A"
            },
            {
                "label": "SQL Server 2000",
                "value": "B"
            },
            {
                "label": "MySQL 5",
                "value": "C"
            },
            {
                "label": "Oracle",
                "value": "D"
            }
        ],
        "answer": [
            "C"
        ],
        "type": "single"
    },
    {
        "id": "2-02",
        "question": "有關 MySQL 的敘述，下列何者錯誤？",
        "options": [
            {
                "label": "可以在許多平台上執行，包括 Linux、Windows",
                "value": "A"
            },
            {
                "label": "簡單易學、彈性大、執行速度快是 MySQL 的優點",
                "value": "B"
            },
            {
                "label": "使用者可以隨時檢查 MySQL 原始檔或修正些錯誤",
                "value": "C"
            },
            {
                "label": "MySQL 只能在預設的 DOS 模式下使用",
                "value": "D"
            }
        ],
        "answer": [
            "D"
        ],
        "type": "single"
    },
    {
        "id": "2-03",
        "question": "可以執行 MySQL 的作業平台，包括哪些作業平台？(複選)",
        "options": [
            {
                "label": "Windows",
                "value": "A"
            },
            {
                "label": "Unix",
                "value": "B"
            },
            {
                "label": "Linux",
                "value": "C"
            },
            {
                "label": "Google",
                "value": "D"
            }
        ],
        "answer": [
            "A", "B", "C"
        ],
        "type": "multiple"
    },
    {
        "id": "2-04",
        "question": "安裝 MySQL 5，預設使用者帳號為何？",
        "options": [
            {
                "label": "localhost",
                "value": "A"
            },
            {
                "label": "Administrator",
                "value": "B"
            },
            {
                "label": "root",
                "value": "C"
            },
            {
                "label": "空白",
                "value": "D"
            }
        ],
        "answer": [
            "C"
        ],
        "type": "single"
    },
    {
        "id": "2-05",
        "question": "MySQL 5預設的通訊埠為何？",
        "options": [
            {
                "label": "8080",
                "value": "A"
            },
            {
                "label": "3306",
                "value": "B"
            },
            {
                "label": "1433",
                "value": "C"
            },
            {
                "label": "5050",
                "value": "D"
            }
        ],
        "answer": [
            "B"
        ],
        "type": "single"
    },
    {
        "id": "2-06",
        "question": "下列何者敘述錯誤？",
        "options": [
            {
                "label": "MySQL 是一個資料庫軟體",
                "value": "A"
            },
            {
                "label": "MySQL Query Browser 是 MySQL 5 視覺化資料庫維護及管理程式",
                "value": "B"
            },
            {
                "label": "MySQL 是開放式的原始碼，只能安裝在 Linux 平台，不能應用於 Windows",
                "value": "C"
            },
            {
                "label": "MySQL Administrator 只要是個人使用，不使用在商業用途上，都可以從 MySQL 網站上免費下載使用",
                "value": "D"
            }
        ],
        "answer": [
            "C"
        ],
        "type": "single"
    },
    {
        "id": "2-08",
        "question": "使用 MySQL Query Browser 的敘述，下列哪一項有誤？",
        "options": [
            {
                "label": "下載使用 MySQL Query Browser，可以在視窗介面中輕易的管理資料庫",
                "value": "A"
            },
            {
                "label": "同時安裝 MySQL Administrator 及 MySQL Query Browser 時, MySQL 5 會結合兩者來管理資料庫，使用者可直接由 Mysql Administrator 進入 MySQL Query Browser 進行資料庫管理操作",
                "value": "B"
            },
            {
                "label": "除 MySQL 5 預設的資料庫外，滑鼠在 Schemata 視窗空白處按右鍵，選擇執行 Create New Schema 選項可以新增一資料庫",
                "value": "C"
            },
            {
                "label": "建立資料表時對資料表的資料型態選擇必須謹慎，一旦設錯欄位屬性，便不能再修改",
                "value": "D"
            }
        ],
        "answer": [
            "D"
        ],
        "type": "single"
    },
    {
        "id": "2-09",
        "question": "安裝 MySQL 5時，如果系統上有另一版本的 MySQL，則需先以下列哪一個命令來讓伺服器停止？",
        "options": [
            {
                "label": "stop();",
                "value": "A"
            },
            {
                "label": "mysqladmin -u root -p shutdown",
                "value": "B"
            },
            {
                "label": "mysqld -remove root",
                "value": "C"
            },
            {
                "label": "mysql -stop server",
                "value": "D"
            }
        ],
        "answer": [
            "B"
        ],
        "type": "single"
    },
    {
        "id": "2-10",
        "question": "在文字模式下，如果離開 MySQL 伺服器，可執行下列哪些命令？(複選)",
        "options": [
            {
                "label": "exit",
                "value": "A"
            },
            {
                "label": "quit",
                "value": "B"
            },
            {
                "label": "\\q",
                "value": "C"
            },
            {
                "label": "stop",
                "value": "D"
            }
        ],
        "answer": [
            "A", "B", "C"
        ],
        "type": "multiple"
    },
    {
        "id": "2-11",
        "question": "安裝 MySQL資料庫後，有關權限資料表是位於内建的哪一個資料庫中？",
        "options": [
            {
                "label": "test",
                "value": "A"
            },
            {
                "label": "mysql",
                "value": "B"
            },
            {
                "label": "db 1",
                "value": "C"
            },
            {
                "label": "qwhy",
                "value": "D"
            }
        ],
        "answer": [
            "B"
        ],
        "type": "single"
    },
    {
        "id": "2-12",
        "question": "Windows 環境中成功安装好 MySQL後，在文字模式下使用 root 帳號要登入本機上的 mysql 資料庫，需執行下列哪一個指令？",
        "options": [
            {
                "label": "mysql -u root -p",
                "value": "A"
            },
            {
                "label": "login username='root'",
                "value": "B"
            },
            {
                "label": "mysql -u root -p '1234'",
                "value": "C"
            },
            {
                "label": "run mysql -u root",
                "value": "D"
            }
        ],
        "answer": [
            "A"
        ],
        "type": "single"
    },
    {
        "id": "2-13",
        "question": "在 Windows系統下，安装 MySQL 系統檔案後，由文字模式下成功登入本機 mysql 資料庫後，提示字元會是下列哪一個？",
        "options": [
            {
                "label": "C:\\>",
                "value": "A"
            },
            {
                "label": "C: \\mysql>",
                "value": "B"
            },
            {
                "label": "mysql>",
                "value": "C"
            },
            {
                "label": ">>",
                "value": "D"
            }
        ],
        "answer": [
            "C"
        ],
        "type": "single"
    },
    {
        "id": "2-14",
        "question": "成功安裝 MySQL 後，系統的預設值，下列哪一項是錯誤的？",
        "options": [
            {
                "label": "預設的 username 是 root",
                "value": "A"
            },
            {
                "label": "預設的 hostname 是 localhost",
                "value": "B"
            },
            {
                "label": "預設的 password 是 mysql",
                "value": "C"
            },
            {
                "label": "mysql 是預設的資料庫",
                "value": "D"
            }
        ],
        "answer": [
            "A"
        ],
        "type": "single"
    },
    {
        "id": "2-15",
        "question": "下列何項不是 MySQL Administrator 資料庫管理工具提供的功能？",
        "options": [
            {
                "label": "定期對 MySQL 5 資料庫進行掃描病毒",
                "value": "A"
            },
            {
                "label": "建立及管理 MySQL 5 資料庫用戶資訊",
                "value": "B"
            },
            {
                "label": "MySQL 5 資料表維護及管理",
                "value": "C"
            },
            {
                "label": "管理及設定 MySQL 5 資料庫伺服器",
                "value": "D"
            }
        ],
        "answer": [
            "A"
        ],
        "type": "single"
    },
    {
        "id": "2-16",
        "question": "在 MySQL Administrator 主作業介面，哪一項可以管理所有使用者的帳號資訊？",
        "options": [
            {
                "label": "Server Information",
                "value": "A"
            },
            {
                "label": "Service Control",
                "value": "B"
            },
            {
                "label": "User Administration",
                "value": "C"
            },
            {
                "label": "Replication Status",
                "value": "D"
            }
        ],
        "answer": [
            "C"
        ],
        "type": "single"
    },
    {
        "id": "2-17",
        "question": "MySQL Administrator的 Server Logs 記載哪幾種系統 Log？(複選)",
        "options": [
            {
                "label": "System Log",
                "value": "A"
            },
            {
                "label": "Error Log",
                "value": "B"
            },
            {
                "label": "Slow Log",
                "value": "C"
            },
            {
                "label": "General Log",
                "value": "D"
            }
        ],
        "answer": [
            "B", "C", "D"
        ],
        "type": "multiple"
    },
    {
        "id": "2-18",
        "question": "使用 MySQL Administrator 資料庫備份(Backup Database)管理功能，進行資料庫備份的副檔名為何？",
        "options": [
            {
                "label": ".DBF",
                "value": "A"
            },
            {
                "label": ".MDB",
                "value": "B"
            },
            {
                "label": ".SQL",
                "value": "C"
            },
            {
                "label": ".BAK",
                "value": "D"
            }
        ],
        "answer": [
            "C"
        ],
        "type": "single"
    },
    {
        "id": "2-19",
        "question": "在 MySQL Query Browser 視覺化資料庫管理工具中，執行「Drop Schema」功能代表何種動作？",
        "options": [
            {
                "label": "建立資料庫",
                "value": "A"
            },
            {
                "label": "删除指定的資料庫",
                "value": "B"
            },
            {
                "label": "建立資料表格",
                "value": "C"
            },
            {
                "label": "删除指定的資料表格",
                "value": "D"
            }
        ],
        "answer": [
            "B"
        ],
        "type": "single"
    },
    {
        "id": "2-20",
        "question": "MySQL Server 的啟動執行檔，預設放置在哪個路徑下？",
        "options": [
            {
                "label": "C:\\mysql",
                "value": "A"
            },
            {
                "label": "C:\\mysql\\bin",
                "value": "B"
            },
            {
                "label": "C:\\windows\\mysql",
                "value": "C"
            },
            {
                "label": "C:\\mysql\\data",
                "value": "D"
            }
        ],
        "answer": [
            "B"
        ],
        "type": "single"
    },
    {
        "id": "2-21",
        "question": "Windows 環境下，MySQL 資料庫檔案，預設放置在哪個資料夾下？",
        "options": [
            {
                "label": "C:\\mysql",
                "value": "A"
            },
            {
                "label": "C:\\Mysql\\bin",
                "value": "B"
            },
            {
                "label": "C:Windows\\mysql",
                "value": "C"
            },
            {
                "label": "C:\\mysql\\data",
                "value": "D"
            }
        ],
        "answer": [
            "D"
        ],
        "type": "single"
    },
    {
        "id": "2-22",
        "question": "若 MySQL 不能正常啟動，可以檢查下列哪個錯誤檔？",
        "options": [
            {
                "label": "php.err",
                "value": "A"
            },
            {
                "label": "ini.err",
                "value": "B"
            },
            {
                "label": "mysql.err",
                "value": "C"
            },
            {
                "label": "my.cnf",
                "value": "D"
            }
        ],
        "answer": [
            "C"
        ],
        "type": "single"
    },
    {
        "id": "2-23",
        "question": "下列敘述何者有誤？(複選)",
        "options": [
            {
                "label": "MySQL 資料庫伺服器可以不跟 WEB Server 在一起，另外安装在一台獨立的電腦上",
                "value": "A"
            },
            {
                "label": "安装 MySQL 時，預設使用者 root 是 MySQL 的超級使用者，為避免忘記密碼，造成無法登入，所以不可以随意變更密碼",
                "value": "B"
            },
            {
                "label": "在 MySQL中，指令的名稱大小寫是有區別的",
                "value": "C"
            },
            {
                "label": "MySQL 是一種跨平台的關聯式資料庫系統",
                "value": "D"
            }
        ],
        "answer": [
            "B", "C"
        ],
        "type": "multiple"
    },
    {
        "id": "2-24",
        "question": "下列有關 MySQL 資料庫敘述何者有誤？",
        "options": [
            {
                "label": "MySQL-server-x.x.x.x-i386.rpm 是 MySQL 伺服端的主程式",
                "value": "A"
            },
            {
                "label": "mysql_safe 指令可用在 Linux 系統中啟動 MySQL 服務",
                "value": "B"
            },
            {
                "label": "在 Windows 系統下安装 MySQL後，必須執行 mysql_install_db 指令安裝預設的資料庫",
                "value": "C"
            },
            {
                "label": "winmysqladmin 是 MySQL 内建使用於 Windows 系統下的視覺化管理介面",
                "value": "D"
            }
        ],
        "answer": [
            "C"
        ],
        "type": "single"
    },
    {
        "id": "2-25",
        "question": "下列敘述何者有錯？",
        "options": [
            {
                "label": "在 PHP 程式中能成功呼叫存取 MySQL 資料庫，最少必須安裝伺服器主程式與用戶端主程式兩個模組",
                "value": "A"
            },
            {
                "label": "在 Linux 系就中，如果不是以 RPM 模式安裝 MySQL資料庫，則必須於安裝完成後執行 mysql- install-db 指令，安裝預設資料庫與權限資料表",
                "value": "B"
            },
            {
                "label": "MySQL 資料庫的權限資料表是位於内建的 test 資料庫中",
                "value": "C"
            },
            {
                "label": "在 Windows 系統下安装 MySQL 套件後，由於 MySQL 預設的 root 帳號並未使用保護密碼，因此必須以 mysqladmin 指令進行 root 帳號的密碼設定",
                "value": "D"
            }
        ],
        "answer": [
            "C"
        ],
        "type": "single"
    },
    {
        "id": "3-01",
        "question": "關聯式資料庫最常支援的查詢語言是？",
        "options": [
            {
                "label": "SQL",
                "value": "A"
            },
            {
                "label": "SSL",
                "value": "B"
            },
            {
                "label": "QBASIC",
                "value": "C"
            },
            {
                "label": "JAVA",
                "value": "D"
            }
        ],
        "answer": [
            "A"
        ],
        "type": "single"
    },
    {
        "id": "3-02",
        "question": "下列哪些是關聯式資料庫管理系統所提供的功能？(複選)",
        "options": [
            {
                "label": "DCL",
                "value": "A"
            },
            {
                "label": "DDL",
                "value": "B"
            },
            {
                "label": "DHL",
                "value": "C"
            },
            {
                "label": "DML",
                "value": "D"
            }
        ],
        "answer": [
            "A", "B", "D"
        ],
        "type": "multiple"
    },
    {
        "id": "3-03",
        "question": "結構化查詢語言(SQL)共區分為三大類，不包括下列哪一項？",
        "options": [
            {
                "label": "DML",
                "value": "A"
            },
            {
                "label": "DCL",
                "value": "B"
            },
            {
                "label": "DSL",
                "value": "C"
            },
            {
                "label": "DDL",
                "value": "D"
            }
        ],
        "answer": [
            "C"
        ],
        "type": "single"
    },
    {
        "id": "3-04",
        "question": "對於資料進行新增、删除、修改及查詢功能的語言是屬於下列哪一個項目？",
        "options": [
            {
                "label": "DML",
                "value": "A"
            },
            {
                "label": "DCL",
                "value": "B"
            },
            {
                "label": "DSL",
                "value": "C"
            },
            {
                "label": "DDL",
                "value": "D"
            }
        ],
        "answer": [
            "A"
        ],
        "type": "single"
    },
    {
        "id": "3-05",
        "question": "在關聯式資料庫中，下列何項 SQL 指令是屬於 DDL ？",
        "options": [
            {
                "label": "SELECT",
                "value": "A"
            },
            {
                "label": "UPDATE",
                "value": "B"
            },
            {
                "label": "DELETE",
                "value": "C"
            },
            {
                "label": "ALTER",
                "value": "D"
            }
        ],
        "answer": [
            "D"
        ],
        "type": "single"
    },
    {
        "id": "3-06",
        "question": "用來對於資料庫的資源授權、解除授權的是哪列何種語言？",
        "options": [
            {
                "label": "資料定義語言(DDL)",
                "value": "A"
            },
            {
                "label": "資料處理語言(DML)",
                "value": "B"
            },
            {
                "label": "資料控制語言(DCL)",
                "value": "C"
            },
            {
                "label": "工作控制語言(JCL)",
                "value": "D"
            }
        ],
        "answer": [
            "C"
        ],
        "type": "single"
    },
    {
        "id": "3-07",
        "question": "在關聯式資料庫的運算中，兩個以上表格連結(join)的操作，可由哪個 SQL 指令實現？",
        "options": [
            {
                "label": "SELECT",
                "value": "A"
            },
            {
                "label": "UPDATE",
                "value": "B"
            },
            {
                "label": "DELETE",
                "value": "C"
            },
            {
                "label": "ALTER",
                "value": "D"
            }
        ],
        "answer": [
            "A"
        ],
        "type": "single"
    },
    {
        "id": "3-08",
        "question": "下列哪一項是專門用來管理關聯式資料庫的資料庫語言為何？",
        "options": [
            {
                "label": "JAVA",
                "value": "A"
            },
            {
                "label": "SQL",
                "value": "B"
            },
            {
                "label": "ACTIONSCRIPT",
                "value": "C"
            },
            {
                "label": "ASP.NET",
                "value": "D"
            }
        ],
        "answer": [
            "B"
        ],
        "type": "single"
    },
    {
        "id": "3-09",
        "question": "用來描述資料庫的邏輯結構，定義資料型態、長度、關係等的是？",
        "options": [
            {
                "label": "資料定義語言(DDL)",
                "value": "A"
            },
            {
                "label": "資料處理語言(DML)",
                "value": "B"
            },
            {
                "label": "資料控制語言(DCL)",
                "value": "C"
            },
            {
                "label": "工作控制語言(JCL)",
                "value": "D"
            }
        ],
        "answer": [
            "A"
        ],
        "type": "single"
    },
    {
        "id": "3-10",
        "question": "下列哪一個指令可以顯示作用中 MySQL Server 中所有的資料庫？",
        "options": [
            {
                "label": "SHOW DATABASES;",
                "value": "A"
            },
            {
                "label": "SHOW COLUMNS;",
                "value": "B"
            },
            {
                "label": "SHOW TABLES;",
                "value": "C"
            },
            {
                "label": "SHOW INDEX;",
                "value": "D"
            }
        ],
        "answer": [
            "A"
        ],
        "type": "single"
    },
    {
        "id": "3-11",
        "question": "MySQL 指令中，若要限制某個記錄傳回筆數，需利用下列哪個關鍵字？",
        "options": [
            {
                "label": "LIMIT",
                "value": "A"
            },
            {
                "label": "BETWEEN",
                "value": "B"
            },
            {
                "label": "LIKE",
                "value": "C"
            },
            {
                "label": "ORDER BY",
                "value": "D"
            }
        ],
        "answer": [
            "A"
        ],
        "type": "single"
    },
    {
        "id": "3-12",
        "question": "在 MySQL 中，若要刪除資料表，可利用下列哪個指令？",
        "options": [
            {
                "label": "Erase Table",
                "value": "A"
            },
            {
                "label": "Delete Table",
                "value": "B"
            },
            {
                "label": "Drop Table",
                "value": "C"
            },
            {
                "label": "Close Table",
                "value": "D"
            }
        ],
        "answer": [
            "C"
        ],
        "type": "single"
    },
    {
        "id": "3-13",
        "question": "在 MySQL 中定義資料表，若要設定欄位為自動加 1，可以選定下列哪一個屬性？",
        "options": [
            {
                "label": "Auto_ Increment",
                "value": "A"
            },
            {
                "label": "PRIMARY KEY",
                "value": "B"
            },
            {
                "label": "null",
                "value": "C"
            },
            {
                "label": "UNSIGNED",
                "value": "D"
            }
        ],
        "answer": [
            "A"
        ],
        "type": "single"
    },
    {
        "id": "3-14",
        "question": "在 MySQL 中，利用 Select 查詢時，若希望利用樣版比對，則該用下列哪個關鍵字？",
        "options": [
            {
                "label": "LIMIT",
                "value": "A"
            },
            {
                "label": "LIKE",
                "value": "B"
            },
            {
                "label": "BETWEEN",
                "value": "C"
            },
            {
                "label": "ORDER BY",
                "value": "D"
            }
        ],
        "answer": [
            "B"
        ],
        "type": "single"
    },
    {
        "id": "3-15",
        "question": "在 MySQL中，若要刪除資料表(table1)的所有記錄，則該用下列哪個指令？",
        "options": [
            {
                "label": "Select tables 1 *.*",
                "value": "A"
            },
            {
                "label": "Delete table 1",
                "value": "B"
            },
            {
                "label": "Delete from table 1",
                "value": "C"
            },
            {
                "label": "Update table 1",
                "value": "D"
            }
        ],
        "answer": [
            "C"
        ],
        "type": "single"
    },
    {
        "id": "3-16",
        "question": "假如一學生基本資料庫中已有一通訊錄的表格(AddressBook)，現要新增一個「手機(mob)」的字串型態欄位到該資料表，必須使用下列哪些 SQL 語法來完成？(複選)",
        "options": [
            {
                "label": "ALTER TABLE AddressBook",
                "value": "A"
            },
            {
                "label": "MODIFY TABLE AddressBook",
                "value": "B"
            },
            {
                "label": "ADD mob Char(10)",
                "value": "C"
            },
            {
                "label": "CHANGE mob Char(10)",
                "value": "D"
            }
        ],
        "answer": [
            "A", "C"
        ],
        "type": "multiple"
    },
    {
        "id": "3-17",
        "question": "在 SQL 結構化查詢語言中，下列哪一個指令不屬於資料操作語言(DML)？",
        "options": [
            {
                "label": "SELECT",
                "value": "A"
            },
            {
                "label": "UPDATE",
                "value": "B"
            },
            {
                "label": "CREATE",
                "value": "C"
            },
            {
                "label": "DELETE",
                "value": "D"
            }
        ],
        "answer": [
            "C"
        ],
        "type": "single"
    },
    {
        "id": "3-18",
        "question": "下列 SQL 指令何者為資料定義語言 DDL？",
        "options": [
            {
                "label": "CREATE",
                "value": "A"
            },
            {
                "label": "INSERT",
                "value": "B"
            },
            {
                "label": "UPDATE",
                "value": "C"
            },
            {
                "label": "DELETE",
                "value": "D"
            }
        ],
        "answer": [
            "A"
        ],
        "type": "single"
    },
    {
        "id": "3-19",
        "question": "SQL 語法中，下列哪些是屬於資料控制語言(Data Control Language)的指令？(複選)",
        "options": [
            {
                "label": "GRANT",
                "value": "A"
            },
            {
                "label": "GROUP",
                "value": "B"
            },
            {
                "label": "SET",
                "value": "C"
            },
            {
                "label": "REVOKE",
                "value": "D"
            }
        ],
        "answer": [
            "A", "D"
        ],
        "type": "multiple"
    },
    {
        "id": "3-20",
        "question": "對於 SQL 語法的使用，下列何者有誤？",
        "options": [
            {
                "label": "透過 Like 比較運算子，可以查詢某一字串或字元的一部份",
                "value": "A"
            },
            {
                "label": "使用 Desc 關鍵字可以達到查詢結果的遞增排序效果",
                "value": "B"
            },
            {
                "label": "四則運算在 SQL 查詢語法中是可行的",
                "value": "C"
            },
            {
                "label": "使用 Delete 可以從資料表中刪除記錄",
                "value": "D"
            }
        ],
        "answer": [
            "B"
        ],
        "type": "single"
    },
    {
        "id": "3-21",
        "question": "在 MySQL 語法中，欲建立一名為 employee 的資料庫，應該執行下列哪一個指令？",
        "options": [
            {
                "label": "Create table employee;",
                "value": "A"
            },
            {
                "label": "Create employee;",
                "value": "B"
            },
            {
                "label": "Create database employee;",
                "value": "C"
            },
            {
                "label": "show database employee;",
                "value": "D"
            }
        ],
        "answer": [
            "C"
        ],
        "type": "single"
    },
    {
        "id": "3-22",
        "question": "在 SQL 語法中，若所建立資料庫的表格有兩個欄位以上，在宣告表格欄位時需以何種符號間隔？",
        "options": [
            {
                "label": "逗號(,)",
                "value": "A"
            },
            {
                "label": "分號(;)",
                "value": "B"
            },
            {
                "label": "冒號(:)",
                "value": "C"
            },
            {
                "label": "句點(.)",
                "value": "D"
            }
        ],
        "answer": [
            "A"
        ],
        "type": "single"
    },
    {
        "id": "3-23",
        "question": "執行附圖 SQL 命令後，下列何者錯誤？",
        "media": {
            "type": "table",
            "data": [
                [
                    ["CREATE TABLE DEPARTHENT("],
                    ["  employeeID int Not Null auto_increment primary key,"],
                    ["  name varchar(20),"], 
                    ["  job varchar(15)"],
                    [");"]
                ]
            ]
        },
        "options": [
            {"label": "建立一個名為 DEPARTMENT 的表格", "value": "A"},
            {"label": "主鍵欄位為 employeeID", "value": "B"},
            {"label": "定義 employeeID 欄位每列資料必須要有值，且自動增號", "value": "C"},
            {"label": "定義 name 欄位的值必需超過 20 個字元", "value": "D"}
        ],
        "answer": ["D"],
        "type": "single"
    },
    {
        "id": "3-24",
        "question": "在 SQL 語法中，使用 Create Table 敘述進行欄位宣告，下列加入選項用途中何者錯誤？",
        "options": [
            {
                "label": "宣告每個欄位 null 或是 not null，代表這個欄位是否可以包含空值(null)，預設可以包含空值",
                "value": "A"
            },
            {
                "label": "關鍵字 auto_increment 可以使欄位值產序列號碼",
                "value": "B"
            },
            {
                "label": "一個資料表中所有數值型態的欄位均可設成 auto_increment",
                "value": "C"
            },
            {
                "label": "一個資料表中僅能有一個欄位被宣告為 Primary Key",
                "value": "D"
            }
        ],
        "answer": [
            "C"
        ],
        "type": "single"
    },
    {
        "id": "3-25",
        "question": "執行附圖中 SQL 指令，則下列何者敘述正確？",
        "media": {
            "type": "table",
            "data": [
                ["DROP database employee;"]
            ]
        },
        "options": [
            {"label": "刪除 employee 資料庫及所有包含的資料表", "value": "A"},
            {"label": "刪除 employee 資料表", "value": "B"},
            {"label": "刪除 employee 資料表中所有記錄", "value": "C"},
            {"label": "僅刪除 employee 資料庫中所有資料表，但保留資料庫", "value": "D"}
        ],
        "answer": ["A"],
        "type": "single"
    },
    {
        "id": "3-26",
        "question": "下面哪一不是資料操作語言(DML)主要的範圍？",
        "options": [
            {
                "label": "删除",
                "value": "A"
            },
            {
                "label": "查詢",
                "value": "B"
            },
            {
                "label": "授權",
                "value": "C"
            },
            {
                "label": "新增",
                "value": "D"
            }
        ],
        "answer": [
            "C"
        ],
        "type": "single"
    },
    {
        "id": "3-27",
        "question": "在 SQL 語法中，如果要查詢某個資料表所有的欄位，可以在 SELECT 命令配合哪一個符號進行查詢？",
        "options": [
            {
                "label": "%",
                "value": "A"
            },
            {
                "label": "*",
                "value": "B"
            },
            {
                "label": "&",
                "value": "C"
            },
            {
                "label": "@",
                "value": "D"
            }
        ],
        "answer": [
            "B"
        ],
        "type": "single"
    },
    {
        "id": "3-28",
        "question": "要顯示 MySQL 資料庫伺服器目前已建立的資料庫，可以執行下列哪個指令？",
        "options": [
            {
                "label": "Create database;",
                "value": "A"
            },
            {
                "label": "Show databases;",
                "value": "B"
            },
            {
                "label": "Drop database;",
                "value": "C"
            },
            {
                "label": "Show database;",
                "value": "D"
            }
        ],
        "answer": [
            "B"
        ],
        "type": "single"
    },
    {
        "id": "3-29",
        "question": "有關 SQL 語法中， ALTER 指令是屬於哪一類語言？",
        "options": [
            {
                "label": "DCL",
                "value": "A"
            },
            {
                "label": "DDL",
                "value": "B"
            },
            {
                "label": "DML",
                "value": "C"
            },
            {
                "label": "DHL",
                "value": "D"
            }
        ],
        "answer": [
            "B"
        ],
        "type": "single"
    },
    {
        "id": "3-30",
        "question": "在 SQL 結構化查詢語言中，執行 Show Index From table; 敘述，表示要顯示：",
        "options": [
            {
                "label": "指定資料庫中所有資料表格",
                "value": "A"
            },
            {
                "label": "指定資料庫的所有資料表格的狀態",
                "value": "B"
            },
            {
                "label": "指定料庫中名稱為 table 的資料表格的索引資料",
                "value": "C"
            },
            {
                "label": "指定資料庫中名稱為 table 的資料表格的 SQL 指令",
                "value": "D"
            }
        ],
        "answer": [
            "C"
        ],
        "type": "single"
    },
    {
        "id": "3-31",
        "question": "在 SQL 結構化查询語言中， ALTER TABLE 指令的用途為何？",
        "options": [
            {
                "label": "交換已建立資料表格的欄位内資料値",
                "value": "A"
            },
            {
                "label": "刪除已建立資料表格的欄位内資料値",
                "value": "B"
            },
            {
                "label": "修改及維護已建立資料表格的欄位結構",
                "value": "C"
            },
            {
                "label": "建立資料表格與資料表格的關聯",
                "value": "D"
            }
        ],
        "answer": [
            "C"
        ],
        "type": "single"
    },
    {
        "id": "3-32",
        "question": "執行附圖中的 SQL 敘述，則下列何者錯誤？",
        "media": {
            "type": "table",
            "data": [
                ["Alter TABLE employee ADD COLUMN tel varchar(10)Null;"]
            ]
        },
        "options": [
            {"label": "在已存在 employee 資料表格中新增一欄", "value": "A"},
            {"label": "新增欄位名稱為 tel", "value": "B"},
            {"label": "定義的欄位内容資料的長度最多為 10 個字元", "value": "C"},
            {"label": "新增欄位内容資料値預設為 Null", "value": "D"}
        ],
        "answer": ["D"],
        "type": "single"
    },
    {
        "id": "3-33",
        "question": "在 SQL 語法中，要將資料表格(employee_table)中的索引(main_index)刪除，正確的命令是？",
        "options": [
            {
                "label": "Delete Index main_index From employee_table",
                "value": "A"
            },
            {
                "label": "Delete Index main_index On employee_table",
                "value": "B"
            },
            {
                "label": "Drop Index main_index From employee_table",
                "value": "C"
            },
            {
                "label": "Drop Index main_index On employee_table",
                "value": "D"
            }
        ],
        "answer": [
            "D"
        ],
        "type": "single"
    },
    {
        "id": "3-34",
        "question": "假設 SQL 資料庫伺服器中己建立資料庫(MySQL)，内含兩個已建立資料表(table 11 及 table 22)，執行附圖中的命令，則下列何者正確？",
        "media": {
            "type": "table",
            "data": [
                ["Drop database MySQL;"]
            ]
        },
        "options": [
            {"label": "移除 MySQL 資料庫系統程式", "value": "A"},
            {"label": "刪除資料庫内所有資料表格，但保留資料庫(MySQL)", "value": "B"},
            {"label": "刪除資料庫内所有資料表格，連同資料庫一併刪除", "value": "C"},
            {"label": "刪除資料庫内資料表 table 11 及 table 22 所有的關聯", "value": "D"}
        ],
        "answer": ["C"],
        "type": "single"
    },
    {
        "id": "3-35",
        "question": "利用 SELECT 指令進行查詢資料表時，若要對某個欄位進行篩選，需加上哪個關鍵字來進行查詢？",
        "options": [
            {
                "label": "where",
                "value": "A"
            },
            {
                "label": "LET",
                "value": "B"
            },
            {
                "label": "ORDER",
                "value": "C"
            },
            {
                "label": "IN",
                "value": "D"
            }
        ],
        "answer": [
            "A"
        ],
        "type": "single"
    },
    {
        "id": "3-36",
        "question": "在文字模式下，如欲以 SQL 敘述建立一員工薪資資料表，請參閱附圖作答：",
        "media": {
            "type": "table",
            "data": [
                ["步驟敘述"], // 標題 (單獨一行)
                [ // 表格開始
                    ["1  Use employee;"],    // 表格資料
                    ["2  Create table salary(id not null name varchar(10) ,salasy)"], // 表格資料
                    ["3  Create database employee"], // 注意這裡修正了typo
                    ["4  Insert Into salary(id, name, salary)values('x001', '李大同', '20000')"]  // 表格資料
                ], // 表格結束
                ["試問步驟的順序由先而後為？"] // 說明文字 (單獨一行)
            ]
        },
        "options": [
            {"label": "3124", "value": "A"},
            {"label": "1234", "value": "B"},
            {"label": "3214", "value": "C"},
            {"label": "1324", "value": "D"}
        ],
        "answer": ["A"],
        "type": "single"
    },
    {
        "id": "3-37",
        "question": "下列有關 SQL 的資料操作語言(DML)的敘述，何項是錯誤？",
        "options": [
            {
                "label": "新增資料是透過 INSERT INTO 指令來進行；新增資料時，欄位名稱與値的數量、資料型態及資料長度必須一致",
                "value": "A"
            },
            {
                "label": "修改資料使用的是 UPDATE 指令及 SET 子句進行；其中 SET 子句必須至少設定一個欄位的値被修改才能讓修改語法成立",
                "value": "B"
            },
            {
                "label": "使用 DELETE 指令進行刪除，無法只刪除某個欄位値，最少得刪除一筆記錄",
                "value": "C"
            },
            {
                "label": "使用 CREATE TABLE 指令建立資料表時，至少必須包含一個欄位，否則無法建立",
                "value": "D"
            }
        ],
        "answer": [
            "A"
        ],
        "type": "single"
    },
    {
        "id": "3-38",
        "question": "在文字模式下，輸入 MySQL 指令後，必須加上什麼符號，SQL 敘述才能執行？",
        "options": [
            {
                "label": "逗號(,)",
                "value": "A"
            },
            {
                "label": "分號(;)",
                "value": "B"
            },
            {
                "label": "冒號(:)",
                "value": "C"
            },
            {
                "label": "百分比(%)",
                "value": "D"
            }
        ],
        "answer": [
            "B"
        ],
        "type": "single"
    },
    {
        "id": "3-39",
        "question": "在 SQL 語法中，使用哪一個關鍵字進行資料表之間的關聯？",
        "options": [
            {
                "label": "GROUP",
                "value": "A"
            },
            {
                "label": "JOIN",
                "value": "B"
            },
            {
                "label": "LINK",
                "value": "C"
            },
            {
                "label": "AND",
                "value": "D"
            }
        ],
        "answer": [
            "B"
        ],
        "type": "single"
    },
    {
        "id": "3-40",
        "question": "在 SQL 語法中，要查詢資料表格(table)内所有資料錄的所有欄位資料，應該執行下列哪一項命令？",
        "options": [
            {
                "label": "Select table;",
                "value": "A"
            },
            {
                "label": "Search * From table;",
                "value": "B"
            },
            {
                "label": "Select * From table;",
                "value": "C"
            },
            {
                "label": "Show * From table;",
                "value": "D"
            }
        ],
        "answer": [
            "C"
        ],
        "type": "single"
    },
    {
        "id": "3-41",
        "question": "為了在產品資料表格(product)中進行查詢時，欲得到已經供貨的供應商代號(supp_no)，且自動去除重複的資料錄，使每一供應商代號只顯示一次，則可執行下列哪些 SQL 命令？(複選)",
        "options": [
            {
                "label": "Select supp_no From product;",
                "value": "A"
            },
            {
                "label": "Select ALL supp_no From product;",
                "value": "B"
            },
            {
                "label": "Select DISTINCT supp_no From product;",
                "value": "C"
            },
            {
                "label": "Select DISTINCTROW supp_no From product;",
                "value": "D"
            }
        ],
        "answer": [
            "C", "D"
        ],
        "type": "multiple"
    },
    {
        "id": "3-42",
        "question": "在SQL語法中，要對資料表格選取特定的資料錄時，必須在Select指令加入哪一項關鍵字來進行選取？",
        "options": [
            {
                "label": "IN",
                "value": "A"
            },
            {
                "label": "WHERE",
                "value": "B"
            },
            {
                "label": "LIKE",
                "value": "C"
            },
            {
                "label": "LIMIT",
                "value": "D"
            }
        ],
        "answer": [
            "B"
        ],
        "type": "single"
    },
    {
        "id": "3-43",
        "question": "要在班級通訊錄資料庫系統中，新增班級同學資料，必須使用下列哪一個SQL指令？",
        "options": [
            {
                "label": "CREATE",
                "value": "A"
            },
            {
                "label": "DELETE",
                "value": "B"
            },
            {
                "label": "INSERT INTO",
                "value": "C"
            },
            {
                "label": "DROP",
                "value": "D"
            }
        ],
        "answer": [
            "C"
        ],
        "type": "single"
    },
    {
        "id": "3-44",
        "question": "要在一產品資料表格(product)中，查詢產品單價(price)介於 400 元與 600 元之間所有欄位的資料錄，可以執行下列哪一個 SQL 指令？",
        "options": [
            {
                "label": "Select * From product Where price Between 400 and 600;",
                "value": "A"
            },
            {
                "label": "Select price From product Between 400 and 600;",
                "value": "B"
            },
            {
                "label": "Select * From product Which price >= 400 and price <= 600",
                "value": "C"
            },
            {
                "label": "Select * From product that price Between 400 and 600",
                "value": "D"
            }
        ],
        "answer": [
            "A"
        ],
        "type": "single"
    },
    {
        "id": "3-45",
        "question": "在 SQL 語法中，對資料表(table)進行完全相等字串搜尋的命令(例如：name 欄位中姓名為李大同)，下列哪一項是正確的敘述？",
        "options": [
            {
                "label": "Select * From table Where name == '李大同'",
                "value": "A"
            },
            {
                "label": "Select * From table Where name equal '李大同'",
                "value": "B"
            },
            {
                "label": "Select * From table Where name is '李大同'",
                "value": "C"
            },
            {
                "label": "Select * From table Where name = '李大同'",
                "value": "D"
            }
        ],
        "answer": [
            "D"
        ],
        "type": "single"
    },
    {
        "id": "3-46",
        "question": "SQL 語法中，萬用字元(%)代用的是？",
        "options": [
            {
                "label": "任意字元",
                "value": "A"
            },
            {
                "label": "任意長度字串",
                "value": "B"
            },
            {
                "label": "任意資料欄位",
                "value": "C"
            },
            {
                "label": "任意資料表",
                "value": "D"
            }
        ],
        "answer": [
            "B"
        ],
        "type": "single"
    },
    {
        "id": "3-47",
        "question": "SQL 語法中，哪一個符號代表單一長度的任意字元？",
        "options": [
            {
                "label": "?",
                "value": "A"
            },
            {
                "label": "%",
                "value": "B"
            },
            {
                "label": "_",
                "value": "C"
            },
            {
                "label": "*",
                "value": "D"
            }
        ],
        "answer": [
            "C"
        ],
        "type": "single"
    },
    {
        "id": "3-48",
        "question": "某業務主管想在客戶資料表(TABLE)中查詢某客戶的資料，但是忘了該公司的名稱，只記得該公司名稱中有一個「達」字，請問下列哪項 SQL 敘述最適當？(經銷商公司名稱欄位名稱為 COMPANY)",
        "options": [
            {
                "label": "SELECT * FROM TABLE WHERE COMPANY = '%達%';",
                "value": "A"
            },
            {
                "label": "SELECT * FROM TABLE WHERE COMPANY LIKE '達%';",
                "value": "B"
            },
            {
                "label": "SELECT * FROM TABLE WHERE COMPANY LIKE '?達?';",
                "value": "C"
            },
            {
                "label": "SELECT * FROM TABLE WHERE COMPANY LIKE '%達%';",
                "value": "D"
            }
        ],
        "answer": [
            "D"
        ],
        "type": "single"
    },
    {
        "id": "3-49",
        "question": "某業務主管想利用客戶資料表(TABLE)中電話欄位(TEL)查詢台北縣市客戶的資料，可以使用下列哪些 SQL 敘述？(台北縣巿電話區碼為 02) (複選)",
        "options": [
            {
                "label": "SELECT * FROM TABLE WHERE TEL LIKE '02???';",
                "value": "A"
            },
            {
                "label": "SELECT * FROM TABLE WHERE TEL LIKE '02%';",
                "value": "B"
            },
            {
                "label": "SELECT * FROM TABLE WHERE Substring(TEL, 1, 2) = '02'",
                "value": "C"
            },
            {
                "label": "SELECT * FROM TABLE WHERE TEL = '02%'",
                "value": "D"
            }
        ],
        "answer": [
            "B", "C"
        ],
        "type": "multiple"
    },
    {
        "id": "3-50",
        "question": "在 SQL 語法中，使用 SELECT 指令查詢時，加入 ORDER BY 關鍵字的目的是？",
        "options": [
            {
                "label": "比對",
                "value": "A"
            },
            {
                "label": "排序",
                "value": "B"
            },
            {
                "label": "轉換資料型態",
                "value": "C"
            },
            {
                "label": "合併",
                "value": "D"
            }
        ],
        "answer": [
            "B"
        ],
        "type": "single"
    },
    {
        "id": "3-51",
        "question": "在 SQL 結構化查詢語言中，要對查詢的資料表格指定的欄位進行排序，需要加入哪個關鍵字？",
        "options": [
            {
                "label": "SORT BY",
                "value": "A"
            },
            {
                "label": "ORDER BY",
                "value": "B"
            },
            {
                "label": "DESC",
                "value": "C"
            },
            {
                "label": "RENAME",
                "value": "D"
            }
        ],
        "answer": [
            "B"
        ],
        "type": "single"
    },
    {
        "id": "3-52",
        "question": "在 SQL 結構化查詢語言中，要對查詢的資料表格(score)指定的欄位(chinese)進行排序，使得該欄位資料値由大而小排序，下列哪項敘述是正確的？",
        "options": [
            {
                "label": "SELECT * FROM score ORDER BY Chinese;",
                "value": "A"
            },
            {
                "label": "SELECT * FROM score ORDER BY chinese DESC;",
                "value": "B"
            },
            {
                "label": "SELECT * FROM score SORT BY chinese;",
                "value": "C"
            },
            {
                "label": "SELECT * FROM score SORT BY chinese DESC;",
                "value": "D"
            }
        ],
        "answer": [
            "B"
        ],
        "type": "single"
    },
    {
        "id": "3-53",
        "question": "對印表機供應商資料表執行附圖中的查詢命令，則下列何項執行結果會最先出現？",
        "media": {
            "type": "table",
            "data": [
            ["SELECT supp_name FROM TABLE ORDER BY supp_name;"]
            ]
        },
        "options": [
            {"label": "EPSON", "value": "A"},
            {"label": "HP", "value": "B"},
            {"label": "Lexmark", "value": "C"},
            {"label": "CANON", "value": "D"}
        ],
        "answer": ["D"],
        "type": "single"
    },
    {
        "id": "3-54",
        "question": "SQL 語法中，在資料查詢時對輸出結果排序的敘述，下列哪些是正確的？(複選)",
        "options": [
            {
                "label": "在選取資料表的敘述中加入 ORDER BY 關鍵字是希望輸出結果依指定欄位進行排序",
                "value": "A"
            },
            {
                "label": "ORDER BY 關鍵字的預設排序方式是由小而大",
                "value": "B"
            },
            {
                "label": "ORDER BY 指定為排序的欄位型態只限制為數値型態，文字型態不能列為排序欄位",
                "value": "C"
            },
            {
                "label": "SQL 敘述 'SELECT FROM...ORDER BY 欄位名稱 DES'，其中 DESC 表示輸出表格的欄位名稱由大而小排序",
                "value": "D"
            }
        ],
        "answer": [
            "A", "B"
        ],
        "type": "multiple"
    },
    {
        "id": "3-55",
        "question": "SQL 結構化查詢語言查詢的敘述中，如附圖在 Order BY 後面使用了 2 個欄位排序，則執行排序的結果下列何項正確？",
        "media" : {
            "type": "table",
            "data": [
            ["Select * From score Order BY chinese, english desc;"]
            ]
        },
        "options": [
            {"label": "chinese 欄位及 english 欄位資料値皆遞增排序", "value": "A"},
            {"label": "chinese 欄位資料値遞增 ; english 欄位資料値遞減", "value": "B"},
            {"label": "chinese 欄位資料値遞減 ; english 欄位資料値遞增", "value": "C"},
            {"label": "chinese 欄位及 english 欄位資料値皆遞減排序", "value": "D"}
        ],
        "answer": ["B"],
        "type": "single"
    },
    {
        "id": "3-56",
        "question": "執行 SQL 結構化查詢語言進行資料排序時，下列敘述何者錯誤？",
        "options": [
            {
                "label": "一次僅能指定一個欄位進行排序",
                "value": "A"
            },
            {
                "label": "所謂巢狀排序是在 ORDER BY 後面使用 2 個(以上)欄位排序",
                "value": "B"
            },
            {
                "label": "巢狀排序依 ORDER BY 敘述中欄位的順序分主要排序欄位及次排序欄位，排序的結果會先以主要排序欄進行排序，再依次排序欄加以排序",
                "value": "C"
            },
            {
                "label": "巢狀排序可緊接在個別欄位後加上 DESC 或 ASC 關鍵字，依照個別欄位排序條件加以定義",
                "value": "D"
            }
        ],
        "answer": [
            "A"
        ],
        "type": "single"
    },
    {
        "id": "3-57",
        "question": "某公司產品資料表(products)位結構如附圖：下列 SQL 敘述哪一項是合法的？(複選)",
        "media": {
            "type": "table",
            "data": [
                [["欄位名稱", "pro_id", "supp id", "Description", "price"]],
                [["資料型態", "int", "char(3)", "char(30)", "float"]],
                [["名詞說明", "產品編號", "供應商代碼", "產品規格", "單價"]]
            ]
        },
        "options": [
            {"label": "select pro_id, supp_id,price where price<100 order by supp_id desc, pro_id;", "value": "A"},
            {"label": "select pro_id, supp_id, price*1.05 from products order by price;", "value": "B"},
            {"label": "select pro_id, supp_id, price*0.05 as tax from products order by price;", "value": "C"},
            {"label": "select pro_id, supp_id, price*0.05 as tax from products order by tax;", "value": "D"}
        ],
        "answer": ["B","C","D"],
        "type": "multiple"
    },
    {
        "id": "3-58",
        "question": "在 SQL 敘述中，哪一個符號之後的字句會被視為註解？",
        "options": [
            {
                "label": "$",
                "value": "A"
            },
            {
                "label": "^",
                "value": "B"
            },
            {
                "label": "#",
                "value": "C"
            },
            {
                "label": "@",
                "value": "D"
            }
        ],
        "answer": [
            "C"
        ],
        "type": "single"
    },
    {
        "id": "3-59",
        "question": "在 SQL 結構化查詢語言的腳本檔中，下列哪一項可視為段落式註解，放置於列首使用？",
        "options": [
            {
                "label": "/*註解段落文字*/",
                "value": "A"
            },
            {
                "label": "?註解段落文字?",
                "value": "B"
            },
            {
                "label": "#註解段落文字#",
                "value": "C"
            },
            {
                "label": "@註解段落文字@",
                "value": "D"
            }
        ],
        "answer": [
            "A"
        ],
        "type": "single"
    },
    {
        "id": "3-60",
        "question": "在 SQL 敘述中，我們可以採用哪些方式在 SQL 敘述中加入註解來增加腳本的可讀性？(複選)",
        "options": [
            {
                "label": "#",
                "value": "A"
            },
            {
                "label": "--",
                "value": "B"
            },
            {
                "label": "/*...*/",
                "value": "C"
            },
            {
                "label": "'",
                "value": "D"
            }
        ],
        "answer": [
            "A","B","C"
        ],
        "type": "multiple"
    },
    {
        "id": "3-61",
        "question": "下列敘述何者正確？(複選)",
        "options": [
            {
                "label": "使用 SELECT 敘述來查詢資料時，會由一表格中選取部份或全部的欄位，這種篩選方式稱為「縱向篩選」",
                "value": "A"
            },
            {
                "label": "在 SELECT 敘述中使用 WHERE 子句是對所選取的資料値加入一些限制條件，這種篩選方式稱為「橫向篩選」",
                "value": "B"
            },
            {
                "label": "ORDER BY 子句是對所選取的資料値加以排序，可以依選取資料的某一欄位加以排序，排序的方式可遞增或遞減",
                "value": "C"
            },
            {
                "label": "使用 SELECT 敘述所選取的資料不一定是存在於料表格中的欄位資料，我們可以使用各種運算方式來形成「虛擬欄位」",
                "value": "D"
            }
        ],
        "answer": [
            "A","B","C","D"
        ],
        "type": "multiple"
    },
    {
        "id": "3-62",
        "question": "在 SQL 中，有關虛擬欄位的敘述，下列何者有誤？",
        "options": [
            {
                "label": "資料表格中的欄位透過各種運算，便可形成「虛擬欄位」，並重新計算資料値",
                "value": "A"
            },
            {
                "label": "在「虛擬欄位」的後面透過 AS 語法為該「虛擬欄位」加上一個標籤，則 MySQL 輸出結果時會以該標籤為「虛擬欄位」的欄位名稱",
                "value": "B"
            },
            {
                "label": "在 SELECT 敘述中，如果在兩個欄中忘了加逗號(,)，則 MySQL 會將後面欄位名稱解釋為前面欄位的別名",
                "value": "C"
            },
            {
                "label": "虚擬欄位不可用於 WHERE 或 ORDER BY 子句，作為篩選或排序的條件欄位",
                "value": "D"
            }
        ],
        "answer": [
            "D"
        ],
        "type": "single"
    },
    {
        "id": "3-63",
        "question": "下列何者不屬於 SQL 結構化查詢語言中資料定義語言(DDL)的功能？",
        "options": [
            {
                "label": "建立資料庫",
                "value": "A"
            },
            {
                "label": "刪除資料表",
                "value": "B"
            },
            {
                "label": "變更資料表結構",
                "value": "C"
            },
            {
                "label": "確定資料的變更",
                "value": "D"
            }
        ],
        "answer": [
            "D"
        ],
        "type": "single"
    },
    {
        "id": "3-64",
        "question": "在 SQL 的資料定義語言中，要完成變更資料庫結構必須執行哪項指令？",
        "options": [
            {
                "label": "ALTER",
                "value": "A"
            },
            {
                "label": "REVOKE",
                "value": "B"
            },
            {
                "label": "RENAME",
                "value": "C"
            },
            {
                "label": "FLUSH",
                "value": "D"
            }
        ],
        "answer": [
            "A"
        ],
        "type": "single"
    },
    {
        "id": "3-65",
        "question": "在 SQL 語言的分類中，主要功能是對資料的表格與型態下定義的是？",
        "options": [
            {
                "label": "DCL",
                "value": "A"
            },
            {
                "label": "DDL",
                "value": "B"
            },
            {
                "label": "DML",
                "value": "C"
            },
            {
                "label": "DHL",
                "value": "D"
            }
        ],
        "answer": [
            "B"
        ],
        "type": "single"
    },
    {
        "id": "3-66",
        "question": "在 SQL 語言的分類中，主要功能在執行新增、刪除、查詢資料等動作為何？",
        "options": [
            {
                "label": "DCL",
                "value": "A"
            },
            {
                "label": "DDL",
                "value": "B"
            },
            {
                "label": "DML",
                "value": "C"
            },
            {
                "label": "DHL",
                "value": "D"
            }
        ],
        "answer": [
            "C"
        ],
        "type": "single"
    },
    {
        "id": "3-67",
        "question": "在 SQL 語言中主要提供資料庫的安全性控管的是？",
        "options": [
            {
                "label": "DCL",
                "value": "A"
            },
            {
                "label": "DDL",
                "value": "B"
            },
            {
                "label": "DML",
                "value": "C"
            },
            {
                "label": "DHL",
                "value": "D"
            }
        ],
        "answer": [
            "A"
        ],
        "type": "single"
    },
    {
        "id": "3-68",
        "question": "下列指令哪一項是在資料定義語言(DDL)提供刪除資料庫的指令？",
        "options": [
            {
                "label": "DELETE",
                "value": "A"
            },
            {
                "label": "DROP",
                "value": "B"
            },
            {
                "label": "DEFINE",
                "value": "C"
            },
            {
                "label": "ERASE",
                "value": "D"
            }
        ],
        "answer": [
            "B"
        ],
        "type": "single"
    },
    {
        "id": "3-69",
        "question": "SQL 的資料定義語言(DDL)所提供的 CREATE 指可用來建立哪些項目？(複選)",
        "options": [
            {
                "label": "資料庫",
                "value": "A"
            },
            {
                "label": "資料表",
                "value": "B"
            },
            {
                "label": "記錄",
                "value": "C"
            },
            {
                "label": "値",
                "value": "D"
            }
        ],
        "answer": [
            "A","B"
        ],
        "type": "multiple"
    },
    {
        "id": "3-70",
        "question": "建立資料表時，設定索引的目的為何？",
        "options": [
            {
                "label": "減少資料表個數",
                "value": "A"
            },
            {
                "label": "減少資料的重複性",
                "value": "B"
            },
            {
                "label": "加快資料庫的讀取速度",
                "value": "C"
            },
            {
                "label": "標記資料的重要性",
                "value": "D"
            }
        ],
        "answer": [
            "C"
        ],
        "type": "single"
    },
    {
        "id": "3-71",
        "question": "下面哪一個索引選項在建立資料表時，每個資料表只能設定一次做為主鍵？",
        "options": [
            {
                "label": "PRIMARY KEY",
                "value": "A"
            },
            {
                "label": "KEY",
                "value": "B"
            },
            {
                "label": "INDEX",
                "value": "C"
            },
            {
                "label": "UNIQUE",
                "value": "D"
            }
        ],
        "answer": [
            "A"
        ],
        "type": "single"
    },
    {
        "id": "3-72",
        "question": "使用 DDL 在建立資料表，對於欄位的設定，下列敘述何項有錯？",
        "options": [
            {
                "label": "NOT NULL 設定代表不允許欄位為空値",
                "value": "A"
            },
            {
                "label": "AUTO_INCREMENT 設定欄位値自動編號，每新增一筆資料，便自動將編號自動加一",
                "value": "B"
            },
            {
                "label": "設為 PRIMARY KEY 的欄位必然須具有 NOT NULL 屬性",
                "value": "C"
            },
            {
                "label": "設為 PRIMARY KEY 的欄位必然須具有 AUTO_INCREMENT 的屬性",
                "value": "D"
            }
        ],
        "answer": [
            "D"
        ],
        "type": "single"
    },
    {
        "id": "3-73",
        "question": "SQL 指令中，有關 ALTER 指令的敘述，下列何者有誤？",
        "options": [
            {
                "label": "屬於 DDL",
                "value": "A"
            },
            {
                "label": "可以將資料表重新命名",
                "value": "B"
            },
            {
                "label": "可以修改資料表中指定欄位的名稱及資料型態",
                "value": "C"
            },
            {
                "label": "屬於 DML",
                "value": "D"
            }
        ],
        "answer": [
            "D"
        ],
        "type": "single"
    },
    {
        "id": "3-74",
        "question": "SQL 指令中，有關 ALTER TABLE 指令的敘述，下列何者有誤？",
        "options": [
            {
                "label": "使用 RENAME 指令可以更改資料表名稱",
                "value": "A"
            },
            {
                "label": "使用 CHANGE 指令可以更改資料表欄位名稱",
                "value": "B"
            },
            {
                "label": "使用 ADD 指令除了可以增加新的欄位以外，還可以用來新增主鍵與索引",
                "value": "C"
            },
            {
                "label": "使用 DELETE 指令可以刪除不必要的資料欄位",
                "value": "D"
            }
        ],
        "answer": [
            "D"
        ],
        "type": "single"
    },
    {
        "id": "3-75",
        "question": "SQL 指令中，使用 DROP 指令無法刪除下列何者？",
        "options": [
            {
                "label": "資料目錄",
                "value": "A"
            },
            {
                "label": "資料欄位",
                "value": "B"
            },
            {
                "label": "資料表格",
                "value": "C"
            },
            {
                "label": "資料庫",
                "value": "D"
            }
        ],
        "answer": [
            "A"
        ],
        "type": "single"
    },
    {
        "id": "3-76",
        "question": "下列指令哪一項是在資料操作語言(DML)提供刪除資料的指令？",
        "options": [
            {
                "label": "DELETE",
                "value": "A"
            },
            {
                "label": "DROP",
                "value": "B"
            },
            {
                "label": "DEFINE",
                "value": "C"
            },
            {
                "label": "ERASE",
                "value": "D"
            }
        ],
        "answer": [
            "A"
        ],
        "type": "single"
    },
    {
        "id": "3-77",
        "question": "下列何者指令不屬於 DML？",
        "options": [
            {
                "label": "INSERT",
                "value": "A"
            },
            {
                "label": "REPLACE",
                "value": "B"
            },
            {
                "label": "FLUSH",
                "value": "C"
            },
            {
                "label": "UPDATE",
                "value": "D"
            }
        ],
        "answer": [
            "C"
        ],
        "type": "single"
    },
    {
        "id": "3-78",
        "question": "在 SQL 語法中，要將一筆資料新增到資料表中，要使用到哪一個指令？",
        "options": [
            {
                "label": "CREATE",
                "value": "A"
            },
            {
                "label": "INSERT",
                "value": "B"
            },
            {
                "label": "ADD",
                "value": "C"
            },
            {
                "label": "UPDATE",
                "value": "D"
            }
        ],
        "answer": [
            "B"
        ],
        "type": "single"
    },
    {
        "id": "3-79",
        "question": "在一成績資料表中欲查詢 mysql 成績介於 60 分至 80 分之間學生所有欄位資料，且輸出結果需以 chinese 成績遞減排序，請問該如何下達 SQL 查詢敘述？(複選)",
        "options": [
            {
                "label": "Select * from score where mysql in(60, 80) order by chinese;",
                "value": "A"
            },
            {
                "label": "Select * from score where mysql > 60 and mysql < 80 order by chinese desc;",
                "value": "B"
            },
            {
                "label": "Select * from score where mysql between 60, 80 order by chinese desc;",
                "value": "C"
            },
            {
                "label": "Select * from score where mysql between 60 and 80 order by chinese desc;",
                "value": "D"
            }
        ],
        "answer": [
            "B","D"
        ],
        "type": "multiple"
    },
    {
        "id": "3-80",
        "question": "在 SQL 的資料操作語言(DML)中，下列何者是用來更新資料的指令？",
        "options": [
            {
                "label": "ALTER",
                "value": "A"
            },
            {
                "label": "CHANGE",
                "value": "B"
            },
            {
                "label": "UPDATE",
                "value": "C"
            },
            {
                "label": "INSERT",
                "value": "D"
            }
        ],
        "answer": [
            "C"
        ],
        "type": "single"
    },
    {
        "id": "3-81",
        "question": "使用 UPDATE 指令更新資料時，下列敘述何者有誤？",
        "options": [
            {
                "label": "加入 WHERE 是用來指定某一筆資料做更新的動作，如果不設定篩選條件，其他欄位可能發生重複的情形，造成資料更新錯誤",
                "value": "A"
            },
            {
                "label": "進行資料更新，同時也可以 UPDATE 來更新資料型態",
                "value": "B"
            },
            {
                "label": "進行資料更新時，可以使用 LIMIT 關鍵字，限制一次最多只能更新資料的筆數",
                "value": "C"
            },
            {
                "label": "使用 LOW_PRIORITY 關鍵字，是要等到資料不使用時，再執行更新的動作",
                "value": "D"
            }
        ],
        "answer": [
            "B"
        ],
        "type": "single"
    },
    {
        "id": "3-82",
        "question": "在 SQL 語法中，有關 DELETE 指令的敘述，下列何者有誤？",
        "options": [
            {
                "label": "屬於 DML",
                "value": "A"
            },
            {
                "label": "用 WHERE 指定刪除的範圍，可以將資料表的資料刪除",
                "value": "B"
            },
            {
                "label": "若沒加上 WHERE 篩選條件指定刪除範圍，則會將整個資料表刪除",
                "value": "C"
            },
            {
                "label": "若沒加上 WHERE 篩選條件指定刪除範圍，則會將整個資料表内資料清空",
                "value": "D"
            }
        ],
        "answer": [
            "C"
        ],
        "type": "single"
    },
    {
        "id": "3-83",
        "question": "在 SQL 的資料控制語言(DCL)中，設定使用者權限的指令為何？",
        "options": [
            {
                "label": "GRANT",
                "value": "A"
            },
            {
                "label": "ALTER",
                "value": "B"
            },
            {
                "label": "REVOKE",
                "value": "C"
            },
            {
                "label": "DROP",
                "value": "D"
            }
        ],
        "answer": [
            "A"
        ],
        "type": "single"
    },
    {
        "id": "3-84",
        "question": "在 SQL 的資料控制語言(DCL)中，取消使用者權限的指令為何？",
        "options": [
            {
                "label": "GRANT",
                "value": "A"
            },
            {
                "label": "ALTER",
                "value": "B"
            },
            {
                "label": "REVOKE",
                "value": "C"
            },
            {
                "label": "DROP",
                "value": "D"
            }
        ],
        "answer": [
            "C"
        ],
        "type": "single"
    },
    {
        "id": "3-85",
        "question": "下列哪些項目屬於 GRANT 指令可以設定的權限値？(複選)",
        "options": [
            {
                "label": "CREATE",
                "value": "A"
            },
            {
                "label": "DROP",
                "value": "B"
            },
            {
                "label": "INSERT",
                "value": "C"
            },
            {
                "label": "DELETE",
                "value": "D"
            }
        ],
        "answer": [
            "A","B","C","D"
        ],
        "type": "multiple"
    },
    {
        "id": "3-86",
        "question": "在 MySQL 中，以 GRANT 指令設定使用者權限時，為確保資料庫的安全，可以使用哪個關鍵字設定使用者的密碼？",
        "options": [
            {
                "label": "PASSWORD",
                "value": "A"
            },
            {
                "label": "IDENTIFIED BY",
                "value": "B"
            },
            {
                "label": "SET",
                "value": "C"
            },
            {
                "label": "INSERT",
                "value": "D"
            }
        ],
        "answer": [
            "B"
        ],
        "type": "single"
    },
    {
        "id": "3-87",
        "question": "在 SQL 的資料控制語言(DCL)中，REVOKE 指令的功用是？",
        "options": [
            {
                "label": "取消使用者權限，但不刪除使用者記錄，使用者仍可連上 MySQL 伺服器",
                "value": "A"
            },
            {
                "label": "取消使用者權限，但不刪除使用者記錄，使用者無法連上 MySQL 伺服器",
                "value": "B"
            },
            {
                "label": "取消使用者權限，同時刪除使用者記錄，使用者無法連上 MySQL 伺服器",
                "value": "C"
            },
            {
                "label": "刪除使用者記錄，但不取消使用者權限，使用者仍可連上 MySQL 伺服器",
                "value": "D"
            }
        ],
        "answer": [
            "A"
        ],
        "type": "single"
    },
    {
        "id": "3-88",
        "question": "在 SQL 語法中，要察看某資料庫底下所有的資料表，應使用下列哪一個敘述？",
        "options": [
            {
                "label": "Display tables From 資料庫名稱;",
                "value": "A"
            },
            {
                "label": "Show tables From 資料庫名稱;",
                "value": "B"
            },
            {
                "label": "Show database From 資料庫名稱;",
                "value": "C"
            },
            {
                "label": "ALTER tables From 資料庫名稱;",
                "value": "D"
            }
        ],
        "answer": [
            "B"
        ],
        "type": "single"
    },
    {
        "id": "3-89",
        "question": "在 SQL 的資料操作語言(DML)中，下列敘述何者錯誤？",
        "options": [
            {
                "label": "REPLACE 敘述作用在唯一鍵値時，會取代舊有的重複資料，不會傳回錯誤",
                "value": "A"
            },
            {
                "label": "INSERT 敘述在新增資料時，若發生重複的唯一鍵値，則會產生錯誤",
                "value": "B"
            },
            {
                "label": "要執行 REPLACE 敘述，使用者要同時具備 INSERT 與 DELETE 的權限",
                "value": "C"
            },
            {
                "label": "使用 GRANT 指令來設定使用者權限，才可使用 REPLACE 敘述，所以 GRANT 指令屬於 DML",
                "value": "D"
            }
        ],
        "answer": [
            "D"
        ],
        "type": "single"
    },
    {
        "id": "3-90",
        "question": "下列 SQL 敘述排列順序，何者正確？",
        "options": [
            {
                "label": "SELECT + FROM + WHERE + ORDER BY + HAVING + GROUP BY",
                "value": "A"
            },
            {
                "label": "SELECT + FROM + WHERE + HAVING + GROUP BY + ORDER BY",
                "value": "B"
            },
            {
                "label": "SELECT + FROM + HAVING + ORDER BY + WHERE + GROUP BY",
                "value": "C"
            },
            {
                "label": "SELECT + FROM + WHERE + GROUP BY + HAVING + ORDER BY",
                "value": "D"
            }
        ],
        "answer": [
            "D"
        ],
        "type": "single"
    },
    {
        "id": "3-91",
        "question": "關於 SQL 語法對於資料的操作，下列敘述何者正確？",
        "options": [
            {
                "label": "DELETE 可以刪除某個欄位値",
                "value": "A"
            },
            {
                "label": "UPDATE 的最小單位為更新一筆記錄",
                "value": "B"
            },
            {
                "label": "INSERT 可以省略欄位名稱",
                "value": "C"
            },
            {
                "label": "SELECT 可以從資料庫中篩選出資料表",
                "value": "D"
            }
        ],
        "answer": [
            "C"
        ],
        "type": "single"
    },
    {
        "id": "3-92",
        "question": "關於 SQL 語法對於資料的操作，下列敘述何者錯誤？",
        "options": [
            {
                "label": "使用 INSERT 指令可在資料表中新增一筆記錄",
                "value": "A"
            },
            {
                "label": "使用 UPDATE 指令搭配 SET 關鍵字，每次至少設定一個欄位値被修改，才能使修改語法成立",
                "value": "B"
            },
            {
                "label": "使用 DELETE 指令，如果省略 WHERE 子句，則會將整個資料庫刪除",
                "value": "C"
            },
            {
                "label": "使用 DELETE 指令，最小的單位為記錄，也就是說，每次最少刪除一筆記錄",
                "value": "D"
            }
        ],
        "answer": [
            "C"
        ],
        "type": "single"
    },
    {
        "id": "3-93",
        "question": "假設資料表格 book(id, name, author, price)，請問下列各項 SQL 敘述，哪些是合法的？(複選)",
        "options": [
            {
                "label": "select * from book where price between 300 and 500 order by price;",
                "value": "A"
            },
            {
                "label": "modify from book where name like '吳%';",
                "value": "B"
            },
            {
                "label": "insert into book values('B004', 'MySQL5', 'CSF', 350);",
                "value": "C"
            },
            {
                "label": "delete from book where name = '%mysql%';",
                "value": "D"
            }
        ],
        "answer": [
            "A","C","D"
        ],
        "type": "multiple"
    },
    {
        "id": "3-94",
        "question": "下面何項是變更資料表格 book 内容的 SQL 敘述？",
        "options": [
            {
                "label": "ALTER book SET price = 300 WHERE id like 'B%';",
                "value": "A"
            },
            {
                "label": "CHANGE book SET price = 300 WHERE id like 'B%';",
                "value": "B"
            },
            {
                "label": "UPDATE book SET price = 300 WHERE id like 'B%';",
                "value": "C"
            },
            {
                "label": "MODIFY book SET price = 300 WHERE id like 'B%';",
                "value": "D"
            }
        ],
        "answer": [
            "C"
        ],
        "type": "single"
    },
    {
        "id": "3-95",
        "question": "假設資料表格 book(id, name, author, price)，下列哪項 SQL 敘述可以將書籍名稱中含有 'MySQL' 的書籍記錄從資料表格 book 刪除？",
        "options": [
            {
                "label": "drop from book where name like '%MySQL%';",
                "value": "A"
            },
            {
                "label": "delete from book where name like '%MySQL%';",
                "value": "B"
            },
            {
                "label": "delete from book where name = 'MySQL';",
                "value": "C"
            },
            {
                "label": "drop from book where name = 'MySQL';",
                "value": "D"
            }
        ],
        "answer": [
            "B"
        ],
        "type": "single"
    },
    {
        "id": "3-96",
        "question": "關於 SQL 的資料定義語言(DDL)的敘述，下列何者有誤？",
        "options": [
            {
                "label": "CREATE INDEX 是用來建立新索引",
                "value": "A"
            },
            {
                "label": "DROP TABLE 用來刪除資料表",
                "value": "B"
            },
            {
                "label": "ALTER DATABASE 用來提示資料庫建立時的錯誤訊息",
                "value": "C"
            },
            {
                "label": "DROP PRIMARY KEY 用來刪除主鍵",
                "value": "D"
            }
        ],
        "answer": [
            "C"
        ],
        "type": "single"
    },
    {
        "id": "3-97",
        "question": "SQL 語法中， UPDATE 指令通常會搭配哪一個關鍵字使用？",
        "options": [
            {
                "label": "ORDER BY",
                "value": "A"
            },
            {
                "label": "FROM",
                "value": "B"
            },
            {
                "label": "WHERE",
                "value": "C"
            },
            {
                "label": "GROUP BY",
                "value": "D"
            }
        ],
        "answer": [
            "C"
        ],
        "type": "single"
    },
    {
        "id": "3-98",
        "question": "下列有關 SQL 的敘述，何者錯誤？",
        "options": [
            {
                "label": "執行 Drop Database 指令時，會主動將用此資料庫的設定及其内容所有的資料表與資料錄一併刪除",
                "value": "A"
            },
            {
                "label": "當下達 SQL 指令時，在指令行的末端加「:」符號，用來提示指令下達完畢，以開始運算執行動作",
                "value": "B"
            },
            {
                "label": "Select 指令是最常使用的 SQL 指令之一，用來從資料表中取出資料",
                "value": "C"
            },
            {
                "label": "SQL 語法的關鍵字與函數名稱沒有大小寫的差别，例如 DROP 與 drop 的作用是一樣",
                "value": "D"
            }
        ],
        "answer": [
            "B"
        ],
        "type": "single"
    },
    {
        "id": "3-99",
        "question": "SQL 語言中，有關 Optimize Table 指令的敘述，下列何項錯誤？",
        "options": [
            {
                "label": "用來最佳化目標資料表内容",
                "value": "A"
            },
            {
                "label": "當使用者大量刪除資料表中的資料或對於變動長度資料型態的欄位有所修正時，執行此指令重整資料表，可提升整體效能",
                "value": "B"
            },
            {
                "label": "執行 Optimize Table 指令時，使用者可繼續對該資料表進行查詢動作",
                "value": "C"
            },
            {
                "label": "屬於 DML",
                "value": "D"
            }
        ],
        "answer": [
            "D"
        ],
        "type": "single"
    },
    {
        "id": "3-100",
        "question": "在 MySQL 中設定或修改權限後，必須以下列哪一個指令進行更新？",
        "options": [
            {
                "label": "Reload;",
                "value": "A"
            },
            {
                "label": "Refresh;",
                "value": "B"
            },
            {
                "label": "Flush Privileges;",
                "value": "C"
            },
            {
                "label": "Revoke;",
                "value": "D"
            }
        ],
        "answer": [
            "C"
        ],
        "type": "single"
    },
    {
        "id": "4-01",
        "question": "使用字串時，需用何種符號前後括住該字串？(複選)",
        "options": [
            {
                "label": "引號 '，例如：'This is string.'",
                "value": "A"
            },
            {
                "label": "雙引號 \"，例如：\"This is string.\"",
                "value": "B"
            },
            {
                "label": "中括號 [ ]，例如：[ This is string. ]",
                "value": "C"
            },
            {
                "label": "大括號 { }，例如：{ This is string. }",
                "value": "D"
            }
        ],
        "answer": [
            "A","B"
        ],
        "type": "multiple"
    },
    {
        "id": "4-02",
        "question": "在操作 MySQL 時，有些字元是有特殊含意的字元(例如：單引號'、雙引號\")，如果想在字串中使用該字元需使用跳脫符號，請問在 MySQL 中的跳脫符號是？",
        "options": [
            {
                "label": "_",
                "value": "A"
            },
            {
                "label": "/",
                "value": "B"
            },
            {
                "label": "\\",
                "value": "C"
            },
            {
                "label": "|",
                "value": "D"
            }
        ],
        "answer": [
            "C"
        ],
        "type": "single"
    },
    {
        "id": "4-03",
        "question": "以下哪些是 MySQL 内建的布林值？(複選)",
        "options": [
            {
                "label": "Bad",
                "value": "A"
            },
            {
                "label": "True",
                "value": "B"
            },
            {
                "label": "Right",
                "value": "C"
            },
            {
                "label": "False",
                "value": "D"
            }
        ],
        "answer": [
            "B","D"
        ],
        "type": "multiple"
    },
    {
        "id": "4-04",
        "question": "下列哪些是 MySQL 提供的基本資料型態？(複選)",
        "options": [
            {
                "label": "數値(Numerical)",
                "value": "A"
            },
            {
                "label": "字串(String)",
                "value": "B"
            },
            {
                "label": "日期(Date and Time)",
                "value": "C"
            },
            {
                "label": "指標(Pointer)",
                "value": "D"
            }
        ],
        "answer": [
            "A","B","C"
        ],
        "type": "multiple"
    },
    {
        "id": "4-05",
        "question": "下列何種資料型態(Data Type)適合用來儲存縣市人口數？",
        "options": [
            {
                "label": "TINYINT",
                "value": "A"
            },
            {
                "label": "SMALLINT",
                "value": "B"
            },
            {
                "label": "MEDIUMINT",
                "value": "C"
            },
            {
                "label": "FLOAT",
                "value": "D"
            }
        ],
        "answer": [
            "C"
        ],
        "type": "single"
    },
    {
        "id": "4-06",
        "question": "以下四種整數型數値資料型態，何者可儲存的範圍最大？",
        "options": [
            {
                "label": "BIGINT",
                "value": "A"
            },
            {
                "label": "INT",
                "value": "B"
            },
            {
                "label": "SMALLINT",
                "value": "C"
            },
            {
                "label": "MEDIUMINT",
                "value": "D"
            }
        ],
        "answer": [
            "A"
        ],
        "type": "single"
    },
    {
        "id": "4-07",
        "question": "整數型數値型態中的 TINYINT 需佔多少 Bytes 的空間？",
        "options": [
            {
                "label": "1",
                "value": "A"
            },
            {
                "label": "2",
                "value": "B"
            },
            {
                "label": "3",
                "value": "C"
            },
            {
                "label": "4",
                "value": "D"
            }
        ],
        "answer": [
            "A"
        ],
        "type": "single"
    },
    {
        "id": "4-08",
        "question": "整數型數值型態中的 SMALLINT 需佔多少 Bytes 的空間？",
        "options": [
            {
                "label": "1",
                "value": "A"
            },
            {
                "label": "2",
                "value": "B"
            },
            {
                "label": "3",
                "value": "C"
            },
            {
                "label": "4",
                "value": "D"
            }
        ],
        "answer": [
            "B"
        ],
        "type": "single"
    },
    {
        "id": "4-09",
        "question": "整數型數値型態中的 MEDIUMINT 需佔多少 Bytes 的空間？",
        "options": [
            {
                "label": "1",
                "value": "A"
            },
            {
                "label": "2",
                "value": "B"
            },
            {
                "label": "3",
                "value": "C"
            },
            {
                "label": "4",
                "value": "D"
            }
        ],
        "answer": [
            "C"
        ],
        "type": "single"
    },
    {
        "id": "4-10",
        "question": "整數型數値型態中的 INT 需佔多少 Bytes 的空間？",
        "options": [
            {
                "label": "1",
                "value": "A"
            },
            {
                "label": "2",
                "value": "B"
            },
            {
                "label": "3",
                "value": "C"
            },
            {
                "label": "4",
                "value": "D"
            }
        ],
        "answer": [
            "D"
        ],
        "type": "single"
    },
    {
        "id": "4-11",
        "question": "整數型數值型態中的 BIGINT 需佔多少 Bytes 的空間？",
        "options": [
            {
                "label": "2",
                "value": "A"
            },
            {
                "label": "3",
                "value": "B"
            },
            {
                "label": "4",
                "value": "C"
            },
            {
                "label": "8",
                "value": "D"
            }
        ],
        "answer": [
            "D"
        ],
        "type": "single"
    },
    {
        "id": "4-12",
        "question": "整數數値型資料型別 TINYINT，在無正負(Unsigned)時，範圍為何？",
        "options": [
            {
                "label": "0 ~ 127",
                "value": "A"
            },
            {
                "label": "0 ~ 255",
                "value": "B"
            },
            {
                "label": "0 ~ 65535",
                "value": "C"
            },
            {
                "label": "0 ~ 16777215",
                "value": "D"
            }
        ],
        "answer": [
            "B"
        ],
        "type": "single"
    },
    {
        "id": "4-13",
        "question": "整數數値型資料型別 TINYINT，在有正負(Signed)時，範圍為何？",
        "options": [
            {
                "label": "-128 ~ 127",
                "value": "A"
            },
            {
                "label": "-32768 ~ 32767",
                "value": "B"
            },
            {
                "label": "-8388608 ~ 8388607",
                "value": "C"
            },
            {
                "label": "-2147483648 ~ 2147483647",
                "value": "D"
            }
        ],
        "answer": [
            "A"
        ],
        "type": "single"
    },
    {
        "id": "4-14",
        "question": "整數數値型資料型別 SMALLINT，在無正負(Unsigned)時範圍為何？",
        "options": [
            {
                "label": "0 ~ 127",
                "value": "A"
            },
            {
                "label": "0 ~ 255",
                "value": "B"
            },
            {
                "label": "0 ~ 65535",
                "value": "C"
            },
            {
                "label": "0 ~ 16777215",
                "value": "D"
            }
        ],
        "answer": [
            "C"
        ],
        "type": "single"
    },
    {
        "id": "4-15",
        "question": "整數數值型資料型別 SMALLINT，在有正負(Signed)時，範圍為何？",
        "options": [
            {
                "label": "-128 ~ 127",
                "value": "A"
            },
            {
                "label": "-32768 ~ 32767",
                "value": "B"
            },
            {
                "label": "-8388608 ~ 8388607",
                "value": "C"
            },
            {
                "label": "-2147483648 ~ 2147483647",
                "value": "D"
            }
        ],
        "answer": [
            "B"
        ],
        "type": "single"
    },
    {
        "id": "4-16",
        "question": "數値範圍 0 ~ 16777215 是何項整數數値型資料型別的範圍？",
        "options": [
            {
                "label": "Signed INT",
                "value": "A"
            },
            {
                "label": "Unsigned INT",
                "value": "B"
            },
            {
                "label": "Signed MEDIUMINT",
                "value": "C"
            },
            {
                "label": "Unsigned MEDIUMINT",
                "value": "D"
            }
        ],
        "answer": [
            "D"
        ],
        "type": "single"
    },
    {
        "id": "4-17",
        "question": "數値範圍 -8388608 ~ 8388607 是何項整數數値型資料型別的範圍？",
        "options": [
            {
                "label": "Signed INT",
                "value": "A"
            },
            {
                "label": "Unsigned INT",
                "value": "B"
            },
            {
                "label": "Signed MEDIUMINT",
                "value": "C"
            },
            {
                "label": "Unsigned MEDIUMINT",
                "value": "D"
            }
        ],
        "answer": [
            "C"
        ],
        "type": "single"
    },
    {
        "id": "4-18",
        "question": "數値範圍 0 ~ 4294967295 是何項整數數值型資料型別的範圍？",
        "options": [
            {
                "label": "Signed INT",
                "value": "A"
            },
            {
                "label": "Unsigned INT",
                "value": "B"
            },
            {
                "label": "Signed MEDIUMINT",
                "value": "C"
            },
            {
                "label": "Unsigned MEDIUMINT",
                "value": "D"
            }
        ],
        "answer": [
            "B"
        ],
        "type": "single"
    },
    {
        "id": "4-19",
        "question": "數値範圍 -2147483648 ~ 214743647 是何項整數數値型資料型別的範圍？",
        "options": [
            {
                "label": "Signed INT",
                "value": "A"
            },
            {
                "label": "Unsigned INT",
                "value": "B"
            },
            {
                "label": "Signed MEDIUMINT",
                "value": "C"
            },
            {
                "label": "Unsigned MEDIUMINT",
                "value": "D"
            }
        ],
        "answer": [
            "A"
        ],
        "type": "single"
    },
    {
        "id": "4-20",
        "question": "數值範圍 0 ~ 18446744073709551615 是何項整數數値型資料型別的範圍？",
        "options": [
            {
                "label": "Signed INT",
                "value": "A"
            },
            {
                "label": "Unsigned INT",
                "value": "B"
            },
            {
                "label": "Signed BIGINT",
                "value": "C"
            },
            {
                "label": "Unsigned BIGINT",
                "value": "D"
            }
        ],
        "answer": [
            "D"
        ],
        "type": "single"
    },
    {
        "id": "4-21",
        "question": "數値範圍 -9223372036854775808 ~ 9223372036854775807 是何項整數數値型資料型別的範圍？",
        "options": [
            {
                "label": "Signed INT",
                "value": "A"
            },
            {
                "label": "Unsigned INT",
                "value": "B"
            },
            {
                "label": "Signed BIGINT",
                "value": "C"
            },
            {
                "label": "Unsigned BIGINT",
                "value": "D"
            }
        ],
        "answer": [
            "C"
        ],
        "type": "single"
    },
    {
        "id": "4-22",
        "question": "新增整數數值型態的欄位時，若於屬性欄增加 ZEROFILL 屬性，例如：「ALTER TABLE 'table' ADD 'num' INT ZEROFILL;」 MySQL 會自動加上何種屬性於該欄位上？",
        "options": [
            {
                "label": "NOT NULL",
                "value": "A"
            },
            {
                "label": "NULL",
                "value": "B"
            },
            {
                "label": "Signed",
                "value": "C"
            },
            {
                "label": "Unsigned",
                "value": "D"
            }
        ],
        "answer": [
            "D"
        ],
        "type": "single"
    },
    {
        "id": "4-23",
        "question": "新增整數數值型態的欄位時，何種型態是「BIGINT UNSIGNED NOT NULL AUTO_INCREMENT UNIQUE」的別名？",
        "options": [
            {
                "label": "SERIAL",
                "value": "A"
            },
            {
                "label": "SERIAL DEFAULT VALUE",
                "value": "B"
            },
            {
                "label": "ZEROFILL",
                "value": "C"
            },
            {
                "label": "UNSIGNED",
                "value": "D"
            }
        ],
        "answer": [
            "A"
        ],
        "type": "single"
    },
    {
        "id": "4-24",
        "question": "新增整數數值型態的欄位時，何種型態是「NOT NULL AUTO_INCREMENT UNIQUE」的別名？",
        "options": [
            {
                "label": "SERIAL",
                "value": "A"
            },
            {
                "label": "SERIAL DEFAULT VALUE",
                "value": "B"
            },
            {
                "label": "ZEROFILL",
                "value": "C"
            },
            {
                "label": "UNSIGNED",
                "value": "D"
            }
        ],
        "answer": [
            "B"
        ],
        "type": "single"
    },
    {
        "id": "4-25",
        "question": "新增整數數值型態的欄位時，若指定欄位位數，例如：INT(5)，此種型態，需與何種屬性搭配方有作用？",
        "options": [
            {
                "label": "SERIAL",
                "value": "A"
            },
            {
                "label": "SERIAL DEFAULT VALUE",
                "value": "B"
            },
            {
                "label": "ZEROFILL",
                "value": "C"
            },
            {
                "label": "UNSIGNED",
                "value": "D"
            }
        ],
        "answer": [
            "C"
        ],
        "type": "single"
    },
    {
        "id": "4-26",
        "question": "新增整數數值型態的欄位時，若指定欄位位數，例如：INT(5)，此種型態，當新增數值的資料為數超過五位時，但仍在 INT 的範圍內，此時有何作用？",
        "options": [
            {
                "label": "僅保留由左邊數過來的前 5 位，超過 5 位的部分捨去",
                "value": "A"
            },
            {
                "label": "僅保留由左邊數過來的後 5 位，超過 5 位的部分捨去",
                "value": "B"
            },
            {
                "label": "無法寫入資料庫",
                "value": "C"
            },
            {
                "label": "沒有影響，仍寫入原值",
                "value": "D"
            }
        ],
        "answer": [
            "D"
        ],
        "type": "single"
    },
    {
        "id": "4-27",
        "question": "新增整數數值型態的欄位時，若指定欄位位數及 ZEROFILL 屬性，如果 INSERT 一筆 num = 30 的資料，此時，若用 SELECT 指令查詢該筆內容，會顯示何種結果？",
        "options": [
            {
                "label": "30",
                "value": "A"
            },
            {
                "label": "00030",
                "value": "B"
            },
            {
                "label": "30.0",
                "value": "C"
            },
            {
                "label": "30.000",
                "value": "D"
            }
        ],
        "answer": [
            "B"
        ],
        "type": "single"
    },
    {
        "id": "4-28",
        "question": "MySQL 對於浮點數資料型態，有支援近似值(M, D)的語法，例如：FLOAT(M, D), REAL(M, D)，其中的 M 為正整數，D 為正整數或 0，(M, D)各代表什麼意義？(複選)",
        "options": [
            {
                "label": "M 代表顯示的總位數",
                "value": "A"
            },
            {
                "label": "M 代表小數位數",
                "value": "B"
            },
            {
                "label": "D 代表顯示的總位數",
                "value": "C"
            },
            {
                "label": "D 代表小數位數",
                "value": "D"
            }
        ],
        "answer": [
            "A","D"
        ],
        "type": "multiple"
    },
    {
        "id": "4-29",
        "question": "MySQL 對於浮點數資料型態，有支援近似值(M, D)的語法，若宣告欄位的資料型態為FLOAT(5, 2)，當新增一筆資料為 352.713，得到的近似值為？",
        "options": [
            {
                "label": "352.713",
                "value": "A"
            },
            {
                "label": "352.71300",
                "value": "B"
            },
            {
                "label": "352.71",
                "value": "C"
            },
            {
                "label": "352",
                "value": "D"
            }
        ],
        "answer": [
            "C"
        ],
        "type": "single"
    },
    {
        "id": "4-30",
        "question": "MySQL 對於浮點數資料型態，有支援近似值(M, D)的語法，新增一筆資料時，當整數位(小數點左邊的位數)超過幾位時，MySQL 會發生「#1264-Out of range value adjusted for column」的錯誤？",
        "options": [
            {
                "label": "M",
                "value": "A"
            },
            {
                "label": "D",
                "value": "B"
            },
            {
                "label": "M-D",
                "value": "C"
            },
            {
                "label": "D-M",
                "value": "D"
            }
        ],
        "answer": [
            "C"
        ],
        "type": "single"
    },
    {
        "id": "4-31",
        "question": "MySQL 對於浮點數資料型態，有支援近似值(M, D)的語法，若宣告欄位的資料型態為FLOAT(5, 2)，當新增一筆資料為 352.798，得到的近似值為？",
        "options": [
            {
                "label": "352.79",
                "value": "A"
            },
            {
                "label": "352.80",
                "value": "B"
            },
            {
                "label": "352",
                "value": "C"
            },
            {
                "label": "352.00",
                "value": "D"
            }
        ],
        "answer": [
            "B"
        ],
        "type": "single"
    },
    {
        "id": "4-32",
        "question": "MySQL 對於浮點數資料型態，有支援近似值(M, D)的語法，若宣告欄位的資料型態為 DECIMAL(5, 2)，則該欄位的有效範圍為何？",
        "options": [
            {
                "label": "0 ~ 99999",
                "value": "A"
            },
            {
                "label": "0 ~ 999.99",
                "value": "B"
            },
            {
                "label": "-99999.99 ~ 99999.99",
                "value": "C"
            },
            {
                "label": "-999.99 ~ 999.99",
                "value": "D"
            }
        ],
        "answer": [
            "D"
        ],
        "type": "single"
    },
    {
        "id": "4-33",
        "question": "在 MySQL中，那些數值型資料型態被用來儲存精確的數值？(複選)",
        "options": [
            {
                "label": "REAL",
                "value": "A"
            },
            {
                "label": "FLOAT",
                "value": "B"
            },
            {
                "label": "NUMERIC",
                "value": "C"
            },
            {
                "label": "DECIMAL",
                "value": "D"
            }
        ],
        "answer": [
            "C","D"
        ],
        "type": "multiple"
    },
    {
        "id": "4-34",
        "question": "在 MySQL 中，浮點數資料型態 NUMERIC 和 DECIMAL 的關係如何？",
        "options": [
            {
                "label": "NUMERIC 儲存範圍較 DECIMAL 大",
                "value": "A"
            },
            {
                "label": "NUMERIC 儲存範圍較 DECIMAL 小",
                "value": "B"
            },
            {
                "label": "NUMERIC 跟 DECIMAL 一樣",
                "value": "C"
            },
            {
                "label": "兩個是不同類型資料型態，無法比較",
                "value": "D"
            }
        ],
        "answer": [
            "C"
        ],
        "type": "single"
    },
    {
        "id": "4-35",
        "question": "在 MySQL 中，浮點數資料型態 NUMERIC 和 DECIMAL 除了支援(M, D)的語法外，也支援(M)的語法，請問兩者間有何關係？",
        "options": [
            {
                "label": "(M) = (M, 0)",
                "value": "A"
            },
            {
                "label": "(M) = (M, 100)",
                "value": "B"
            },
            {
                "label": "(M) = (0, M)",
                "value": "C"
            },
            {
                "label": "(M) = (100, M)",
                "value": "D"
            }
        ],
        "answer": [
            "A"
        ],
        "type": "single"
    },
    {
        "id": "4-36",
        "question": "在 MySQL 中，浮點數資料型態 NUMERIC 和 DECIMAL 可存取的最大總位數為幾位？",
        "options": [
            {
                "label": "55",
                "value": "A"
            },
            {
                "label": "60",
                "value": "B"
            },
            {
                "label": "65",
                "value": "C"
            },
            {
                "label": "70",
                "value": "D"
            }
        ],
        "answer": [
            "C"
        ],
        "type": "single"
    },
    {
        "id": "4-37",
        "question": "在 MySQL 中，下列哪些是時間日期資料型態？(複選)",
        "options": [
            {
                "label": "DATETIME",
                "value": "A"
            },
            {
                "label": "DATE",
                "value": "B"
            },
            {
                "label": "TIMESTAMP",
                "value": "C"
            },
            {
                "label": "TIME",
                "value": "D"
            }
        ],
        "answer": [
            "A","B","C","D"
        ],
        "type": "multiple"
    },
    {
        "id": "4-38",
        "question": "在 MySQL 中，哪一種時間日期資料型態有自動更新的特性？",
        "options": [
            {
                "label": "DATETIME",
                "value": "A"
            },
            {
                "label": "DATE",
                "value": "B"
            },
            {
                "label": "TIMESTAMP",
                "value": "C"
            },
            {
                "label": "TIME",
                "value": "D"
            }
        ],
        "answer": [
            "C"
        ],
        "type": "single"
    },
    {
        "id": "4-39",
        "question": "在 MySQL 中，當欄位為時間日期資料型態時，日期的顯示格式為何？",
        "options": [
            {
                "label": "日-月-年",
                "value": "A"
            },
            {
                "label": "年-月-日",
                "value": "B"
            },
            {
                "label": "月-日-年",
                "value": "C"
            },
            {
                "label": "年-日-月",
                "value": "D"
            }
        ],
        "answer": [
            "B"
        ],
        "type": "single"
    },
    {
        "id": "4-40",
        "question": "在 MySQL 中，以下那些時間日期資料型態可以同時顯示日期及時間？(複選)",
        "options": [
            {
                "label": "DATETIME",
                "value": "A"
            },
            {
                "label": "DATE",
                "value": "B"
            },
            {
                "label": "TIMESTAMP",
                "value": "C"
            },
            {
                "label": "TIME",
                "value": "D"
            }
        ],
        "answer": [
            "A","C"
        ],
        "type": "multiple"
    },
    {
        "id": "4-41",
        "question": "在 MySQL 中，時間日期資料型態 Date 的範圍為何？",
        "options": [
            {
                "label": "0000-01-01 ~ 9999-12-31",
                "value": "A"
            },
            {
                "label": "1970-01-01 ~ 9000-12-31",
                "value": "B"
            },
            {
                "label": "1000-01-01 ~ 9999-12-31",
                "value": "C"
            },
            {
                "label": "1970-01-01 ~ 9999-12-31",
                "value": "D"
            }
        ],
        "answer": [
            "C"
        ],
        "type": "single"
    },
    {
        "id": "4-42",
        "question": "在 MySQL 中，時間日期資料型態 DATETIME 的範圍為何？",
        "options": [
            {
                "label": "0000-01-01 00:00:00 ~ 9999-12-31 23:59:59",
                "value": "A"
            },
            {
                "label": "1970-01-01 00:00:00 ~ 9000-12-31 23:59:59",
                "value": "B"
            },
            {
                "label": "1000-01-01 00:00:00 ~ 9999-12-31 23:59:59",
                "value": "C"
            },
            {
                "label": "1970-01-01 00:00:00 ~ 9999-12-31 23:59:59",
                "value": "D"
            }
        ],
        "answer": [
            "C"
        ],
        "type": "single"
    },
    {
        "id": "4-43",
        "question": "在 MySQL 中，時間日期資料型態支援「非嚴格型」語法，任何標點符號均可作為日期或時間的間隔符號，以下哪些是合法的日期輸入？(複選)",
        "options": [
            {
                "label": "06-10-31",
                "value": "A"
            },
            {
                "label": "06@10@31",
                "value": "B"
            },
            {
                "label": "06.10.31",
                "value": "C"
            },
            {
                "label": "06@10.31",
                "value": "D"
            }
        ],
        "answer": [
            "A","B","C","D"
        ],
        "type": "multiple"
    },
    {
        "id": "4-44",
        "question": "在 MySQL 中，時間日期資料型態 DATETIME 顯示的資料格式為何？",
        "options": [
            {
                "label": "年-月-日 時：分：秒",
                "value": "A"
            },
            {
                "label": "日-月-年 時：分：秒",
                "value": "B"
            },
            {
                "label": "時：分：秒 年-月-日",
                "value": "C"
            },
            {
                "label": "時：分：秒 日-月-年",
                "value": "D"
            }
        ],
        "answer": [
            "A"
        ],
        "type": "single"
    },
    {
        "id": "4-45",
        "question": "在 MySQL 中，時間日期資料型態的資料支援純數字型格式，例如：061027101220 代表哪一個時間？",
        "options": [
            {
                "label": "1920年10月12日 6時10分27秒",
                "value": "A"
            },
            {
                "label": "2020年10月12日 6時10分27秒",
                "value": "B"
            },
            {
                "label": "1906年10月27日 10時12分20秒",
                "value": "C"
            },
            {
                "label": "2006年10月27日 10時12分20秒",
                "value": "D"
            }
        ],
        "answer": [
            "D"
        ],
        "type": "single"
    },
    {
        "id": "4-46",
        "question": "MySQL 中，在時間日期資料型態 DATETIME 欄位填入 DATE 資料型態的資料，例如：06-10-20，試問時、分、秒的部分會如何處理？",
        "options": [
            {
                "label": "因為格式不對，所以資料無法填入",
                "value": "A"
            },
            {
                "label": "不顯示時、分、秒的部分，即顯示 2006-10-20",
                "value": "B"
            },
            {
                "label": "顯示 2006-10-20 00:00:00",
                "value": "C"
            },
            {
                "label": "顯示 00:00:00 2006-10-20",
                "value": "D"
            }
        ],
        "answer": [
            "C"
        ],
        "type": "single"
    },
    {
        "id": "4-47",
        "question": "MySQL 中，在時間日期資料型態 TIMESTAMP 的顯示內容，跟哪一種資料型態的內容相同？",
        "options": [
            {
                "label": "DATE",
                "value": "A"
            },
            {
                "label": "DATETIME",
                "value": "B"
            },
            {
                "label": "TIME",
                "value": "C"
            },
            {
                "label": "YEAR",
                "value": "D"
            }
        ],
        "answer": [
            "B"
        ],
        "type": "single"
    },
    {
        "id": "4-48",
        "question": "MySQL 中，欄位為 TIMESTAMP 時，設定 DEFAULT 為下列何值時，每次新增資料，均會自動將目前時間填入？",
        "options": [
            {
                "label": "CURRENT_TIMESTAMP",
                "value": "A"
            },
            {
                "label": "CURRENT_TIME",
                "value": "B"
            },
            {
                "label": "NOW",
                "value": "C"
            },
            {
                "label": "NOW_TIME",
                "value": "D"
            }
        ],
        "answer": [
            "A"
        ],
        "type": "single"
    },
    {
        "id": "4-49",
        "question": "MySQL 中，欄位為 TIMESTAMP 時，設定 DEFAULT 為 CURRENT_TIMESTAMP 的欄位可以有幾個？",
        "options": [
            {
                "label": "沒有限制",
                "value": "A"
            },
            {
                "label": "10",
                "value": "B"
            },
            {
                "label": "2",
                "value": "C"
            },
            {
                "label": "1",
                "value": "D"
            }
        ],
        "answer": [
            "D"
        ],
        "type": "single"
    },
    {
        "id": "4-50",
        "question": "MySQL 中，欄位為 TIMESTAMP 時，設定 DEFAULT 為 NULL 的欄位有多個的時候，第幾個欄為其特性等同於 DEFAULT 為 CURRENT_TIMESTAMP？",
        "options": [
            {
                "label": "沒有限制",
                "value": "A"
            },
            {
                "label": "最後面的欄位",
                "value": "B"
            },
            {
                "label": "最前面的欄位",
                "value": "C"
            },
            {
                "label": "第二個欄位",
                "value": "D"
            }
        ],
        "answer": [
            "C"
        ],
        "type": "single"
    },
    {
        "id": "4-51",
        "question": "MySQL 中，欄位為 TIMESTAMP 時，若要在資料新增或更新時，自動記錄目前時間，除了可以設定 DEFAULT 值外，也可透過設定何種屬性，達到相同效果？",
        "options": [
            {
                "label": "TIMEZONE",
                "value": "A"
            },
            {
                "label": "ON TIME",
                "value": "B"
            },
            {
                "label": "ON UPDATE CURRENT_TIMESTAMP",
                "value": "C"
            },
            {
                "label": "ON INSERT CURRENT_TIMESTAMP",
                "value": "D"
            }
        ],
        "answer": [
            "C"
        ],
        "type": "single"
    },
    {
        "id": "4-52",
        "question": "欄位為時間日期資料型態 YEAR 時，有效範圍為何？",
        "options": [
            {
                "label": "1901 ~ 2155",
                "value": "A"
            },
            {
                "label": "1970 ~ 2999",
                "value": "B"
            },
            {
                "label": "0001 ~ 9999",
                "value": "C"
            },
            {
                "label": "2000 ~ 3000",
                "value": "D"
            }
        ],
        "answer": [
            "A"
        ],
        "type": "single"
    },
    {
        "id": "4-53",
        "question": "字串型態 CHAR，可存字數的有效範圍為何？",
        "options": [
            {
                "label": "0 ~ 255",
                "value": "A"
            },
            {
                "label": "0 ~ 511",
                "value": "B"
            },
            {
                "label": "0 ~ 1021",
                "value": "C"
            },
            {
                "label": "0 ~ 65535",
                "value": "D"
            }
        ],
        "answer": [
            "A"
        ],
        "type": "single"
    },
    {
        "id": "4-54",
        "question": "字串型態 VARCHAR，可存字數的有效範圍為何？",
        "options": [
            {
                "label": "0 ~ 255",
                "value": "A"
            },
            {
                "label": "0 ~ 511",
                "value": "B"
            },
            {
                "label": "0 ~ 1021",
                "value": "C"
            },
            {
                "label": "0 ~ 65535",
                "value": "D"
            }
        ],
        "answer": [
            "A"
        ],
        "type": "single"
    },
    {
        "id": "4-55",
        "question": "對於字串型態 CHAR、VARCHAR 的敘述，下列何者正確？(複選)",
        "options": [
            {
                "label": "CHAR 的資料，若長度未滿時，會在右邊填補空格補足長度",
                "value": "A"
            },
            {
                "label": "讀取 CHAR 的資料時，會先將右邊的空格去除，再顯示",
                "value": "B"
            },
            {
                "label": "VARCHAR 的資料，若長度未滿時，不會填補空格，但會記錄長度",
                "value": "C"
            },
            {
                "label": "讀取 VARCHAR 的資料時，不需先去除空格",
                "value": "D"
            }
        ],
        "answer": [
            "A","B","C","D"
        ],
        "type": "multiple"
    },
    {
        "id": "4-56",
        "question": "當儲存資料字數很多時，可使用字串型態的 TEXT 類型資料型別，以下哪些屬於字串型態 TEXT 類型？(複選)",
        "options": [
            {
                "label": "TINYTEXT",
                "value": "A"
            },
            {
                "label": "TEXT",
                "value": "B"
            },
            {
                "label": "MEDIUMTEXT",
                "value": "C"
            },
            {
                "label": "LONGTEXT",
                "value": "D"
            }
        ],
        "answer": [
            "A","B","C","D"
        ],
        "type": "multiple"
    },
    {
        "id": "4-57",
        "question": "對於字串型態的 TEXT 類型，下列敘述何者正確？(複選)",
        "options": [
            {
                "label": "包含四種資料型別(TINYTEXT, TEXT, MEDIUMTEXT, LONGTEXT)",
                "value": "A"
            },
            {
                "label": "不可以設定初始值",
                "value": "B"
            },
            {
                "label": "可以設定初始值",
                "value": "C"
            },
            {
                "label": "TINYTEXT 不屬於 TEXT 類型",
                "value": "D"
            }
        ],
        "answer": [
            "A","B"
        ],
        "type": "multiple"
    },
    {
        "id": "4-58",
        "question": "請觀看附圖作答",
        "media": {
            "type": "table",
            "data": [
                ["當建立ENUM資料欄位時，需定義列舉值，"],
                ["例如：number ENUM('one', 'two', 'three')"],
                ["在做資料搜尋時，除了可指定列舉值外，"],
                ["例如：where number = 'one'，"],
                ["另外也可指定列舉索引，"],
                ["例如：where number = 2，"],
                ["試問 'one' 的列舉索引是多少？"]
            ]
        },
        "options": [
            {"label": "0", "value": "A"},
            {"label": "1", "value": "B"},
            {"label": "2", "value": "C"},
            {"label": "3", "value": "D"}
        ],
        "answer": ["B"],
        "type": "single"
    },
    {
        "id": "4-59",
        "question": "當建立 ENUM 資料欄位時，最多可指定多少個列舉值？",
        "options": [
            {
                "label": "127",
                "value": "A"
            },
            {
                "label": "255",
                "value": "B"
            },
            {
                "label": "1023",
                "value": "C"
            },
            {
                "label": "65535",
                "value": "D"
            }
        ],
        "answer": [
            "D"
        ],
        "type": "single"
    },
    {
        "id": "4-60",
        "question": "請觀看附圖作答",
        "media": {
            "type": "table",
            "data": [
                ["當建立 SET 資料欄位時，需定義列舉值，"],
                ["例如：numSet SET('a', 'b, 'c', 'd')，每個集合值代表一個數值"],
                ["例如：'a' 是第一個元素，值為二進位的 0001，也是十進位的 1，"],
                ["'b' 是第二個元素，值為二進位的 0010，也是十進位的 2，"],
                ["如果指定為：numSet = 9，試問會得到何種結果？"]
            ]
        },
        "options": [
            {"label": "'a'", "value": "A"},
            {"label": "'a,b'", "value": "B"},
            {"label": "'a,c'", "value": "C"},
            {"label": "'a,d'", "value": "D"}
        ],
        "answer": ["D"],
        "type": "single"
    },
    {
        "id": "4-61",
        "question": "在一個表格中，通常我們找出最具代表該表格資料的欄位，建立一個 Key 值，這個 Key 稱為？",
        "options": [
            {
                "label": "PRIMARY KEY",
                "value": "A"
            },
            {
                "label": "INDEX",
                "value": "B"
            },
            {
                "label": "UNIQUE",
                "value": "C"
            },
            {
                "label": "FULLTEXT",
                "value": "D"
            }
        ],
        "answer": [
            "A"
        ],
        "type": "single"
    },
    {
        "id": "4-62",
        "question": "在一個表格中，某些欄位常常被拿來做成搜尋的依據，為了讓搜尋速度加快，通常我們會將這些欄位設成？",
        "options": [
            {
                "label": "PRIMARY KEY",
                "value": "A"
            },
            {
                "label": "INDEX",
                "value": "B"
            },
            {
                "label": "UNIQUE",
                "value": "C"
            },
            {
                "label": "FULLTEXT",
                "value": "D"
            }
        ],
        "answer": [
            "B"
        ],
        "type": "single"
    },
    {
        "id": "4-63",
        "question": "在一個表格中，某些欄位的值是不能重複的，例如：帳號，通常我們會把這種欄位設成下列何項？",
        "options": [
            {
                "label": "PRIMARY KEY",
                "value": "A"
            },
            {
                "label": "INDEX",
                "value": "B"
            },
            {
                "label": "UNIQUE",
                "value": "C"
            },
            {
                "label": "FULLTEXT",
                "value": "D"
            }
        ],
        "answer": [
            "C"
        ],
        "type": "single"
    },
    {
        "id": "4-64",
        "question": "在一個表格中，某些欄位的值內容非常大，且常常會被搜尋其內容，做全文檢索的功能，通常我們會把這種欄位設成？",
        "options": [
            {
                "label": "PRIMARY KEY",
                "value": "A"
            },
            {
                "label": "INDEX",
                "value": "B"
            },
            {
                "label": "UNIQUE",
                "value": "C"
            },
            {
                "label": "FULLTEXT",
                "value": "D"
            }
        ],
        "answer": [
            "D"
        ],
        "type": "single"
    },
    {
        "id": "4-65",
        "question": "在運算式中，試問執行 SELECT (1+2)*3; 的結果為何？",
        "options": [
            {
                "label": "7",
                "value": "A"
            },
            {
                "label": "9",
                "value": "B"
            },
            {
                "label": "6",
                "value": "C"
            },
            {
                "label": "5",
                "value": "D"
            }
        ],
        "answer": [
            "B"
        ],
        "type": "single"
    },
    {
        "id": "4-66",
        "question": "在運算式中，比較結果若成立，會得到 1，若結果不成立，會得到 0，試問執行 SELECT 1 <> 10; 結果為何？",
        "options": [
            {
                "label": "1",
                "value": "A"
            },
            {
                "label": "0",
                "value": "B"
            },
            {
                "label": "-1",
                "value": "C"
            },
            {
                "label": "10",
                "value": "D"
            }
        ],
        "answer": [
            "A"
        ],
        "type": "single"
    },
    {
        "id": "4-67",
        "question": "在運算式中，BETWEEN 運算子可用來檢驗數值區間，試問執行 SELECT 2 BETWEEN 2 AND 3; 結果為何？",
        "options": [
            {
                "label": "1",
                "value": "A"
            },
            {
                "label": "0",
                "value": "B"
            },
            {
                "label": "-1",
                "value": "C"
            },
            {
                "label": "10",
                "value": "D"
            }
        ],
        "answer": [
            "A"
        ],
        "type": "single"
    },
    {
        "id": "4-68",
        "question": "在運算式中，BETWEEN 運算子可用來檢驗數值區間，試問執行 SELECT 1 BETWEEN 2 AND 3; 結果為何？",
        "options": [
            {
                "label": "1",
                "value": "A"
            },
            {
                "label": "0",
                "value": "B"
            },
            {
                "label": "-1",
                "value": "C"
            },
            {
                "label": "10",
                "value": "D"
            }
        ],
        "answer": [
            "B"
        ],
        "type": "single"
    },
    {
        "id": "4-68",
        "question": "在運算式中，BETWEEN 運算子可用來檢驗數值區間，試問執行 SELECT 1 NOT BETWEEN 2 AND 3; 結果為何？",
        "options": [
            {
                "label": "1",
                "value": "A"
            },
            {
                "label": "0",
                "value": "B"
            },
            {
                "label": "-1",
                "value": "C"
            },
            {
                "label": "10",
                "value": "D"
            }
        ],
        "answer": [
            "A"
        ],
        "type": "single"
    },
    {
        "id": "5-01",
        "question": "在運算式中，COALESCE 函式可傳回資料中第一個非 NULL 的值，試問執行 SELECT COALESCE (NULL, 1, 2, 3); 結果為何？",
        "options": [
            {
                "label": "NULL",
                "value": "A"
            },
            {
                "label": "1",
                "value": "B"
            },
            {
                "label": "2",
                "value": "C"
            },
            {
                "label": "3",
                "value": "D"
            }
        ],
        "answer": [
            "B"
        ],
        "type": "single"
    },
    {
        "id": "5-02",
        "question": "在運算式中，GREATEST 函式可傳回資料中最大的值，試問執行 SELECT GREATEST (34.0, 3.0, 5.0, 767.0); 結果為何？",
        "options": [
            {
                "label": "34.0",
                "value": "A"
            },
            {
                "label": "3.0",
                "value": "B"
            },
            {
                "label": "5.0",
                "value": "C"
            },
            {
                "label": "767.0",
                "value": "D"
            }
        ],
        "answer": [
            "D"
        ],
        "type": "single"
    },
    {
        "id": "5-03",
        "question": "在運算式中，ISNULL 函式可用來檢驗括號內的值是否為 NULL，試問執行 SELECT ISNULL (1/0); 結果為何？",
        "options": [
            {
                "label": "0",
                "value": "A"
            },
            {
                "label": "1",
                "value": "B"
            },
            {
                "label": "2",
                "value": "C"
            },
            {
                "label": "3",
                "value": "D"
            }
        ],
        "answer": [
            "B"
        ],
        "type": "single"
    },
    {
        "id": "5-04",
        "question": "在運算式中，ADDDATE 函式可用來計算增加一段時間後的日期，試問執行附圖中的 SQL 語法後結果為何？",
        "media": {
            "type": "table",
            "data": [
            ["SELECT ADDDATE ('2006-11-01', INTERVAL 30 DAY);"]
            ]
        },
        "options": [
            {"label": "'2006-12-01'", "value": "A"},
            {"label": "'2006-11-31'", "value": "B"},
            {"label": "'2006-12-01 00:00:00'", "value": "C"},
            {"label": "'2006-11-31 00:00:00'", "value": "D"}
        ],
        "answer": ["A"],
        "type": "single"
    },
    {
        "id": "5-05",
        "question": "在運算式中，INTERVAL 函式可用來檢驗括號內第一個值，位在括號內其他數值的區間，試問執行附圖中的 SQL 語法後結果為何？",
        "media": {
            "type": "table",
            "data":[
            ["SELECT INTERVAL (5, 1, 10, 100);"]
            ]
        },
        "options": [
            {"label": "0", "value": "A"},
            {"label": "1", "value": "B"},
            {"label": "2", "value": "C"},
            {"label": "3", "value": "D"}
        ],
        "answer": ["B"],
        "type": "single"
    },
    {
        "id": "5-06",
        "question": "在運算式中，IF 函式可用來檢測條件並回傳適當值，試問執行 SELECT IF (1 > 2, 2, 3);結果為何？",
        "options": [
            {
                "label": "1",
                "value": "A"
            },
            {
                "label": "2",
                "value": "B"
            },
            {
                "label": "3",
                "value": "C"
            },
            {
                "label": "4",
                "value": "D"
            }
        ],
        "answer": [
            "C"
        ],
        "type": "single"
    },
    {
        "id": "5-07",
        "question": "哪一個函式可將一個時間作時區的轉換？",
        "options": [
            {
                "label": "CONVERT_TIME",
                "value": "A"
            },
            {
                "label": "CONVERT()",
                "value": "B"
            },
            {
                "label": "CONVERT_TZ()",
                "value": "C"
            },
            {
                "label": "CONVERT_TIMEZONE",
                "value": "D"
            }
        ],
        "answer": [
            "C"
        ],
        "type": "single"
    },
    {
        "id": "5-08",
        "question": "已知 A 的 ASCII 編碼為 65，試問執行 SELECT ASCII ('C'); 結果為何？",
        "options": [
            {
                "label": "66",
                "value": "A"
            },
            {
                "label": "67",
                "value": "B"
            },
            {
                "label": "68",
                "value": "C"
            },
            {
                "label": "69",
                "value": "D"
            }
        ],
        "answer": [
            "B"
        ],
        "type": "single"
    },
    {
        "id": "5-09",
        "question": "BIN 函數，可回傳傳入參數的二進位字串，試問執行 SELECT BIN (12); 結果為何？",
        "options": [
            {
                "label": "12",
                "value": "A"
            },
            {
                "label": "'12'",
                "value": "B"
            },
            {
                "label": "1100",
                "value": "C"
            },
            {
                "label": "'1100'",
                "value": "D"
            }
        ],
        "answer": [
            "D"
        ],
        "type": "single"
    },
    {
        "id": "5-10",
        "question": "BIT_LENGTH 函數，可回傳傳入字串所佔的位元數，試問執行 SELECT BIT_LENGTH ('text'); 結果如何？",
        "options": [
            {
                "label": "64",
                "value": "A"
            },
            {
                "label": "32",
                "value": "B"
            },
            {
                "label": "16",
                "value": "C"
            },
            {
                "label": "4",
                "value": "D"
            }
        ],
        "answer": [
            "B"
        ],
        "type": "single"
    },
    {
        "id": "5-11",
        "question": "CHAR 函數，可將字元編碼轉為字元，假如 'A' 的字元編碼為 65，試問執行 SELECT CHAR (72, 69, 76, 76, 79);結果如何？",
        "options": [
            {
                "label": "TROOP",
                "value": "A"
            },
            {
                "label": "CELLA",
                "value": "B"
            },
            {
                "label": "HELLO",
                "value": "C"
            },
            {
                "label": "GIDDY",
                "value": "D"
            }
        ],
        "answer": [
            "C"
        ],
        "type": "single"
    },
    {
        "id": "5-12",
        "question": "CHAR_LENGTH 函數，可回傳傳入字串參數的字數(Character)，試問執行 SELECT CHAR_LENGTH ('大家好'); 結果為何？",
        "options": [
            {
                "label": "3",
                "value": "A"
            },
            {
                "label": "6",
                "value": "B"
            },
            {
                "label": "9",
                "value": "C"
            },
            {
                "label": "12",
                "value": "D"
            }
        ],
        "answer": [
            "A"
        ],
        "type": "single"
    },
    {
        "id": "5-13",
        "question": "GET_FORMAT 函式可以取得各個標準的時間日期格式，試問執行 SELECT GET_FORMAT(DATE, 'ISO'); 會得到何種結果？",
        "options": [
            {
                "label": "'%m.%d.%Y'",
                "value": "A"
            },
            {
                "label": "'%Y-%m-%d'",
                "value": "B"
            },
            {
                "label": "'%d.%m.%Y'",
                "value": "C"
            },
            {
                "label": "'%Y%m%d'",
                "value": "D"
            }
        ],
        "answer": [
            "B"
        ],
        "type": "single"
    },
    {
        "id": "5-14",
        "question": "CONCAT 函數，可將傳入的字串參數串接後回傳，試問執行 SELECT CONCAT ('My', 'S', 'QL'); 結果為何？",
        "options": [
            {
                "label": "My",
                "value": "A"
            },
            {
                "label": "MyS",
                "value": "B"
            },
            {
                "label": "MySQL",
                "value": "C"
            },
            {
                "label": "LQSyM",
                "value": "D"
            }
        ],
        "answer": [
            "C"
        ],
        "type": "single"
    },
    {
        "id": "5-15",
        "question": "MAKEDATE 函數可用來計算一年中第幾天的日期，試問執行 SELECT MAKEDATE ('2006', 100); 結果為何？",
        "options": [
            {
                "label": "'2006-03-10'",
                "value": "A"
            },
            {
                "label": "'2006-04-10'",
                "value": "B"
            },
            {
                "label": "'2006-05-10'",
                "value": "C"
            },
            {
                "label": "'2006-06-10'",
                "value": "D"
            }
        ],
        "answer": [
            "B"
        ],
        "type": "single"
    },
    {
        "id": "5-16",
        "question": "CONCAT_WS 函數，是 CONCAT 函數的特殊型，第一個輸入參數為分隔符號，可將傳入的字串參數以分隔符號串接後回傳，試問執行附圖中的 SQL 語法後結果為何？",
        "media": {
        "type": "table",
        "data": [
            ["SELECT CONCAT_WS (',', 'FIRST name', 'Second name', 'Last name');"]
        ]
        },
        "options": [
            {"label": "'FIRST nameSecond nameLast name'", "value": "A"},
            {"label": "'FIRST name'Second name'Last name'", "value": "B"},
            {"label": "'FIRST name, Second name, Last name'", "value": "C"},
            {"label": "'FIRSTnameSecondnameLastname'", "value": "D"}
        ],
        "answer": ["C"],
        "type": "single"
    },
    {
        "id": "5-17",
        "question": "QUARTER 函數可計算輸入日期屬於該年的第幾季，試問執行 SELECT QUARTER('2006-11-15'); 會得到何種結果？",
        "options": [
            {
                "label": "1",
                "value": "A"
            },
            {
                "label": "2",
                "value": "B"
            },
            {
                "label": "3",
                "value": "C"
            },
            {
                "label": "4",
                "value": "D"
            }
        ],
        "answer": [
            "D"
        ],
        "type": "single"
    },
    {
        "id": "5-18",
        "question": "ELT 函數可依據輸入參數值取得對應的字串，試問執行 SELECT ELT (1, 'ej', 'Heja', 'hej', 'foo'); 結果為何？",
        "options": [
            {
                "label": "'ej'",
                "value": "A"
            },
            {
                "label": "'Heja'",
                "value": "B"
            },
            {
                "label": "'2'",
                "value": "C"
            },
            {
                "label": "'10'",
                "value": "D"
            }
        ],
        "answer": [
            "A"
        ],
        "type": "single"
    },
    {
        "id": "5-19",
        "question": "EXPORT_SET 函數可依據輸入參數的位元值，顯示對應的 On 值、Off 值及分隔符號，試問執行附圖中的 SQL 語法後結果為何？",
        "media": {
            "type": "table",
            "data": [
            ["SELECT EXPORT_SET (5, 'Y', 'N', ',', 4);"]
            ]
        },
        "options": [
            {"label": "'N, Y, N, Y'", "value": "A"},
            {"label": "'Y, N, Y, N'", "value": "B"},
            {"label": "'NYNY'", "value": "C"},
            {"label": "'YNYN'", "value": "D"}
        ],
        "answer": ["B"],
        "type": "single"
    },
    {
        "id": "5-20",
        "question": "FIELD 函數可傳回字串比對後的位置，試問執行附圖中的 SQL 語法後結果為何？",
        "media" :{
            "type": "table",
            "data": [
            ["SELECT FIELD ('ej', 'Hej', 'ej', 'Heja', 'hej', 'foo');"]
            ]
        },
        "options": [
            {"label": "0", "value": "A"},
            {"label": "1", "value": "B"},
            {"label": "2", "value": "C"},
            {"label": "3", "value": "D"}
        ],
        "answer": ["C"],
        "type": "single"
    },
    {
        "id": "5-21",
        "question": "YEARWEEK 函數會對一個傳入的日期，計算該日在當年的第幾個星期，連同年份一起傳回，試問執行附圖中的 SQL 語法後結果為何？",
        "media": {
            "type": "table",
            "data": [
            ["SELECT YEARWEEK ('2006-11-01');"]
            ]
        },
        "options": [
            {"label": "200644", "value": "A"},
            {"label": "442006", "value": "B"},
            {"label": "2006-44", "value": "C"},
            {"label": "44-2006", "value": "D"}
        ],
        "answer": ["A"],
        "type": "single"
    },
    {
        "id": "5-22",
        "question": "FIND_IN_SET 函數可傳回字串位於以「,」分隔的字串組中的位置，試問執行 SELECT FIND_IN_SET ('b', 'a,b,c,d'); 結果為何？",
        "options": [
            {
                "label": "0",
                "value": "A"
            },
            {
                "label": "1",
                "value": "B"
            },
            {
                "label": "2",
                "value": "C"
            },
            {
                "label": "3",
                "value": "D"
            }
        ],
        "answer": [
            "C"
        ],
        "type": "single"
    },
    {
        "id": "5-23",
        "question": "HEX 函數可將十進制數字轉為十六進制或將字串轉為編碼值，試問執行 SELECT HEX (255); 結果為何？",
        "options": [
            {
                "label": "255",
                "value": "A"
            },
            {
                "label": "FF",
                "value": "B"
            },
            {
                "label": "552",
                "value": "C"
            },
            {
                "label": "FFFF",
                "value": "D"
            }
        ],
        "answer": [
            "B"
        ],
        "type": "single"
    },
    {
        "id": "5-24",
        "question": "INSERT 函數可做字串取代的功能，試問執行 SELECT INSERT('Quadratic', 3, 4, 'What'); 結果為何？",
        "options": [
            {
                "label": "Quadratic",
                "value": "A"
            },
            {
                "label": "QuaWhattic",
                "value": "B"
            },
            {
                "label": "QuWhatadratic",
                "value": "C"
            },
            {
                "label": "QuWhattic",
                "value": "D"
            }
        ],
        "answer": [
            "D"
        ],
        "type": "single"
    },
    {
        "id": "5-25",
        "question": "INSTR 函數可回傳搜尋字串第一次出現的位置，試問執行 SELECT INSTR ('foobarbar', 'bar'); 結果為何？",
        "options": [
            {
                "label": "4",
                "value": "A"
            },
            {
                "label": "5",
                "value": "B"
            },
            {
                "label": "6",
                "value": "C"
            },
            {
                "label": "7",
                "value": "D"
            }
        ],
        "answer": [
            "A"
        ],
        "type": "single"
    },
    {
        "id": "5-26",
        "question": "LEFT 函數可回傳最左側的部分字串，試問執行 SELECT LEFT ('foobarbar', 5); 結果為何？",
        "options": [
            {
                "label": "arbar",
                "value": "A"
            },
            {
                "label": "fooba",
                "value": "B"
            },
            {
                "label": "oobar",
                "value": "C"
            },
            {
                "label": "obarb",
                "value": "D"
            }
        ],
        "answer": [
            "B"
        ],
        "type": "single"
    },
    {
        "id": "5-27",
        "question": "LENGTH 函數可回傳字串長度，試問執行 SELECT LENGTH ('text'); 結果為何？",
        "options": [
            {
                "label": "0",
                "value": "A"
            },
            {
                "label": "2",
                "value": "B"
            },
            {
                "label": "4",
                "value": "C"
            },
            {
                "label": "6",
                "value": "D"
            }
        ],
        "answer": [
            "C"
        ],
        "type": "single"
    },
    {
        "id": "5-28",
        "question": "LOCATE 函數可回傳子字串在母字串出現的位置，並可指定搜尋起始位置，試問執行附圖中 SQL 語法後結果為何？",
        "media" : {
            "type": "table",
            "data": [
            ["SELECT LOCATE ('bar', 'foobarbar', 5);"]
            ]
        },
        "options": [
            {"label": "4", "value": "A"},
            {"label": "7", "value": "B"},
            {"label": "3", "value": "C"},
            {"label": "6", "value": "D"}
        ],
        "answer": ["B"],
        "type": "single"
    },
    {
        "id": "5-29",
        "question": "LOWER 函數可將大寫英文字母轉為小寫英文字母，試問執行 SELECT LOWER ('QUADRATICALLY'); 結果為何？",
        "options": [
            {
                "label": "'QUADRATICALLY'",
                "value": "A"
            },
            {
                "label": "'Quadratically'",
                "value": "B"
            },
            {
                "label": "'quadraticallY'",
                "value": "C"
            },
            {
                "label": "'quadratically'",
                "value": "D"
            }
        ],
        "answer": [
            "D"
        ],
        "type": "single"
    },
    {
        "id": "5-30",
        "question": "LPAD 函數可由字串左側補入填充字元，試問執行 SELECT LPAD ('hi', 4, '??'); 結果為何？",
        "options": [
            {
                "label": "'??hi'",
                "value": "A"
            },
            {
                "label": "'hi??'",
                "value": "B"
            },
            {
                "label": "'hi'",
                "value": "C"
            },
            {
                "label": "'hihi'",
                "value": "D"
            }
        ],
        "answer": [
            "A"
        ],
        "type": "single"
    },
    {
        "id": "5-31",
        "question": "LTRIM 函數可去除輸入字串左側多餘空白字元，試問執行 SELECT LTRIM('barbar'); 結果為何？",
        "options": [
            {
                "label": "'bar bar'",
                "value": "A"
            },
            {
                "label": "'barbar'",
                "value": "B"
            },
            {
                "label": "' barbar'",
                "value": "C"
            },
            {
                "label": "'barbar  '",
                "value": "D"
            }
        ],
        "answer": [
            "B"
        ],
        "type": "single"
    },
    {
        "id": "5-32",
        "question": "MAKE_SET 函數可依據位元的設定取得對應字串的串接，試問執行 SELECT MAKE_SET (1 | 4, 'hello', 'nice', 'world'); 結果為何？",
        "options": [
            {
                "label": "'hello'",
                "value": "A"
            },
            {
                "label": "'nice'",
                "value": "B"
            },
            {
                "label": "'nice, world'",
                "value": "C"
            },
            {
                "label": "'hello, world'",
                "value": "D"
            }
        ],
        "answer": [
            "D"
        ],
        "type": "single"
    },
    {
        "id": "5-33",
        "question": "MID 函數功能與 SUBSTRING 相同，可擷取部分字串，試問執行 SELECT MID ('HOW ARE YOU?', 5, 3); 結果為何？",
        "options": [
            {
                "label": "'HOW'",
                "value": "A"
            },
            {
                "label": "'ARE'",
                "value": "B"
            },
            {
                "label": "'YOU'",
                "value": "C"
            },
            {
                "label": "'HOW ARE YOU?'",
                "value": "D"
            }
        ],
        "answer": [
            "B"
        ],
        "type": "single"
    },
    {
        "id": "5-34",
        "question": "OCT 函數可將傳入的十進位數值轉為八進位數數值字串，試問執行 SELECT OCT (12); 結果為何？",
        "options": [
            {
                "label": "'10'",
                "value": "A"
            },
            {
                "label": "'12'",
                "value": "B"
            },
            {
                "label": "'14'",
                "value": "C"
            },
            {
                "label": "'16'",
                "value": "D"
            }
        ],
        "answer": [
            "C"
        ],
        "type": "single"
    },
    {
        "id": "5-35",
        "question": "REPEAT 函數可將傳入的字串重複串接，試問執行 SELECT REPEAT ('MySQL', 3); 結果為何？",
        "options": [
            {
                "label": "'MySQLMySQLMySQL'",
                "value": "A"
            },
            {
                "label": "'MySQLMySQL'",
                "value": "B"
            },
            {
                "label": "'MySQL'",
                "value": "C"
            },
            {
                "label": "NULL",
                "value": "D"
            }
        ],
        "answer": [
            "A"
        ],
        "type": "single"
    },
    {
        "id": "5-36",
        "question": "REPLACE 函數可用以取代字串，將取代後的字串傳回，試問執行 SELECT REPLACE('美麗與善良', '善良', '哀愁'); 結果為何？",
        "options": [
            {
                "label": "'美麗與善良'",
                "value": "A"
            },
            {
                "label": "'哀愁與善良'",
                "value": "B"
            },
            {
                "label": "'美麗與哀愁'",
                "value": "C"
            },
            {
                "label": "'哀愁與善良'",
                "value": "D"
            }
        ],
        "answer": [
            "C"
        ],
        "type": "single"
    },
    {
        "id": "5-37",
        "question": "REVERSE 函數可將輸入字串反轉並傳回，試問執行 SELECT REVERSE ('大家好'); 結果為何？",
        "options": [
            {
                "label": "'好家大'",
                "value": "A"
            },
            {
                "label": "'家好大'",
                "value": "B"
            },
            {
                "label": "'大家好'",
                "value": "C"
            },
            {
                "label": "'好大家'",
                "value": "D"
            }
        ],
        "answer": [
            "A"
        ],
        "type": "single"
    },
    {
        "id": "5-38",
        "question": "RIGHT 函數可擷取右邊的字串並回傳，試問執行 SELECT RIGHT ('美麗與善良', 2); 結果為何？",
        "options": [
            {
                "label": "'美麗'",
                "value": "A"
            },
            {
                "label": "'善良'",
                "value": "B"
            },
            {
                "label": "'麗與'",
                "value": "C"
            },
            {
            "label": "'與善'",
                "value": "D"
            }
        ],
        "answer": [
            "B"
        ],
        "type": "single"
    },
    {
        "id": "5-39",
        "question": "RPAD 函數可將不足位的部分以填補位元補在右邊並回傳，試問執行 SELECT RPAD ('大家好', 8, '!'); 結果為何？",
        "options": [
            {
                "label": "'大家好!'",
                "value": "A"
            },
            {
                "label": "'大家好!!'",
                "value": "B"
            },
            {
                "label": "'大家好!!!!!'",
                "value": "C"
            },
            {
                "label": "'大家好!!!!!!!!'",
                "value": "D"
            }
        ],
        "answer": [
            "C"
        ],
        "type": "single"
    },
    {
        "id": "5-40",
        "question": "SPACE 函數可回傳指定個數的空白字元，若想要回傳六個空白字元，該如何呼叫 SPACE 函數？",
        "options": [
            {
                "label": "SPACE(6)",
                "value": "A"
            },
            {
                "label": "SPACE(' ', 6)",
                "value": "B"
            },
            {
                "label": "SPACE(6, ' ')'",
                "value": "C"
            },
            {
                "label": "SPACE('6')",
                "value": "D"
            }
        ],
        "answer": [
            "A"
        ],
        "type": "single"
    },
    {
        "id": "5-41",
        "question": "試問執行 SELECT UCASE ('Open the door.'); 會得到何種結果？",
        "options": [
            {
                "label": "'Open The Door'",
                "value": "A"
            },
            {
                "label": "'open the door'",
                "value": "B"
            },
            {
                "label": "'OPEN THE DOOR'",
                "value": "C"
            },
            {
                "label": "'OPEN the DOOR'",
                "value": "D"
            }
        ],
        "answer": [
            "C"
        ],
        "type": "single"
    },
    {
        "id": "5-42",
        "question": "ABS 函數提供絕對值的功能，試問執行 SELECT ABS (-100); 會得到何種結果？",
        "options": [
            {
                "label": "100",
                "value": "A"
            },
            {
                "label": "-100",
                "value": "B"
            },
            {
                "label": "4",
                "value": "C"
            },
            {
                "label": "-4",
                "value": "D"
            }
        ],
        "answer": [
            "A"
        ],
        "type": "single"
    },
    {
        "id": "5-43",
        "question": "CEIL 函數提供無條件進位的功能，試問執行 SELECT CEIL (-1.23); 會得到何種結果？",
        "options": [
            {
                "label": "-1",
                "value": "A"
            },
            {
                "label": "-2",
                "value": "B"
            },
            {
                "label": "1",
                "value": "C"
            },
            {
                "label": "2",
                "value": "D"
            }
        ],
        "answer": [
            "A"
        ],
        "type": "single"
    },
    {
        "id": "5-44",
        "question": "ACOS 函數可由傳入的 COS 值，反求其角度，試問執行 SELECT ACOS (1); 會得到什麼結果？",
        "options": [
            {
                "label": "1",
                "value": "A"
            },
            {
                "label": "1.5",
                "value": "B"
            },
            {
                "label": "2",
                "value": "C"
            },
            {
                "label": "0",
                "value": "D"
            }
        ],
        "answer": [
            "D"
        ],
        "type": "single"
    },
    {
        "id": "5-45",
        "question": "FLOOR 函數提供無條件捨去的功能，試問執行 SELECT FLOOR (1.23); 會得到何種結果？",
        "options": [
            {
                "label": "-1",
                "value": "A"
            },
            {
                "label": "-2",
                "value": "B"
            },
            {
                "label": "1",
                "value": "C"
            },
            {
                "label": "2",
                "value": "D"
            }
        ],
        "answer": [
            "C"
        ],
        "type": "single"
    },
    {
        "id": "5-46",
        "question": "DEGREE 函數可將角度的 radians 轉為 degrees，試問執行 SELECT DEGREES (PI()); 會得到怎樣的結果？",
        "options": [
            {
                "label": "90",
                "value": "A"
            },
            {
                "label": "180",
                "value": "B"
            },
            {
                "label": "270",
                "value": "C"
            },
            {
                "label": "360",
                "value": "D"
            }
        ],
        "answer": [
            "B"
        ],
        "type": "single"
    },
    {
        "id": "5-47",
        "question": "MOD 函數提供取餘數的功能，試問執行 SELECT MOD (234, 10); 會得到何種結果？",
        "options": [
            {
                "label": "10",
                "value": "A"
            },
            {
                "label": "234",
                "value": "B"
            },
            {
                "label": "4",
                "value": "C"
            },
            {
                "label": "34",
                "value": "D"
            }
        ],
        "answer": [
            "C"
        ],
        "type": "single"
    },
    {
        "id": "5-48",
        "question": "PI 函數提供圓周率的値，試問執行 SELECT PI(); 會得到何種結果？",
        "options": [
            {
                "label": "3.14",
                "value": "A"
            },
            {
                "label": "3.141593",
                "value": "B"
            },
            {
                "label": "3",
                "value": "C"
            },
            {
                "label": "3.1",
                "value": "D"
            }
        ],
        "answer": [
            "B"
        ],
        "type": "single"
    },
    {
        "id": "5-49",
        "question": "POW 函數提供次方的運算，試問執行 SELECT POW(2, 3); 會得到何種結果？",
        "options": [
            {
                "label": "2",
                "value": "A"
            },
            {
                "label": "3",
                "value": "B"
            },
            {
                "label": "9",
                "value": "C"
            },
            {
                "label": "8",
                "value": "D"
            }
        ],
        "answer": [
            "D"
        ],
        "type": "single"
    },
    {
        "id": "5-50",
        "question": "SIGN 函數可取得傳入參數的正負值，試問分別執行附中三個指令，會得到何種結果？",
        "question-2": "[ SELECT SIGN(-32);   SELECT SIGN(O);   SELECT SIGN(234); ]",
        "options": [
            {
                "label": "-, 0, +",
                "value": "A"
            },
            {
                "label": "-1, 0, 1",
                "value": "B"
            },
            {
                "label": "O, 1, -1",
                "value": "C"
            },
            {
                "label": "1, -1, 0",
                "value": "D"
            }
        ],
        "answer": [
            "B"
        ],
        "type": "single"
    },
    {
        "id": "5-51",
        "question": "SQRT 函數可計算傳入參數的平方根，試問執行 SELECT SQRT(4); 會得到何種結果？",
        "options": [
            {
                "label": "2",
                "value": "A"
            },
            {
                "label": "4",
                "value": "B"
            },
            {
                "label": "8",
                "value": "C"
            },
            {
                "label": "16",
                "value": "D"
            }
        ],
        "answer": [
            "A"
        ],
        "type": "single"
    },
    {
        "id": "5-52",
        "question": "TRUNACT 函數可將指定位數後的小數點捨去，試問 SELECT TRUNCATE(1.223, 1); 會得到何種結果？",
        "options": [
            {
                "label": "1",
                "value": "A"
            },
            {
                "label": "1.2",
                "value": "B"
            },
            {
                "label": "1.22",
                "value": "C"
            },
            {
                "label": "1.223",
                "value": "D"
            }
        ],
        "answer": [
            "B"
        ],
        "type": "single"
    },
    {
        "id": "5-53",
        "question": "BIT_COUNT 函數可計算傳入參數中有幾個 bit 被設成 1，試問執行 SELECT BIT_COUNT(29), BIT_COUNT(b, '101010'); 會得到什麼結果？",
        "options": [
            {
                "label": "3, 3",
                "value": "A"
            },
            {
                "label": "3, 4",
                "value": "B"
            },
            {
                "label": "4, 3",
                "value": "C"
            },
            {
                "label": "4, 4",
                "value": "D"
            }
        ],
        "answer": [
            "C"
        ],
        "type": "single"
    },
    {
        "id": "5-54",
        "question": "呼叫哪些函數或指令可得到目前日期？(複選)",
        "options": [
            {
                "label": "CURDATE()",
                "value": "A"
            },
            {
                "label": "CURRENT_DATE",
                "value": "B"
            },
            {
                "label": "CURRENT_DATE()",
                "value": "C"
            },
            {
                "label": "CURTIME()",
                "value": "D"
            }
        ],
        "answer": [
            "A","B","C"
        ],
        "type": "multiple"
    },
    {
        "id": "5-55",
        "question": "呼叫哪些函數或指令可得到目前時間？(複選)",
        "options": [
            {
                "label": "CURTIME()",
                "value": "A"
            },
            {
                "label": "CURRENT_TIME",
                "value": "B"
            },
            {
                "label": "CURRENT_TIME()",
                "value": "C"
            },
            {
                "label": "DATE()",
                "value": "D"
            }
        ],
        "answer": [
            "A","B","C"
        ],
        "type": "multiple"
    },
    {
        "id": "5-56",
        "question": "呼叫哪些函數或指令可得到目前的日期和時間？(複選)",
        "options": [
            {
                "label": "DATE()",
                "value": "A"
            },
            {
                "label": "NOW()",
                "value": "B"
            },
            {
                "label": "CURRENT_TIMESTAMP()",
                "value": "C"
            },
            {
                "label": "CURRENT_TIMESTAMP",
                "value": "D"
            }
        ],
        "answer": [
            "B","C","D"
        ],
        "type": "multiple"
    },
    {
        "id": "5-57",
        "question": "DATE 函數可從一個傳數的日期時間參數中，擷取日期部分回傳，試問執行 SELECT DATE('2006-12-31 01:02:03'); 會得到何種結果？",
        "options": [
            {
                "label": "'2006-12-31'",
                "value": "A"
            },
            {
                "label": "'01：02：03'",
                "value": "B"
            },
            {
                "label": "'2006-12-31 01:02:03'",
                "value": "C"
            },
            {
                "label": "'12-31-2006'",
                "value": "D"
            }
        ],
        "answer": [
            "A"
        ],
        "type": "single"
    },
    {
        "id": "5-58",
        "question": "DATEDIFF() 可計算傳入兩個日期時間的相差天數，試問執行 SELECTDATEDIFF('2006-11-15 23:59:59', '2006-10-31'); 會得到何種結果？",
        "options": [
            {
                "label": "'15'",
                "value": "A"
            },
            {
                "label": "'-15'",
                "value": "B"
            },
            {
                "label": "15",
                "value": "C"
            },
            {
                "label": "-15",
                "value": "D"
            }
        ],
        "answer": [
            "C"
        ],
        "type": "single"
    },
    {
        "id": "5-59",
        "question": "DATE_ADD 函數可在給定的日期時間參數，加上一段日期時間，試問執行附圖中的 SQL 語法後結果為何？",
        "media": {
            "type": "table",
            "data": [
            ["SELECT DATE_ADD('2006-12-31 23:59:59', INTERVAL 1 DAY);"]
            ]
        },
        "options": [
            {"label": "'2006-12-32 23:59:59'", "value": "A"},
            {"label": "'2006-12-32'", "value": "B"},
            {"label": "'2007-01-01 23:59:59'", "value": "C"},
            {"label": "'2007-01-01'", "value": "D"}
        ],
        "answer": ["C"],
        "type": "single"
    },
    {
        "id": "5-60",
        "question": "DATE_SUB 函數可在給定的日期時間參數，減去一段日期時間，試問執行附圖中的 SQL 語法後結果為何？",
        "media": {
            "type": "table",
            "data": [
            ["SELECT DATE SUB('2007-01-02', INTERVAL 31 DAY);"]
            ]
        },
        "options": [
            {"label": "'2006-12-02 00:00:00'", "value": "A"},
            {"label": "'2006-12-02'", "value": "B"},
            {"label": "'2007-02-02 00:00:00'", "value": "C"},
            {"label": "'2007-02-02'", "value": "D"}
        ],
        "answer": ["B"],
        "type": "single"
    },
    {
        "id": "5-61",
        "question": "DATE_FORMAT 函數可格式化日期時間，試問執行附圖中的 SQL 語法後結果為何？",
        "media": {
            "type": "table",
            "data": [
            ["SLECT DATE_FORMAT('2007-02-15 22:23:00', %D%M%Y);"]
            ]
        },
        "options": [
            {"label": "'15th February 2007'", "value": "A"},
            {"label": "'15th-February-2007'", "value": "B"},
            {"label": "'15 02 2007'", "value": "C"},
            {"label": "'15-02-2007'", "value": "D"}
        ],
        "answer": ["A"],
        "type": "single"
    },
    {
        "id": "5-62",
        "question": "哪一個函數可以取得一個日期是星期幾，例如：2006-10-29 是星期日(回傳結果 1 = 星期日、2 = 星期一、3 = 星期二..)？",
        "options": [
            {
                "label": "WEEK('2006-10-29')",
                "value": "A"
            },
            {
                "label": "DAYOFWEEK('2006-10-29')",
                "value": "B"
            },
            {
                "label": "DAY('2006-10-29')",
                "value": "C"
            },
            {
                "label": "DAYOFYEAR(\"2006-10-29\")",
                "value": "D"
            }
        ],
        "answer": [
            "B"
        ],
        "type": "single"
    },
    {
        "id": "5-63",
        "question": "哪一個函數可以取得一個日期是該年的第幾天，例如：2007-02-03 是 2007 年的第 34 天？",
        "options": [
            {
                "label": "WEEK('2007-02-03')",
                "value": "A"
            },
            {
                "label": "DAYOFWEEK('2007-02-03')",
                "value": "B"
            },
            {
                "label": "DAY('2007-02-03')",
                "value": "C"
            },
            {
                "label": "DAYOFYEAR('2007-02-03')",
                "value": "D"
            }
        ],
        "answer": [
            "D"
        ],
        "type": "single"
    },
    {
        "id": "5-64",
        "question": "哪一個函數可以計算從 0 點 0 分 0 秒到某個時間的總秒數，例如：輸入 '00:39:38'可得到 2378？",
        "options": [
            {
                "label": "WEEK('00:39:38')",
                "value": "A"
            },
            {
                "label": "DAYOFWEEK('00:39:38')",
                "value": "B"
            },
            {
                "label": "TIME_TO_SEC('00:39:38')",
                "value": "C"
            },
            {
                "label": "DAYOFYEAR('00:39:38')",
                "value": "D"
            }
        ],
        "answer": [
            "C"
        ],
        "type": "single"
    },
    {
        "id": "5-65",
        "question": "使用 CASE...WHEN...THEN 的控制函數，可以條件判斷回傳不同的值，試問執行附圖中的 SQL 語法後結果為何？",
        "media": {
            "type": "table",
            "data": [
            ["SELECT CASE 1 WHEN 1 THEN 'one' WHEN 2 THEN 'two' ELSE 'more' END;"]
            ]
        },
        "options": [
            {"label": "'one'", "value": "A"},
            {"label": "'two'", "value": "B"},
            {"label": "'more'", "value": "C"},
            {"label": "NULL", "value": "D"}
        ],
        "answer": ["A"],
        "type": "single"
    },
    {
        "id": "5-66",
        "question": "使用 IF 控制函數，可以條件判斷回傳不同的值，試問執行 SELECT IF(1 > 2, 'yes', 'no'); 的結果為何？",
        "options": [
            {
                "label": "'yes'",
                "value": "A"
            },
            {
                "label": "'no'",
                "value": "B"
            },
            {
                "label": "'1'",
                "value": "C"
            },
            {
                "label": "NULL",
                "value": "D"
            }
        ],
        "answer": [
            "B"
        ],
        "type": "single"
    },
    {
        "id": "5-67",
        "question": "試問執行 SELECT IFNULL(1, 0); 與 SELECT IFNULL(NULL(1, 10); 的結果各為何？",
        "options": [
            {
                "label": "'1', NULL",
                "value": "A"
            },
            {
                "label": "'1', '10'",
                "value": "B"
            },
            {
                "label": "'0', NULL",
                "value": "C"
            },
            {
                "label": "'0', '10'",
                "value": "D"
            }
        ],
        "answer": [
            "B"
        ],
        "type": "single"
    },
    {
        "id": "5-68",
        "question": "試問執行 SELECT NULLIF(1, 1); 與SELECT NULLIF(1, 10); 的結果各為何？",
        "options": [
            {
                "label": "'1', NULL",
                "value": "A"
            },
            {
                "label": "'1', NULL",
                "value": "B"
            },
            {
                "label": "NULL, 1",
                "value": "C"
            },
            {
                "label": "NULL, '10'",
                "value": "D"
            }
        ],
        "answer": [
            "C"
        ],
        "type": "single"
    },
    {
        "id": "5-69",
        "question": "如附圖，若要計算分組(Group by)後該組的平均值，可用哪一個函數操作？",
        "media": {
            "type": "table",
            "data": [
                [["SELECT 欄位一, 函數(欄位二)"]],
                [["FROM 表格名稱"]],
                [["GROUP BY 欄位一"]]
            ]
        },
        "options": [
            {"label": "MIN()", "value": "A"},
            {"label": "MAX()", "value": "B"},
            {"label": "COUNT()", "value": "C"},
            {"label": "AVG()", "value": "D"}
        ],
        "answer": ["D"],
        "type": "single"
    },
    {
        "id": "5-70",
        "question": "如附圖，若要計算分組(Group by)後該組的最大值，可用哪一個函數操作？",
        "media": {
            "type": "table",
            "data": [
                [["SELECT 欄位一, 函數(欄位二)"]],
                [["FROM 表格名稱"]],
                [["GROUP BY 欄位一"]]
            ]
        },
        "options": [
            {"label": "MIN()", "value": "A"},
            {"label": "MAX()", "value": "B"},
            {"label": "COUNT()", "value": "C"},
            {"label": "AVG()", "value": "D"}
        ],
        "answer": ["B"],
        "type": "single"
    },
    {
        "id": "6-01",
        "question": "下列闘於資料庫備份的部分,何者敘述正確？(複選)",
        "options": [
            {
                "label": "在作資料備份時，有相關的表格應該要先被 LOCK 住，在做備份動作",
                "value": "A"
            },
            {
                "label": "作資料庫備份時，應該先作 FLUSH TABLE，以確保備份時，所有資料都已寫回資料庫",
                "value": "B"
            },
            {
                "label": "MySQL 作資料備份時很麻煩",
                "value": "C"
            },
            {
                "label": "因 MySQL 的表格都是存到檔案上面，所以作資料備份很容易",
                "value": "D"
            }
        ],
        "answer": [
            "A","B","D"
        ],
        "type": "multiple"
    },
    {
        "id": "6-02",
        "question": "以下哪些程式是專門開發用來備份 MYSQL 資料庫用的？(複選)",
        "options": [
            {
                "label": "mysqld",
                "value": "A"
            },
            {
                "label": "mysqldump",
                "value": "B"
            },
            {
                "label": "mysqlhotcopy",
                "value": "C"
            },
            {
                "label": "mysqladmin",
                "value": "D"
            }
        ],
        "answer": [
            "B","C"
        ],
        "type": "multiple"
    },
    {
        "id": "6-03",
        "question": "MySQL 支援遞增備份(incremental backup)，但是若要啟動遞增備份，需要在執行主程式時加上 --log-bin 選項，需啟動何種功能，方可執行遞增備份功能？",
        "options": [
            {
                "label": "Program logging",
                "value": "A"
            },
            {
                "label": "Database logging",
                "value": "B"
            },
            {
                "label": "Text logging",
                "value": "C"
            },
            {
                "label": "Binary logging",
                "value": "D"
            }
        ],
        "answer": [
            "D"
        ],
        "type": "single"
    },
    {
        "id": "6-04",
        "question": "執行「SELECT * INTO 指令 '備份檔名稱' FROM 表格名;」可將特定表格內容備份到外部檔案，試問敘述中的「指令」應該填入？",
        "options": [
            {
                "label": "INFILE",
                "value": "A"
            },
            {
                "label": "OUTFILE",
                "value": "B"
            },
            {
                "label": "REPLACE",
                "value": "C"
            },
            {
                "label": "IGNORE",
                "value": "D"
            }
        ],
        "answer": [
            "B"
        ],
        "type": "single"
    },
    {
        "id": "6-05",
        "question": "執行「LOAD DATA 指令1 '備份檔名稱' 指令2 INTO TABLE 表格名稱;」可將從外部檔案回復特定表格內容且復蓋重複的部分，試問敘述中的「指令1」及「指令2」應該填入？(複選)",
        "options": [
            {
                "label": "指令1 填入 INFILE",
                "value": "A"
            },
            {
                "label": "指令1 填入 OUTFILE",
                "value": "B"
            },
            {
                "label": "指令2 填入 REPLACE",
                "value": "C"
            },
            {
                "label": "指令2 填入 IGNORE",
                "value": "D"
            }
        ],
        "answer": [
            "A","C"
        ],
        "type": "multiple"
    },
    {
        "id": "6-06",
        "question": "利用 LOAD DATA 指令作資料庫表格回復時，回復表格中要有什麼 Key 值，否則會造成資料重複的現象？(複選)",
        "options": [
            {
                "label": "主鍵(Primary Key)",
                "value": "A"
            },
            {
                "label": "唯一鍵(Unique Key)",
                "value": "B"
            },
            {
                "label": "索引鍵(Index Key)",
                "value": "C"
            },
            {
                "label": "全文檢索(Full Text)",
                "value": "D"
            }
        ],
        "answer": [
            "A","B"
        ],
        "type": "multiple"
    },
    {
        "id": "6-07",
        "question": "MySQL 的預設編碼(character set)為下列何項？",
        "options": [
            {
                "label": "latin1",
                "value": "A"
            },
            {
                "label": "big5",
                "value": "B"
            },
            {
                "label": "utf8",
                "value": "C"
            },
            {
                "label": "視作業系統而定",
                "value": "D"
            }
        ],
        "answer": [
            "A"
        ],
        "type": "single"
    },
    {
        "id": "6-08",
        "question": "MySQL 的校對(collation)設定，主要是用來對於字串作那些處理時使用？(複選)",
        "options": [
            {
                "label": "INSERT",
                "value": "A"
            },
            {
                "label": "SELECT 中的 Order by",
                "value": "B"
            },
            {
                "label": "SELECT 中的 Group by",
                "value": "C"
            },
            {
                "label": "UPDATE",
                "value": "D"
            }
        ],
        "answer": [
            "B","C"
        ],
        "type": "multiple"
    },
    {
        "id": "6-09",
        "question": "執行「SET GLOBAL 指令 = 'SYSTEM';」當敘述中的「指令」為下列何項時，可設定 MySQL 的時區為作業系統時區？",
        "options": [
            {
                "label": "--update-state",
                "value": "A"
            },
            {
                "label": "--language",
                "value": "B"
            },
            {
                "label": "character-set",
                "value": "C"
            },
            {
                "label": "time_zone",
                "value": "D"
            }
        ],
        "answer": [
            "D"
        ],
        "type": "single"
    },
    {
        "id": "6-10",
        "question": "以下哪些是 MySQL 有提供的記錄型態(log type)？(複選)",
        "options": [
            {
                "label": "error log",
                "value": "A"
            },
            {
                "label": "general query log",
                "value": "B"
            },
            {
                "label": "binary log",
                "value": "C"
            },
            {
                "label": "slow log",
                "value": "D"
            }
        ],
        "answer": [
            "A","B","C","D"
        ],
        "type": "multiple"
    },
    {
        "id": "6-11",
        "question": "MySQL 伺服器的開啟、執行與關閉的記錄是儲存於哪一種記錄檔中？",
        "options": [
            {
                "label": "error log",
                "value": "A"
            },
            {
                "label": "general query log",
                "value": "B"
            },
            {
                "label": "binary log",
                "value": "C"
            },
            {
                "label": "slow log",
                "value": "D"
            }
        ],
        "answer": [
            "A"
        ],
        "type": "single"
    },
    {
        "id": "6-12",
        "question": "所有更改資料的敘述會被哪種記錄檔記錄下來？",
        "options": [
            {
                "label": "error log",
                "value": "A"
            },
            {
                "label": "general query log",
                "value": "B"
            },
            {
                "label": "binary log",
                "value": "C"
            },
            {
                "label": "slow log",
                "value": "D"
            }
        ],
        "answer": [
            "C"
        ],
        "type": "single"
    },
    {
        "id": "6-13",
        "question": "超過 long_query_time 指定秒數的 query 指令，或者沒建立索引(index)的 query 指令，會被記錄到哪一種記錄檔中？",
        "options": [
            {
                "label": "error log",
                "value": "A"
            },
            {
                "label": "general query log",
                "value": "B"
            },
            {
                "label": "binary log",
                "value": "C"
            },
            {
                "label": "slow log",
                "value": "D"
            }
        ],
        "answer": [
            "D"
        ],
        "type": "single"
    },
    {
        "id": "6-14",
        "question": "當需要在單一機器上執行多個 MySQL 伺服器時,以下那些伺服器設定值需調成不一樣？(複選)",
        "options": [
            {
                "label": "--port (for Windows and Unix like)",
                "value": "A"
            },
            {
                "label": "--socket (for Windows and Unix like)",
                "value": "B"
            },
            {
                "label": "--shared-memory-base-name (for Windows)",
                "value": "C"
            },
            {
                "label": "--pid-file (for Unix like)",
                "value": "D"
            }
        ],
        "answer": [
            "A","B","C","D"
        ],
        "type": "multiple"
    },
    {
        "id": "6-15",
        "question": "在 mysql 資料庫中的哪一個表格，裡面會儲存所有使用者的帳號、密碼及權限，這個表格非常重要，除了 root 使用者之外，不應給其他使用者存取？",
        "options": [
            {
                "label": "db",
                "value": "A"
            },
            {
                "label": "host",
                "value": "B"
            },
            {
                "label": "proc",
                "value": "C"
            },
            {
                "label": "user",
                "value": "D"
            }
        ],
        "answer": [
            "D"
        ],
        "type": "single"
    },
    {
        "id": "6-16",
        "question": "每個使用者都應該有適當的資料庫存取權限，下列哪些指令可用來授權或撤銷存取權限？(複選)",
        "options": [
            {
                "label": "GRANT",
                "value": "A"
            },
            {
                "label": "ALLOW",
                "value": "B"
            },
            {
                "label": "REVOKE",
                "value": "C"
            },
            {
                "label": "DENY",
                "value": "D"
            }
        ],
        "answer": [
            "A","C"
        ],
        "type": "multiple"
    },
    {
        "id": "6-17",
        "question": "登入 MySQL 的指令為「mysql 參數一 帳號 參數二 密碼;」，下列敘述哪些正確？(複選)",
        "options": [
            {
                "label": "參數一為 -a",
                "value": "A"
            },
            {
                "label": "參數一為 -u",
                "value": "B"
            },
            {
                "label": "參數二為 -p",
                "value": "C"
            },
            {
                "label": "參數二為 -t",
                "value": "D"
            }
        ],
        "answer": [
            "B","C"
        ],
        "type": "multiple"
    },
    {
        "id": "6-18",
        "question": "一些重要的驗證資料(例如：密碼)存入資料庫時，應該做單向性加密的動作再存入，以免使用者可以直接登入資料庫查詢該相關資料，哪些函數可用來做單向性加密？(複選)",
        "options": [
            {
                "label": "MD5()",
                "value": "A"
            },
            {
                "label": "MAX()",
                "value": "B"
            },
            {
                "label": "MINO",
                "value": "C"
            },
            {
                "label": "SHA1()",
                "value": "D"
            }
        ],
        "answer": [
            "A","D"
        ],
        "type": "multiple"
    },
    {
        "id": "6-19",
        "question": "請參閱附圖作答",
        "media": {
            "type": "table",
            "data": [
                ["Port number(埠號)是伺服器在網路上提供的一個窗口，"],
                ["使用者端可透過伺服器 IP 與 port number 取得伺服器的服務，"],
                ["一般也是駭客進攻的入口點，"],
                ["安全的伺服器應該要有防火牆的保護，"],
                ["對於不合法的使用者端予以阻擋，"],
                ["試問 MySQL 伺服器預設提供的服務 port number 是下列何項？"]
            ]
        },
        "options": [
            {"label": "1106", "value": "A"},
            {"label": "2206", "value": "B"},
            {"label": "3306", "value": "C"},
            {"label": "4406", "value": "D"}
        ],
        "answer": ["C"],
        "type": "single"
    },
    {
        "id": "6-20",
        "question": "請參閱附圖作答(複選)",
        "media": {
            "type": "table",
            "data": [
                ["以下哪些權限不應授權給非管理者權限的使用者，"],
                ["這些權限可讓有權限的使用者可以看到目前正在執行的程序，"],
                ["或者可以將資料庫的內容匯出到檔案，"],
                ["開放這些權限，"],
                ["有可能造成資科庫資料被竊取或竄改的危險？"]
            ]
        },
        "options": [
            {"label": "PROCESS", "value": "A"},
            {"label": "SUPER", "value": "C"},
            {"label": "FILE", "value": "B"},
            {"label": "ISELECT", "value": "D"}
        ],
        "answer": ["A", "B", "C"],
        "type": "multiple"
    },
    {
        "id": "6-21",
        "question": "在 MySQL 哪一個版本以前，使用者密碼的編碼是 16 bytes，該版本之後是採用較安全的 41 bytes 編碼，加強了使用者密碼保護？",
        "options": [
            {
                "label": "3.0",
                "value": "A"
            },
            {
                "label": "3.1",
                "value": "B"
            },
            {
                "label": "4.0",
                "value": "C"
            },
            {
                "label": "4.1",
                "value": "D"
            }
        ],
        "answer": [
            "D"
        ],
        "type": "single"
    },
    {
        "id": "6-22",
        "question": "請參閱附圖作答？",
        "media": {
            "type": "table",
            "data": [
                ["MySQL 5 預設的密碼編碼是採用新的編碼方式(41 bytes)，"],
                ["，如果希望改成舊的編碼方式可執行以下敘述"],
                ["「SET PASSWOED FOR '使用者名稱'@ '主機名稱' = 函數('密瑪');」，"],
                ["試問，敘述中的「函數」試下列何項？"]
            ]
        },
        "options": [
            {"label": "OLD_PASSWORD", "value": "A"},
            {"label": "PASSWORD_OLD", "value": "B"},
            {"label": "PRIOR_PASSWORD", "value": "C"},
            {"label": "PASSWORD_PRIOR", "value": "D"}
        ],
        "answer": ["A"],
        "type": "single"
    },
    {
        "id": "6-23",
        "question": "下列哪些指令可用來新增使用者？(複選)",
        "options": [
            {
                "label": "LOAD",
                "value": "A"
            },
            {
                "label": "CREATE USER",
                "value": "B"
            },
            {
                "label": "SHOW",
                "value": "C"
            },
            {
                "label": "GRANT",
                "value": "D"
            }
        ],
        "answer": [
            "B","D"
        ],
        "type": "multiple"
    },
    {
        "id": "6-24",
        "question": "請參閱附圖作答",
        "media": {
            "type": "table",
            "data": [
                ["此敘述可用來新增使用者："],
                ["「指令 INTO user VALUES('localhost', 'monty' PSSWORD('some_pass'), 'Y', 'Y', ...;」"],
                ["試問敘述中的「指令」為下列何項？"]
            ]
        },
        "options": [
            {"label": "INSERT", "value": "A"},
            {"label": "DELETE", "value": "B"},
            {"label": "UPDATE", "value": "C"},
            {"label": "SELECT", "value": "D"}
        ],
        "answer": ["A"],
        "type": "single"
    },
    {
        "id": "6-25",
        "question": "當做完權限設定時，最後需要執行哪一個敘述，才會將設變後的權限設定完成？",
        "options": [
            {
                "label": "FLUSH RIGHT",
                "value": "A"
            },
            {
                "label": "FLUSH PRIVILEGES",
                "value": "B"
            },
            {
                "label": "FLUSH USER",
                "value": "C"
            },
            {
                "label": "FLUSH LOG",
                "value": "D"
            }
        ],
        "answer": [
            "B"
        ],
        "type": "single"
    },
    {
        "id": "7-01 ",
        "question": "在 Windows 作業系統中，預設 MySQL 的設定組態檔為下列何項？",
        "options": [
            {
                "label": "my.cnf",
                "value": "A"
            },
            {
                "label": "my.ini",
                "value": "B"
            },
            {
                "label": "config.inc",
                "value": "C"
            },
            {
                "label": "web.config",
                "value": "D"
            }
        ],
        "answer": [
            "B"
        ],
        "type": "single"
    },
    {
        "id": "7-02",
        "question": "在 UniX 系統中，預設 MySQL 的組態設定檔為下列何項？",
        "options": [
            {
                "label": "my.cnf",
                "value": "A"
            },
            {
                "label": "my.ini",
                "value": "B"
            },
            {
                "label": "config.inc",
                "value": "C"
            },
            {
                "label": "web.config",
                "value": "D"
            }
        ],
        "answer": [
            "A"
        ],
        "type": "single"
    },
    {
        "id": "7-03",
        "question": "若要指定 MySQL 的組態設定檔位置及檔名，可於執行 MySQL 時，加入下列何項參數來指定？",
        "options": [
            {
                "label": "-config-file",
                "value": "A"
            },
            {
                "label": "-setting-file",
                "value": "B"
            },
            {
                "label": "-defaults-file",
                "value": "C"
            },
            {
                "label": "-install-file",
                "value": "D"
            }
        ],
        "answer": [
            "C"
        ],
        "type": "single"
    },
    {
        "id": "7-04",
        "question": "若要設定 MySQL 的執行埠號(port)，可在組態設定檔中的何種參數上設定？",
        "options": [
            {
                "label": "basedir",
                "value": "A"
            },
            {
                "label": "datadir",
                "value": "B"
            },
            {
                "label": "default-character-set",
                "value": "C"
            },
            {
                "label": "port",
                "value": "D"
            }
        ],
        "answer": [
            "D"
        ],
        "type": "single"
    },
    {
        "id": "7-05",
        "question": "若要設定 MySQL 的主目錄，可在組態設定檔中的何種參數上設定？",
        "options": [
            {
                "label": "basedir",
                "value": "A"
            },
            {
                "label": "datadir",
                "value": "B"
            },
            {
                "label": "default-character-set",
                "value": "C"
            },
            {
                "label": "port",
                "value": "D"
            }
        ],
        "answer": [
            "A"
        ],
        "type": "single"
    },
    {
        "id": "7-06",
        "question": "若要設定 MySQL 資料庫的資料目錄，可在組態設定檔中的何種參數上設定？",
        "options": [
            {
                "label": "basedir",
                "value": "A"
            },
            {
                "label": "datadir",
                "value": "B"
            },
            {
                "label": "default-character-set",
                "value": "C"
            },
            {
                "label": "port",
                "value": "D"
            }
        ],
        "answer": [
            "B"
        ],
        "type": "single"
    },
    {
        "id": "7-07",
        "question": "若要設定 MySQL 內的預設字元編碼，可在組態設定檔中的何種參數上設定？",
        "options": [
            {
                "label": "basedir",
                "value": "A"
            },
            {
                "label": "datadir",
                "value": "B"
            },
            {
                "label": "default-character-set",
                "value": "C"
            },
            {
                "label": "port",
                "value": "D"
            }
        ],
        "answer": [
            "C"
        ],
        "type": "single"
    },
    {
        "id": "7-08",
        "question": "若要設定 MySQL 可同時運作的最大連線數，可在組態設定檔中的何種參數上設定？",
        "options": [
            {
                "label": "max_connections",
                "value": "A"
            },
            {
                "label": "query_cache_size",
                "value": "B"
            },
            {
                "label": "table_cache",
                "value": "C"
            },
            {
                "label": "tmp_table_size",
                "value": "D"
            }
        ],
        "answer": [
            "A"
        ],
        "type": "single"
    },
    {
        "id": "7-09",
        "question": "Query cache 可用來暫存執行 Select 指令傳回的結果，若要設定 query cache 的使用大小，可在組態設定檔中的何種參數上設定？",
        "options": [
            {
                "label": "max_connections",
                "value": "A"
            },
            {
                "label": "query_cache_size",
                "value": "B"
            },
            {
                "label": "table_cache",
                "value": "C"
            },
            {
                "label": "imp_table_size",
                "value": "D"
            }
        ],
        "answer": [
            "B"
        ],
        "type": "single"
    },
    {
        "id": "7-10",
        "question": "若要指定在記憶體中暫存資料表的最大容量，可在組態設定檔中的何種參數上設定？",
        "options": [
            {
                "label": "max_connections",
                "value": "A"
            },
            {
                "label": "query_cache_size",
                "value": "B"
            },
            {
                "label": "table_cache",
                "value": "C"
            },
            {
                "label": "imp_table_size",
                "value": "D"
            }
        ],
        "answer": [
            "D"
        ],
        "type": "single"
    },
    {
        "id": "7-11",
        "question": "若要指定存放於快取(cache)中供重複使用的最大線程(thread)個數，可在組態設定檔中的何種參數上設定？",
        "options": [
            {
                "label": "thread_cache_size",
                "value": "A"
            },
            {
                "label": "query_cache_size",
                "value": "B"
            },
            {
                "label": "table_cache",
                "value": "C"
            },
            {
                "label": "tmp_table_size",
                "value": "D"
            }
        ],
        "answer": [
            "A"
        ],
        "type": "single"
    },
    {
        "id": "7-12",
        "question": "可用來顯示 MyISAM 資料表全文檢索資訊的工具程試為下列何項？",
        "options": [
            {
                "label": "myisamchk",
                "value": "A"
            },
            {
                "label": "myisam_ftdump",
                "value": "B"
            },
            {
                "label": "myisamlog",
                "value": "C"
            },
            {
                "label": "myisampack",
                "value": "D"
            }
        ],
        "answer": [
            "B"
        ],
        "type": "single"
    },
    {
        "id": "7-13",
        "question": "可用來描述、檢查、最佳化和修復 MyISAM 資科表的工具程式為下列何項？",
        "options": [
            {
                "label": "myisamchk",
                "value": "A"
            },
            {
                "label": "myisam_ftdump",
                "value": "B"
            },
            {
                "label": "myisamlog",
                "value": "C"
            },
            {
                "label": "myisampack",
                "value": "D"
            }
        ],
        "answer": [
            "A"
        ],
        "type": "single"
    },
    {
        "id": "7-14",
        "question": "可用來處理 MylSAM 記錄檔的工具程式為下列何項？",
        "options": [
            {
                "label": "myisamchk",
                "value": "A"
            },
            {
                "label": "myisam_ftdump",
                "value": "B"
            },
            {
                "label": "myisamlog",
                "value": "C"
            },
            {
                "label": "myisampack",
                "value": "D"
            }
        ],
        "answer": [
            "C"
        ],
        "type": "single"
    },
    {
        "id": "7-15",
        "question": "可壓縮 MyISAM 資料表以產生較小的唯讀資料表之工具程式為下列何項？",
        "options": [
            {
                "label": "myisamchk",
                "value": "A"
            },
            {
                "label": "myisam_ftdump",
                "value": "B"
            },
            {
                "label": "myisamlog",
                "value": "C"
            },
            {
                "label": "myisampack",
                "value": "D"
            }
        ],
        "answer": [
            "D"
        ],
        "type": "single"
    },
    {
        "id": "7-16",
        "question": "下列何項工具程式可交談式輸入 SQL 敘述，或者在批次模式(batch mode)下執行檔案的指令(command-line)？",
        "options": [
            {
                "label": "mysql",
                "value": "A"
            },
            {
                "label": "mysqlaccess",
                "value": "B"
            },
            {
                "label": "mysqlbinlog",
                "value": "C"
            },
            {
                "label": "mysqladmin",
                "value": "D"
            }
        ],
        "answer": [
            "A"
        ],
        "type": "single"
    },
    {
        "id": "7-17",
        "question": "為一腳本程式，用來檢查一組主機、使用者名稱和資料庫組合的存取權限之工具程式為下列何項？",
        "options": [
            {
                "label": "mysql",
                "value": "A"
            },
            {
                "label": "mysqlaccess",
                "value": "B"
            },
            {
                "label": "mysqlbinlog",
                "value": "C"
            },
            {
                "label": "mysqladmin",
                "value": "D"
            }
        ],
        "answer": [
            "B"
        ],
        "type": "single"
    },
    {
        "id": "7-18",
        "question": "可用來執行例如：新增或資料表、重新載入權限資科表、將資料表內容送回磁碟、重開記錄檔、讀取伺服器版本、程序、狀態等資訊的資料庫管理工具程式為下列何項？",
        "options": [
            {
                "label": "mysqld",
                "value": "A"
            },
            {
                "label": "mysqlaccess",
                "value": "B"
            },
            {
                "label": "mysqlbinlog",
                "value": "C"
            },
            {
                "label": "mysqladmin",
                "value": "D"
            }
        ],
        "answer": [
            "D"
        ],
        "type": "single"
    },
    {
        "id": "7-19",
        "question": "當資料庫系統故障(crash)時，從二位元記錄檔(binary log)中讀取已執行的敘述有助於恢復資料庫系統，可從二位元記錄檔中讀取已執行敘述的工具程式為下列何項？",
        "options": [
            {
                "label": "mysql",
                "value": "A"
            },
            {
                "label": "mysqlaccess",
                "value": "B"
            },
            {
                "label": "mysqlbinlog",
                "value": "C"
            },
            {
                "label": "mysqladmin",
                "value": "D"
            }
        ],
        "answer": [
            "C"
        ],
        "type": "single"
    },
    {
        "id": "7-20",
        "question": "下列何項工具程式可用來檢查、修復、分析和最佳化資料表？",
        "options": [
            {
                "label": "mysqldump",
                "value": "A"
            },
            {
                "label": "mysqlhotcopy",
                "value": "B"
            },
            {
                "label": "mysqlcheck",
                "value": "C"
            },
            {
                "label": "mysqlimport",
                "value": "D"
            }   
        ],
        "answer": [
            "C"
        ],
        "type": "single"
    },
    {
        "id": "7-21",
        "question": "下列何項工具程式可將資料庫匯出成 SQL 敘述的檔案或以 tab 鍵分隔的文字檔？",
        "options": [
            {
                "label": "mysqldump",
                "value": "A"
            },
            {
                "label": "mysqlhotcopy",
                "value": "B"
            },
            {
                "label": "mysqlcheck",
                "value": "C"
            },
            {
                "label": "mysqlimport",
                "value": "D"
            }
        ],
        "answer": [
            "A"
        ],
        "type": "single"
    },
    {
        "id": "7-22",
        "question": "下列何項工具程式，可在伺服器執行中快速備份 MyISAM 資料表？",
        "options": [
            {
                "label": "mysqldump",
                "value": "A"
            },
            {
                "label": "mysqlhotcopy",
                "value": "B"
            },
            {
                "label": "mysqlcheck",
                "value": "C"
            },
            {
                "label": "mysqlimport",
                "value": "D"
            }
        ],
        "answer": [
            "B"
        ],
        "type": "single"
    },
    {
        "id": "7-23",
        "question": "下列何項工具程式，可將文字檔匯入到相關資料表中？",
        "options": [
            {
                "label": "mysqldump",
                "value": "A"
            },
            {
                "label": "mysqlhotcopy",
                "value": "B"
            },
            {
                "label": "mysqlcheck",
                "value": "C"
            },
            {
                "label": "mysqlimport",
                "value": "D"
            }
        ],
        "answer": [
            "D"
        ],
        "type": "single"
    },
    {
        "id": "7-24",
        "question": "下列何項工具程式，專門用來顯示資料庫(database)、資料表(tables)、欄位(column)和索引(index)的資訊？",
        "options": [
            {
                "label": "perror",
                "value": "A"
            },
            {
                "label": "mysqlslap",
                "value": "B"
            },
            {
                "label": "mysqlcheck",
                "value": "C"
            },
            {
                "label": "mysqlshow",
                "value": "D"
            }
        ],
        "answer": [
            "D"
        ],
        "type": "single"
    },
    {
        "id": "7-25",
        "question": "下列何項工具程式，可在單一用戶端模擬多用戶端存取 MySQL 伺服器狀況，並記錄每個階段的時間，以測試 MySQL 伺服器的效能？",
        "options": [
            {
                "label": "mysqlslap",
                "value": "A"
            },
            {
                "label": "perror",
                "value": "B"
            },
            {
                "label": "mysqlcheck",
                "value": "C"
            },
            {
                "label": "mysqlshow",
                "value": "D"
            }
        ],
        "answer": [
            "A"
        ],
        "type": "single"
    },
    {
        "id": "7-26",
        "question": "下列何項工具程式，可用來結束(kill)符合樣本(pattern)的程序？",
        "options": [
            {
                "label": "mysqlslap",
                "value": "A"
            },
            {
                "label": "mysql_zap",
                "value": "B"
            },
            {
                "label": "mysqlcheck",
                "value": "C"
            },
            {
                "label": "mysqlshow",
                "value": "D"
            }
        ],
        "answer": [
            "B"
        ],
        "type": "single"
    },
    {
        "id": "7-27",
        "question": "下列何項工具程式，可顯示系統或 MySQL 錯誤碼的含意？",
        "options": [
            {
                "label": "mysqlslap",
                "value": "A"
            },
            {
                "label": "mysql_zap",
                "value": "B"
            },
            {
                "label": "perror",
                "value": "C"
            },
            {
                "label": "mysqlshow",
                "value": "D"
            }
        ],
        "answer": [
            "C"
        ],
        "type": "single"
    },
    {
        "id": "7-28",
        "question": "下列何項工具程式，可對輸入文字作字串取代的功能？",
        "options": [
            {
                "label": "mysqislap",
                "value": "A"
            },
            {
                "label": "mysql_zap",
                "value": "B"
            },
            {
                "label": "perror",
                "value": "C"
            },
            {
                "label": "replace",
                "value": "D"
            }
        ],
        "answer": [
            "D"
        ],
        "type": "single"
    },
    {
        "id": "7-29",
        "question": "一般工具程式，若想要查詢使用方法，可在指令後面加上種參數，即可取得說明資訊？",
        "options": [
            {
                "label": "help",
                "value": "A"
            },
            {
                "label": "--help",
                "value": "B"
            },
            {
                "label": "/help",
                "value": "C"
            },
            {
                "label": "?help",
                "value": "D"
            }
        ],
        "answer": [
            "B"
        ],
        "type": "single"
    },
    {
        "id": "7-30",
        "question": "MySQL 提供下列各 API(程式語言的介面程式)中，何種 API 是其它 API 的基礎？",
        "options": [
            {
                "label": "PHP",
                "value": "A"
            },
            {
                "label": "JDBC",
                "value": "B"
            },
            {
                "label": "C",
                "value": "C"
            },
            {
                "label": "ODBC",
                "value": "D"
            }
        ],
        "answer": [
            "C"
        ],
        "type": "single"
    },
    {
        "id": "7-31",
        "question": "MySQL 提供 C 語言的介面程式(API)中，下列何項函數可以回傳由最後一 UPDATE、DELETE 或 INSERT 指令的變更、移除或新增之資料筆數(rows)？",
        "options": [
            {
                "label": "mysql_affected_rows()",
                "value": "A"
            },
            {
                "label": "mysql_change_user()",
                "value": "B"
            },
            {
                "label": "mysql_close()",
                "value": "C"
            },
            {
                "label": "mysql_autocommit()",
                "value": "D"
            }
        ],
        "answer": [
            "A"
        ],
        "type": "single"
    },
    {
        "id": "7-32",
        "question": "MySQL 提供 C 語言的介面程式(API)中，下列何項函數可以設定自動提交(autocommit)的功能開關？",
        "options": [
            {
                "label": "mysql_affected_rows()",
                "value": "A"
            },
            {
                "label": "mysql_change_user()",
                "value": "B"
            },
            {
                "label": "mysql_close()",
                "value": "C"
            },
            {
                "label": "mysql_autocommit()",
                "value": "D"
            }
        ],
        "answer": [
            "D"
        ],
        "type": "single"
    },
    {
        "id": "7-33",
        "question": "MySQL 提供 C 語言的介面程式(API)中，下列何項函數可在一個已開啟的連線下，變更使用者和資料庫？",
        "options": [
            {
                "label": "mysql_affected_rows()",
                "value": "A"
            },
            {
                "label": "mysql_change_user()",
                "value": "B"
            },
            {
                "label": "mysql_close()",
                "value": "C"
            },
            {
                "label": "mysql_autocommit()",
                "value": "D"
            }
        ],
        "answer": [
            "B"
        ],
        "type": "single"
    },
    {
        "id": "7-34",
        "question": "MySQL 提供 C 語言的介面程式(API)中，下列何項函數可關閉資料庫與資料庫伺服器的連線？",
        "options": [
            {
                "label": "mysql_affected_rows()",
                "value": "A"
            },
            {
                "label": "mysql_change_user()",
                "value": "B"
            },
            {
                "label": "mysql_close()",
                "value": "C"
            },
            {
                "label": "mysql_autocommit()",
                "value": "D"
            }
        ],
        "answer": [
            "C"
        ],
        "type": "single"
    },
    {
        "id": "7-35",
        "question": "MySQL 提供 C 語言的介面程式(API)，下列何項函數中來提交(commit)已變更的資料？",
        "options": [
            {
                "label": "mysql_commit()",
                "value": "A"
            },
            {
                "label": "mysql_data_seek()",
                "value": "B"
            },
            {
                "label": "mysql_connect()",
                "value": "C"
            },
            {
                "label": "mysql_create_db()",
                "value": "D"
            }
        ],
        "answer": [
            "A"
        ],
        "type": "single"
    },
    {
        "id": "7-36",
        "question": "MySQL 提供 C 語言的介面程式(API)中，下列何項函數可用來新增資料庫，其功能與 SQL 語法中的 CREATE DATABASE 相同？",
        "options": [
            {
                "label": "mysql_commit()",
                "value": "A"
            },
            {
                "label": "mysql_data_seek()",
                "value": "B"
            },
            {
                "label": "mysql_connect()",
                "value": "C"
            },
            {
                "label": "mysql_create_db()",
                "value": "D"
            }
        ],
        "answer": [
            "D"
        ],
        "type": "single"
    },
    {
        "id": "7-37",
        "question": "MySQL 提供 C 語言的介面程式(API)中，下列何項函數可再查詢結果(query result)的集合中，搜尋任意編號的資料？",
        "options": [
            {
                "label": "mysql_commit()",
                "value": "A"
            },
            {
                "label": "mysql_data_seek()",
                "value": "B"
            },
            {
                "label": "mysql_connect()",
                "value": "C"
            },
            {
                "label": "mysql_create_db()",
                "value": "D"
            }
        ],
        "answer": [
            "B"
        ],
        "type": "single"
    },
    {
        "id": "7-38",
        "question": "MySQL 提供 C 語言的介面程式(API)中，下列何項函數可令 MySQL 伺服器寫入偵錯訊息(debug information)到記錄檔(log file)中？",
        "options": [
            {
                "label": "mysql_errno()",
                "value": "A"
            },
            {
                "label": "mysql_dump_debug_info()",
                "value": "B"
            },
            {
                "label": "mysql_error()",
                "value": "C"
            },
            {
                "label": "mysql_escape_string()",
                "value": "D"
            }
        ],
        "answer": [
            "B"
        ],
        "type": "single"
    },
    {
        "id": "7-39",
        "question": "MySQL 提供 C 語言的介面程式(API)中，下列何項函數可傳回最近 MySQL 函數產生的錯誤編號(error number)？",
        "options": [
            {
                "label": "mysql_errno()",
                "value": "A"
            },
            {
                "label": "mysql_dump_debug_info()",
                "value": "B"
            },
            {
                "label": "mysql_error()",
                "value": "C"
            },
            {
                "label": "mysql_escape_string()",
                "value": "D"
            }
        ],
        "answer": [
            "A"
        ],
        "type": "single"
    },
    {
        "id": "7-40",
        "question": "MySQL 提供 C 語言的介面程式(API)中，下列何項函數可傳回最近 MySQL 函數產生的錯誤訊息(error message)？",
        "options": [
            {
                "label": "mysql_errno()",
                "value": "A"
            },
            {
                "label": "mysql_dump_debug_info()",
                "value": "B"
            },
            {
                "label": "mysql_error()",
                "value": "C"
            },
            {
                "label": "mysql_escape_string()",
                "value": "D"
            }
        ],
        "answer": [
            "C"
        ],
        "type": "single"
    },
    {
        "id": "7-41",
        "question": "MySQL 提供 C 語言的介面程式(API)中，下列何項函數可傳一個內含所有欄位結構(field structure)的陣列？",
        "options": [
            {
                "label": "mysql_fetch_fields()",
                "value": "A"
            },
            {
                "label": "mysql_fetch_field()",
                "value": "B"
            },
            {
                "label": "mysql_fetch_row()",
                "value": "C"
            },
            {
                "label": "mysql_fetch_lengths()",
                "value": "D"
            }
        ],
        "answer": [
            "A"
        ],
        "type": "single"
    },
    {
        "id": "7-42",
        "question": "MySQL 提供 C 語言的介面程式(API)中，下列何項函數可傳回一個欄位的資料？",
        "options": [
            {
                "label": "mysql_fetch_fields()",
                "value": "A"
            },
            {
                "label": "mysql_fetch_row()",
                "value": "B"
            },
            {
                "label": "mysql_fetch_field()",
                "value": "C"
            },
            {
                "label": "mysql_fetch_lengths()",
                "value": "D"
            }
        ],
        "answer": [
            "C"
        ],
        "type": "single"
    },
    {
        "id": "7-43",
        "question": "MySQL 提供 C 語言的介面程式(API)中，下列何項函數傳回目前記錄內各欄位長度的陣列？",
        "options": [
            {
                "label": "mysql_fetch_fields()",
                "value": "A"
            },
            {
                "label": "mysql_fetch_field()",
                "value": "B"
            },
            {
                "label": "mysql_fetch_row()",
                "value": "C"
            },
            {
                "label": "mysql_fetch_lengths()",
                "value": "D"
            }
        ],
        "answer": [
            "D"
        ],
        "type": "single"
    },
    {
        "id": "7-44",
        "question": "MySQL 提供 C 語言的介面程式(API)中，下列何項函數可取出查詢結果集合(query result set)中的下一筆資料？",
        "options": [
            {
                "label": "mysql_fetch_fields()",
                "value": "A"
            },
            {
                "label": "mysql_fetch_field()",
                "value": "B"
            },
            {
                "label": "mysql_fetch_row()",
                "value": "C"
            },
            {
                "label": "mysql_fetch_lengths()",
                "value": "D"
            }
        ],
        "answer": [
            "C"
        ],
        "type": "single"
    },
    {
        "id": "7-45",
        "question": "MySQL 提供 C 語言的介面程式(API)中，下列何項函數可取得最近一次執行查詢指令的資訊？",
        "options": [
            {
                "label": "mysql_info()",
                "value": "A"
            },
            {
                "label": "mysql_init()",
                "value": "B"
            },
            {
                "label": "mysql_insert_id()",
                "value": "C"
            },
            {
                "label": "mysql_kill()",
                "value": "D"
            }
        ],
        "answer": [
            "A"
        ],
        "type": "single"
    },
    {
        "id": "7-46",
        "question": "MySQL 提供 C 語言的介面程式(API)中，下列何項函數可用來計算在查詢結果集合中的資料筆數？",
        "options": [
            {
                "label": "mysql_more_results()",
                "value": "A"
            },
            {
                "label": "mysql_num_rows()",
                "value": "B"
            },
            {
                "label": "mysql_num_fields()",
                "value": "C"
            },
            {
                "label": "mysql_ping()",
                "value": "D"
            }
        ],
        "answer": [
            "B"
        ],
        "type": "single"
    },
    {
        "id": "7-47",
        "question": "MySQL 提供 C 語言的介面程式(API)中，下列何項函數可用來計算在查詢結果集合中的欄位個數？",
        "options": [
            {
                "label": "mysql_more_results()",
                "value": "A"
            },
            {
                "label": "mysql_num_rows()",
                "value": "B"
            },
            {
                "label": "mysql_num_fields()",
                "value": "C"
            },
            {
                "label": "mysql_ping()",
                "value": "D"
            }
        ],
        "answer": [
            "C"
        ],
        "type": "single"
    },
    {
        "id": "7-48",
        "question": "MySQL 提供 C 語言的介面程式(API)中，下列何項函數可用以檢查與 MySQL 伺服器的連線是否正常運作，在必要時可重新連線？ ",
        "options": [
            {
                "label": "mysql_more_results()",
                "value": "A"
            },
            {
                "label": "mysql_num_rows()",
                "value": "B"
            },
            {
                "label": "mysql_num_fields()",
                "value": "C"
            },
            {
                "label": "mysql_ping()",
                "value": "D"
            }
        ],
        "answer": [
            "D"
        ],
        "type": "single"
    },
    {
        "id": "7-49",
        "question": "MySQL 提供 C 語言的介面程式(API)中，下列哪些函數可用來執行 SQL 查詢指令？(複選) ",
        "options": [
            {
                "label": "mysql_query()",
                "value": "A"
            },
            {
                "label": "mysql_real_query()",
                "value": "B"
            },
            {
                "label": "mysql_reload()",
                "value": "C"
            },
            {
                "label": "mysql_rollback()",
                "value": "D"
            }
        ],
        "answer": [
            "A","B"
        ],
        "type": "multiple"
    },
    {
        "id": "7-50",
        "question": "MySQL 提供 C 語言的介面程式(API)中，下列何項函數可用來回復(rollback)交易(transaction)？",
        "options": [
            {
                "label": "mysql_query()",
                "value": "A"
            },
            {
                "label": "mysql_real_query()",
                "value": "B"
            },
            {
                "label": "mysql_reload()",
                "value": "C"
            },
            {
                "label": "mysql_rollback()",
                "value": "D"
            }
        ],
        "answer": [
            "D"
        ],
        "type": "single"
    },
    {
        "id": "8-01",
        "question": "如要刪除檢視表，請問下列指令何者正確？",
        "options": [
            {
                "label": "ERASE VIEW",
                "value": "A"
            },
            {
                "label": "DELETE VIEW",
                "value": "B"
            },
            {
                "label": "CANCEL VIEW",
                "value": "C"
            },
            {
                "label": "DROP VIEW",
                "value": "D"
            }
        ],
        "answer": [
            "D"
        ],
        "type": "single"
    },
    {
        "id": "8-02",
        "question": "下列對於新增檢視表(View)的敘述，何者正確？",
        "media": {
            "type": "table",
            "data" : [
                ["( emp_v：檢視表名稱; emp：資料表名稱; emp_no, sex：欄位名稱; 'F'：欄位值 )"]
            ]
        },
        "options": [
            {
                "label": "CREATE VIEW emp_v AS SELECT emp_no, emp WHERE sex = 'F'",
                "value": "A"
            },
            {
                "label": "CREATE VIEW emp_v AS SELECT emp_no FROM emp WHERE sex = 'F'",
                "value": "B"
            },
            {
                "label": "CREATE VIEW emp_v AS UPDATE emp WHERE sex = 'F'",
                "value": "C"
            },
            {
                "label": "CREATE VIEW emp_v AS UPDATE emp SET sex = 'F' ",
                "value": "D"
            }
        ],
        "answer": [
            "B"
        ],
        "type": "single"
    },
    {
        "id": "8-03",
        "question": "下列對於檢視表(View)的敘述，何者錯誤？",
        "options": [
            {
                "label": "可以合併多個資料表以產生檢視表",
                "value": "A"
            },
            {
                "label": "可以從資料表挑選特定資料欄位以產生檢視表",
                "value": "B"
            },
            {
                "label": "檢視表可以隱藏資料細節，而僅提供彙總資訊",
                "value": "C"
            },
            {
                "label": "檢視表只能從實體資料表取得資料",
                "value": "D"
            }
        ],
        "answer": [
            "D"
        ],
        "type": "single"
    },
    {
        "id": "8-04",
        "question": "下列對於檢視表(View)的敘述，何者錯誤？",
        "options": [
            {
                "label": "檢視表可以簡化查詢的複雜度",
                "value": "A"
            },
            {
                "label": "檢視表可以過濾資料",
                "value": "B"
            },
            {
                "label": "檢視表不可以被更新",
                "value": "C"
            },
            {
                "label": "檢視表可以隱藏資料",
                "value": "D"
            }
        ],
        "answer": [
            "C"
        ],
        "type": "single"
    },
    {
        "id": "8-05",
        "question": "下列對於檢視表(View)的敘述，何者錯誤？",
        "options": [
            {
                "label": "檢視表中含有 DISTINCT 敘述，則不可以被更新",
                "value": "A"
            },
            {
                "label": "檢視表中含有總和計算(SUM)，則不可以被更新",
                "value": "B"
            },
            {
                "label": "檢視表中含有 Group by，則不可以被更新",
                "value": "C"
            },
            {
                "label": "檢視表可以對合併(JOIN)的資料表做更新",
                "value": "D"
            }
        ],
        "answer": [
            "B"
        ],
        "type": "single"
    },
    {
        "id": "8-06",
        "question": "下列對於檢視表(View)的敘述，何者正確？(複選)",
        "options": [
            {
                "label": "SELECT 語句中的 FROM 子句，不能包含子查詢",
                "value": "A"
            },
            {
                "label": "SELECT 語句不能引用系統變數",
                "value": "B"
            },
            {
                "label": "可以將觸發程序與檢視表關聯在一起",
                "value": "C"
            },
            {
                "label": "在檢視表中名稱可以重複",
                "value": "D"
            }
        ],
        "answer": [
            "A","B"
        ],
        "type": "multiple"
    },
    {
        "id": "8-07",
        "question": "請參閱附圖作答",
        "media": {
            "type": "table",
            "data": [
                ["資料表 emp 如下:"],
                
                [["<table><tr><td>Dep</td><td>Name</td><td>Age</td></tr><tr><td>A01</td><td>Tom</td><td>15</td></tr><tr><td>A01</td><td>Mary</td><td>30</td></tr><tr><td>C02</td><td>Jim</td><td>35</td></tr></table>"]],

                ["此時執行 Create View v AS SELECT Dep FROM emp Where Dep = 'A01' AND Age > 20"],
                ["請問 SELECT * FROM v 得到的結果為何？"]
            ]
        },
        "options": [
            {"label": "20", "value": "A"},
            {"label": "Tom", "value": "B"},
            {"label": "Jim", "value": "C"},
            {"label": "A01", "value": "D"}
        ],
        "answer": ["D"],
        "type": "single"
    },
    {
        "id": "8-08",
        "question": "請參閱附圖作答",
        "media": {
            "type": "table",
            "data": [
                ["資料表 emp 如下:"],

                [["<table><tr><td>Dep</td><td>Name</td><td>Age</td></tr><tr><td>A01</td><td>Tom</td><td>15</td></tr><tr><td>A01</td><td>Mary</td><td>30</td></tr><tr><td>C02</td><td>Jim</td><td>35</td></tr></table>"]],

                ["此時執行 Create View v AS SELECT Dep, Age FROM emp Where Dep = 'A01'"],
                ["請問 SELECT sum(Age) From v 得到的結果為何？"]
            ]
        },
        "options": [
            {"label": "01", "value": "A"},
            {"label": "30", "value": "B"},
            {"label": "45", "value": "C"},
            {"label": "15", "value": "D"}
        ],
        "answer": ["C"],
        "type": "single"
    },
    {
        "id": "8-09",
        "question": "請參閱附圖作答",
        "media": {
            "type": "table",
            "data": [
                ["資料表 emp 如下:"],

                
                [["<table><tr><td>Dep</td><td>Name</td><td>Age</td></tr><tr><td>A01</td><td>Tom</td><td>15</td></tr><tr><td>A01</td><td>Mary</td><td>30</td></tr><tr><td>C02</td><td>Jim</td><td>35</td></tr></table>"]],
                
                ["此時執行 Create View v AS SELECT Dep, Age, Name FROM emp"],
                ["請問 SELECT max (Age) From v 得到的結果為何？"]
            ]
        },
        "options": [
            {"label": "C02", "value": "A"},
            {"label": "Jim", "value": "B"},
            {"label": "15", "value": "C"},
            {"label": "35", "value": "D"}
        ],
        "answer": ["D"],
        "type": "single"
    },
    {
        "id": "8-10",
        "question": "請參閱附圖作答",
        "media": {
            "type": "table",
            "data": [
                ["資料表 emp 如下:"],
                
                [["<table><tr><td>Dep</td><td>Name</td><td>Age</td></tr><tr><td>A01</td><td>Tom</td><td>15</td></tr><tr><td>A01</td><td>Mary</td><td>30</td></tr><tr><td>C02</td><td>Jim</td><td>35</td></tr></table>"]],                
                
                ["此時執行 Create View v AS SELECT Dep, Age, Name FROM emp"],
                ["請問 SELECT Dep From v Where Age > 32 得到的結果為何？"]
            ]
        },
        "options": [
            {"label": "A01", "value": "A"},
            {"label": "C02", "value": "B"},
            {"label": "Tom", "value": "C"},
            {"label": "Jim", "value": "D"}
        ],
        "answer": ["B"],
        "type": "single"
    },
    {
        "id": "8-11",
        "question": "對於附圖中的檢視表而言，以下 SQL 指令何者可正確執行？",
        "media": {
            "type": "table",
            "data": [
                ["CREATE VIEW v AS SELECT Dept, COUNT(*) FROM emp GROUP BY Dept"]
            ]
        },
        "options": [
            {"label": "INSERT", "value": "A"},
            {"label": "UPDATE", "value": "B"},
            {"label": "DELETE", "value": "C"},
            {"label": "SELECT", "value": "D"}
        ],
        "answer": ["D"],
        "type": "single"
    },
    {
        "id": "8-12",
        "question": "關於 MySQL 預儲程序(Stored Procedure)的敘述，下列何者錯誤？",
        "options": [
            {
                "label": "資料庫移除的時候，與它關聯的所有預儲程序也都被移除",
                "value": "A"
            },
            {
                "label": "執行預儲程序時不可以傳遞參數",
                "value": "B"
            },
            {
                "label": "CALL 指令用來執行預儲程序 ",
                "value": "C"
            },
            {
                "label": "預儲程序中使用 DECLARE 設定區域變數",
                "value": "D"
            }
        ],
        "answer": [
            "B"
        ],
        "type": "single"
    },
    {
        "id": "8-13",
        "question": "關於 MySQL 預儲程序(Stored Procedure)的敘述，下列何者錯誤？",
        "options": [
            {
                "label": "可以從預儲程序呼叫預儲程序",
                "value": "A"
            },
            {
                "label": "增加資料庫的安全性",
                "value": "B"
            },
            {
                "label": "預儲程序需要在 mysql 資料庫中有 proc 表",
                "value": "C"
            },
            {
                "label": "建立預儲程序需要在資料庫中有 INSERT 的權限",
                "value": "D"
            }
        ],
        "answer": [
            "D"
        ],
        "type": "single"
    },
    {
        "id": "8-14",
        "question": "建立預儲程序需要 MySQL 資料庫有下列何項資料表？",
        "options": [
            {
                "label": "db table",
                "value": "A"
            },
            {
                "label": "func table",
                "value": "B"
            },
            {
                "label": "user table",
                "value": "C"
            },
            {
                "label": "proc table",
                "value": "D"
            }
        ],
        "answer": [
            "D"
        ],
        "type": "single"
    },
    {
        "id": "8-15",
        "question": "建立預儲程序使用者需要有下列何項權限？",
        "options": [
            {
                "label": "Insert",
                "value": "A"
            },
            {
                "label": "Create",
                "value": "B"
            },
            {
                "label": "Create Routine",
                "value": "C"
            },
            {
                "label": "Grant",
                "value": "D"
            }
        ],
        "answer": [
            "C"
        ],
        "type": "single"
    },
    {
        "id": "8-16",
        "question": "修改預儲程序使用者需要有下列何項權限？",
        "options": [
            {
                "label": "Update",
                "value": "A"
            },
            {
                "label": "Alter",
                "value": "B"
            },
            {
                "label": "Grant",
                "value": "C"
            },
            {
                "label": "Alter Routine",
                "value": "D"
            }
        ],
        "answer": [
            "D"
        ],
        "type": "single"
    },
    {
        "id": "8-17",
        "question": "刪除預儲程序使用者需要有下列何項權限？",
        "options": [
            {
                "label": "Drop",
                "value": "A"
            },
            {
                "label": "Delete",
                "value": "B"
            },
            {
                "label": "Alter Routine",
                "value": "C"
            },
            {
                "label": "Grant",
                "value": "D"
            }
        ],
        "answer": [
            "C"
        ],
        "type": "single"
    },
    {
        "id": "8-18",
        "question": "執行預儲程序使用者需要有下列何項權限？",
        "options": [
            {
                "label": "Execute",
                "value": "A"
            },
            {
                "label": "Run",
                "value": "B"
            },
            {
                "label": "Prcoess",
                "value": "C"
            },
            {
                "label": "Reload",
                "value": "D"
            }
        ],
        "answer": [
            "A"
        ],
        "type": "single"
    },
    {
        "id": "8-19",
        "question": "在 MySQL 中要執行預儲程序需要下列何項指令？",
        "options": [
            {
                "label": "Run",
                "value": "A"
            },
            {
                "label": "Execute",
                "value": "B"
            },
            {
                "label": "Call",
                "value": "C"
            },
            {
                "label": "Enter",
                "value": "D"
            }
        ],
        "answer": [
            "C"
        ],
        "type": "single"
    },
    {
        "id": "8-20",
        "question": "預儲程序中的 SQL 指令必須要以下列何項符號做結尾？",
        "options": [
            {
                "label": ",",
                "value": "A"
            },
            {
                "label": ")",
                "value": "B"
            },
            {
                "label": "#",
                "value": "C"
            },
            {
                "label": ";",
                "value": "D"
            }
        ],
        "answer": [
            "D"
        ],
        "type": "single"
    },
    {
        "id": "8-21",
        "question": "要刪除預儲程序下列指令何者正確？",
        "options": [
            {
                "label": "DELETE PROCEDURE",
                "value": "A"
            },
            {
                "label": "ERASE PROCEDURE",
                "value": "B"
            },
            {
                "label": "DROP PROCEDURE",
                "value": "C"
            },
            {
                "label": "ALTER PROCEDURE",
                "value": "D"
            }
        ],
        "answer": [
            "C"
        ],
        "type": "single"
    },
    {
        "id": "8-22",
        "question": "要修改預儲程序下列指令何者正確？",
        "options": [
            {
                "label": "MODIFY PROCEDURE",
                "value": "A"
            },
            {
                "label": "UPDATE PROCEDURE",
                "value": "B"
            },
            {
                "label": "DROP PROCEDURE",
                "value": "C"
            },
            {
                "label": "ALTER PROCEDURE",
                "value": "D"
            }
        ],
        "answer": [
            "D"
        ],
        "type": "single"
    },
    {
        "id": "8-23",
        "question": "下列何者為預儲程序中流程控制可用的判斷式？(複選)",
        "options": [
            {
                "label": "IF...HEN...END IF ",
                "value": "A"
            },
            {
                "label": "CASE...END CASE",
                "value": "B"
            },
            {
                "label": "WHILE...END WHILE",
                "value": "C"
            },
            {
                "label": "LOOP...END LOOP",
                "value": "D"
            }
        ],
        "answer": [
            "A","B"
        ],
        "type": "multiple"
    },
    {
        "id": "8-24",
        "question": "下列何者為預儲程序中流程控制的迴圈式？(複選)",
        "options": [
            {
                "label": "IF...THEN...END IF ",
                "value": "A"
            },
            {
                "label": "CASE...END CASE",
                "value": "B"
            },
            {
                "label": "WHILE...END WHILE",
                "value": "C"
            },
            {
                "label": "LOOP...END LOOP",
                "value": "D"
            }
        ],
        "answer": [
            "C","D"
        ],
        "type": "multiple"
    },
    {
        "id": "8-25",
        "question": "在預儲程序中下列哪些指令可用來指定參數傳遞的方式？(複選)",
        "options": [
            {
                "label": "IN",
                "value": "A"
            },
            {
                "label": "OUT",
                "value": "B"
            },
            {
                "label": "INOUT",
                "value": "C"
            },
            {
                "label": "OUTIN",
                "value": "D"
            }
        ],
        "answer": [
            "A","B","C"
        ],
        "type": "multiple"
    },
    {
        "id": "8-26",
        "question": "請參閱附圖作答",
        "media": {
            "type": "table",
            "data": [
                ["預儲程序如下："],
                [["CREATE PROCEDURE doloop(p1 INT)"]],
                [["BEGIN"]],
                [["  Loop1：LOOP"]],  
                [["    SET p1 = p1 + 1;"]], 
                [["    IF p1 < 10 THEN ITERATE Loop1;  END IF;"]],
                [["    LEAVE Loop1;"]], 
                [["  END LOOP Loop1;"]], 
                [["  SET @x = p1;"]],  
                [["END"]],

                ["如使用者執行"],
                [["set @x = 15;"]],
                [["call doloop(5);"]],
                [["select @x;"]],
                ["請問所得數值為何？"]
            ]
        },
        "options": [
            {"label": "5", "value": "A"},
            {"label": "10", "value": "B"},
            {"label": "15", "value": "C"},
            {"label": "20", "value": "D"}
        ],
        "answer": ["B"],
        "type": "single"
    },
    {
        "id": "8-27",
        "question": "請參閱附圖作答",
        "media": {
            "type": "table",
            "data": [
                ["預儲程序如下："],
                [["CREATE PROCEDURE runrepeat(p1 INT)"]],
                [["BEGIN"]],
                [["  SET @x = 0;"]],
                [["  REPEAT SET @x = @x+1;"]],
                [["  UNTIL @X > p1 END REPEAT"]],
                [["END"]],

                ["如使用者執行"],
                [["set @x = 35;"]],
                [["call runrepeat (15);"]],
                [["select @x;"]],
                ["請問所得數值為何？"]
            ]
        },
        "options": [
            {"label": "35", "value": "A"},
            {"label": "36", "value": "B"},
            {"label": "15", "value": "C"},
            {"label": "16", "value": "D"}
        ],
        "answer": ["D"],
        "type": "single"
    },
    {
        "id": "8-28",
        "question": "請參閱附圖作答",
        "media": {
            "type": "table",
            "data": [
                ["預儲程序如下："],
                [["CREATE PROCEDURE runwhile()"]],
                [["BEGIN"]],
                [["  DECLARE v1 INT DEFAULT 5;"]],
                [["  WHILE v1 > 0 DO"]],
                [["    SET @x = @X – 1;"]],
                [["    SET v1 = v1 - 1;"]],
                [["  END WHILE;"]],
                [["END"]],

                ["如使用者執行"],
                ["set @x = 45;"],
                ["call runwhile();"],
                ["select @x;"],
                ["請問所得數值為何"]
            ]
        },
        "options": [
            {"label": "35", "value": "A"},
            {"label": "40", "value": "B"},
            {"label": "45", "value": "C"},
            {"label": "50", "value": "D"}
        ],
        "answer": ["B"],
        "type": "single"
    }, 
    {
        "id": "8-29",
        "question": "請參閱附圖作答",
        "media": {
            "type": "table",
            "data": [
                ["自訂函式如下："],
                [["CREATE FUNCTION func1() RETURNS INT"]],
                [["BEGIN"]],
                [["  DECLARE v1 INT DEFAULT 5;"]],
                [["  WHILE v1 > 0 DO"]],
                [["    SET v1 = v1 - 1;"]],
                [["  END WHILE;"]],
                [["  RETURN v1;"]],
                [["END"]],

                ["如使用者執行"],
                ["select func1();"],
                ["請問所得數值為何？"]
            ]
        },
        "options": [
            {"label": "5", "value": "A"},
            {"label": "10", "value": "B"},
            {"label": "0", "value": "C"},
            {"label": "1", "value": "D"}
        ],
        "answer": ["C"],
        "type": "single"
    },
    {
        "id": "8-30",
        "question": "請參閱附圖作答",
        "media": {
            "type": "table",
            "data": [
                ["自訂函式如下："],
                [["CREATE FUNCTION func2(p1 INT) RETURNS INT"]],
                [["BEGIN"]],
                [["  IF p1 < 10 THEN RETURN 0;"]],
                [["  ELSE RETURN 20;"]],
                [["  END IF;"]],
                [["END"]],

                ["如使用者執行"],
                ["select func1(25);"],
                ["請問所得數值為何？"]
            ]
        },
        "options": [
            {"label": "5", "value": "A"},
            {"label": "10", "value": "B"},
            {"label": "20", "value": "C"},
            {"label": "25", "value": "D"}
        ],
        "answer": ["C"],
        "type": "single"
    },
    {
        "id": "8-31",
        "question": "請參閱附圖作答",
        "media": {
            "type": "table",
            "data": [
                ["自訂函式如下："],
                [["CREATE FUNCTION func3(p1 INT) RETURNS INT"]],
                [["BEGIN"]],
                [["  CASE p1"]],
                [["    WHEN 1 THEN RETURN 10;"]],
                [["    WHEN 2 THEN RETURN 20;"]],
                [["    WHEN 3 THEN RETURN 30;"]],
                [["    ELSE RETURN 40;"]],
                [["  END CASE;"]],
                [["END"]],

                ["如使用者執行"],
                ["select func3(20);"],
                ["請問所得數值為何？"]
            ]
        },

        "options": [
            {"label": "10", "value": "A"},
            {"label": "20", "value": "B"},
            {"label": "30", "value": "C"},
            {"label": "40", "value": "D"}
        ],
        "answer": ["D"],
        "type": "single"
    },
    {
        "id": "8-32",
        "question": "在自訂函式中要回傳結果，需使用下列何項指令？",
        "options": [
            {
                "label": "Revert",
                "value": "A"
            },
            {
                "label": "Go back",
                "value": "B"
            },
            {
                "label": "Back",
                "value": "C"
            },
            {
                "label": "Returns",
                "value": "D"
            }
        ],
        "answer": [
            "D"
        ],
        "type": "single"
    },
    {
        "id": "8-33",
        "question": "建立自訂函式使用者需要下列何項權限？",
        "options": [
            {
                "label": "Insert",
                "value": "A"
            },
            {
                "label": "Create",
                "value": "B"
            },
            {
                "label": "Create Routine",
                "value": "C"
            },
            {
                "label": "Grant",
                "value": "D"
            }
        ],
        "answer": [
            "C"
        ],
        "type": "single"
    },
    {
        "id": "8-34",
        "question": "修改自訂函式使用者需要有下列何項權限？",
        "options": [
            {
                "label": "Update",
                "value": "A"
            },
            {
                "label": "Alter",
                "value": "B"
            },
            {
                "label": "Grant",
                "value": "C"
            },
            {
                "label": "Alter Routine",
                "value": "D"
            }
        ],
        "answer": [
            "D"
        ],
        "type": "single"
    },
    {
        "id": "8-35",
        "question": "刪除自訂函式使用者需要有下列何項權限？",
        "options": [
            {
                "label": "Drop",
                "value": "A"
            },
            {
                "label": "Delete",
                "value": "B"
            },
            {
                "label": "Alter Routine",
                "value": "C"
            },
            {
                "label": "Grant",
                "value": "D"
            }
        ],
        "answer": [
            "C"
        ],
        "type": "single"
    },
    {
        "id": "8-36",
        "question": "執行自訂函式使用者需要下列何項權限？",
        "options": [
            {
                "label": "Execute",
                "value": "A"
            },
            {
                "label": "Run",
                "value": "B"
            },
            {
                "label": "Process",
                "value": "C"
            },
            {
                "label": "Reload",
                "value": "D"
            }
        ],
        "answer": [
            "A"
        ],
        "type": "single"
    },
    {
        "id": "8-37",
        "question": "在自訂函式中下列何項可用來指定參數傳遞的方式？",
        "options": [
            {
                "label": "IN",
                "value": "A"
            },
            {
                "label": "OUT",
                "value": "B"
            },
            {
                "label": "INOUT",
                "value": "C"
            },
            {
                "label": "OUTIN",
                "value": "D"
            }
        ],
        "answer": [
            "A"
        ],
        "type": "single"
    },
    {
        "id": "8-38",
        "question": "下列哪些事件能夠引起觸發程序？(複選)",
        "options": [
            {
                "label": "INSERT",
                "value": "A"
            },
            {
                "label": "SELECT",
                "value": "B"
            },
            {
                "label": "ALTER",
                "value": "C"
            },
            {
                "label": "UPDATE",
                "value": "D"
            }
        ],
        "answer": [
            "A","D"
        ],
        "type": "multiple"
    },
    {
        "id": "8-39",
        "question": "要讓觸發程序在事件發生後被觸發，需使用下列何項指令？",
        "options": [
            {
                "label": "BEHIND",
                "value": "A"
            },
            {
                "label": "NEXT",
                "value": "B"
            },
            {
                "label": "AFTER",
                "value": "C"
            },
            {
                "label": "BEFORE",
                "value": "D"
            }
        ],
        "answer": [
            "C"
        ],
        "type": "single"
    },
    {
        "id": "8-40",
        "question": "要讓觸發程序在事件發生前被觸發，需使用下列何項指令？",
        "options": [
            {
                "label": "AHEAD",
                "value": "A"
            },
            {
                "label": "PRIOR",
                "value": "B"
            },
            {
                "label": "AFTER",
                "value": "C"
            },
            {
                "label": "BEFORE",
                "value": "D"
            }
        ],
        "answer": [
            "D"
        ],
        "type": "single"
    },
    {
        "id": "8-41",
        "question": "下列何項指令可新增觸發程序？",
        "options": [
            {
                "label": "ADD TRIGGER",
                "value": "A"
            },
            {
                "label": "CREATE TRIGGER",
                "value": "B"
            },
            {
                "label": "MAKE TRIGGER ",
                "value": "C"
            },
            {
                "label": "SET TRIGGER",
                "value": "D"
            }
        ],
        "answer": [
            "B"
        ],
        "type": "single"
    },
    {
        "id": "8-42",
        "question": "下列何項指令可刪除觸發程序？",
        "options": [
            {
                "label": "DELETE TRIGGER",
                "value": "A"
            },
            {
                "label": "EREASE TRIGGER",
                "value": "B"
            },
            {
                "label": "DROP TRIGGER",
                "value": "C"
            },
            {
                "label": "ALTER TRIGGER",
                "value": "D"
            }
        ],
        "answer": [
            "C"
        ],
        "type": "single"
    },
    {
        "id": "8-43",
        "question": "下列對於觸發程序的敘述何者正確？",
        "options": [
            {
                "label": "觸發程序不能接受參數",
                "value": "A"
            },
            {
                "label": "觸發程序只能傳遞參數",
                "value": "B"
            },
            {
                "label": "觸發程序可以被多個事件觸發",
                "value": "C"
            },
            {
                "label": "觸發程序不能刪除資料",
                "value": "D"
            }
        ],
        "answer": [
            "A"
        ],
        "type": "single"
    },
    {
        "id": "8-44",
        "question": "下列對於觸發程序的敘述何者正確？",
        "options": [
            {
                "label": "觸發程序中可以引用實體資料表",
                "value": "A"
            },
            {
                "label": "觸發程序中可以引用檢視表",
                "value": "B"
            },
            {
                "label": "觸發程序中可以引用暫存表",
                "value": "C"
            },
            {
                "label": "觸發程序中可以引用實體資料表及暫存表",
                "value": "D"
            }
        ],
        "answer": [
            "A"
        ],
        "type": "single"
    },
    {
        "id": "8-45",
        "question": "下列對於引用相同資料表，相同事件的觸發程序的敘述何者正確？",
        "options": [
            {
                "label": "只可以有一個 BEFORE 觸發程序",
                "value": "A"
            },
            {
                "label": "只可以有一個 AFTER 觸發程序",
                "value": "B"
            },
            {
                "label": "可同時有一個 BEFORE 觸發程序，一個 AFTER 觸發程序",
                "value": "C"
            },
            {
                "label": "可同時有一個 BEFORE 觸發程序，一個 NEXT 觸發程序",
                "value": "D"
            }
        ],
        "answer": [
            "C"
        ],
        "type": "single"
    },
    {
        "id": "8-46",
        "question": "建立觸發程序使用者需要有下列何項權限？",
        "options": [
            {
                "label": "Insert",
                "value": "A"
            },
            {
                "label": "Create",
                "value": "B"
            },
            {
                "label": "Create Routine",
                "value": "C"
            },
            {
                "label": "Super",
                "value": "D"
            }
        ],
        "answer": [
            "D"
        ],
        "type": "single"
    },
    {
        "id": "8-47",
        "question": "刪除觸發程序使用者需要有下列何項權限？",
        "options": [
            {
                "label": "Drop",
                "value": "A"
            },
            {
                "label": "Delete",
                "value": "B"
            },
            {
                "label": "Super",
                "value": "C"
            },
            {
                "label": "Grant",
                "value": "D"
            }
        ],
        "answer": [
            "C"
        ],
        "type": "single"
    },
    {
        "id": "8-48",
        "question": "當資料異動無法成功執行時，需透過下列何項指令將系統回復？",
        "options": [
            {
                "label": "undo",
                "value": "A"
            },
            {
                "label": "rollback",
                "value": "B"
            },
            {
                "label": "cancel",
                "value": "C"
            },
            {
                "label": "back",
                "value": "D"
            }
        ],
        "answer": [
            "B"
        ],
        "type": "single"
    },
    {
        "id": "8-49",
        "question": "當資料異動執行成功時，需透過下列何項指令讓系統確認？",
        "options": [
            {
                "label": "finish",
                "value": "A"
            },
            {
                "label": "commit",
                "value": "B"
            },
            {
                "label": "done",
                "value": "C"
            },
            {
                "label": "submit",
                "value": "D"
            }
        ],
        "answer": [
            "B"
        ],
        "type": "single"
    },
    {
        "id": "8-50",
        "question": "下列哪些 MySQL 資料表型態有支援 transaction 功能？(複選)",
        "options": [
            {
                "label": "MyISAM",
                "value": "A"
            },
            {
                "label": "ISAM",
                "value": "B"
            },
            {
                "label": "BDB",
                "value": "C"
            },
            {
                "label": "Innodb",
                "value": "D"
            }
        ],
        "answer": [
            "C","D"
        ],
        "type": "multiple"
    },
    {
        "id": "8-51",
        "question": "在 MySQL 要開始一個 transaction 需使用下列何項指令？",
        "options": [
            {
                "label": "Start",
                "value": "A"
            },
            {
                "label": "Start Transaction",
                "value": "B"
            },
            {
                "label": "Begin Transaction",
                "value": "C"
            },
            {
                "label": "Open Transaction",
                "value": "D"
            }
        ],
        "answer": [
            "B"
        ],
        "type": "single"
    },
    {
        "id": "8-52",
        "question": "下列何項指令可鎖定資料表 emp ？",
        "options": [
            {
                "label": "LOCK emp",
                "value": "A"
            },
            {
                "label": "LOCK emp READ",
                "value": "B"
            },
            {
                "label": "LOCK TABLES emp",
                "value": "C"
            },
            {
                "label": "LOCK TABLES emp READ",
                "value": "D"
            }
        ],
        "answer": [
            "D"
        ],
        "type": "single"
    },
    {
        "id": "8-53",
        "question": "下列何項指令可解除鎖定資料表 emp ？",
        "options": [
            {
                "label": "UNLOCK",
                "value": "A"
            },
            {
                "label": "UNLOCK emp",
                "value": "B"
            },
            {
                "label": "UNLOCK TABLES",
                "value": "C"
            },
            {
                "label": "LOCK TABLES emp",
                "value": "D"
            }
        ],
        "answer": [
            "C"
        ],
        "type": "single"
    },
    {
        "id": "8-54",
        "question": "在 MySQL 中要啟動交易(transaction)功能，下列指令何者正確？",
        "options": [
            {
                "label": "SET COMMIT = 0",
                "value": "A"
            },
            {
                "label": "SET COMMIT = 1",
                "value": "B"
            },
            {
                "label": "SET AUTOCOMMIT = 1",
                "value": "C"
            },
            {
                "label": "SET AUTOCOMMIT = 0",
                "value": "D"
            }
        ],
        "answer": [
            "D"
        ],
        "type": "single"
    },
    {
        "id": "8-55",
        "question": "請參閱附圖中所顯示的資料表 product 作答",
        "media": {
            "type": "table",
            "data": [
                ["資料表 emp 如下:"],

                [["<table><tr><td>Pid</td><td>quantity</td></tr><tr><td>A01</td><td>100</td></tr><tr><td>A02</td><td>150</td></tr><tr><td>B03</td><td>200</td></tr></table>"]],
                
                ["有 A、B 兩個使用者，當 A 使用者執行交易(transaction)功能"],
                ["BEGIN WORK UPDATE product SET quantity = 200 WHERE PID = 'A01'"],
                ["B 使用者執行"],
                ["SELECT quantity FROM product WHERE PID = 'A01'"],
                ["所得到的值是多少？"]
            ]
        },
        "options": [
            {"label": "150", "value": "A"},
            {"label": "100", "value": "B"},
            {"label": "200", "value": "C"},
            {"label": "300", "value": "D"}
        ],
        "answer": ["B"],
        "type": "single"
    },
    {
        "id": "8-56",
        "question": "請參閱附圖中所顯示的資料表 product 作答",
        "media" : {
            "type": "table",
            "data": [
                ["資料表 emp 如下:"],
                
                [["<table><tr><td>Pid</td><td>quantity</td></tr><tr><td>A01</td><td>300</td></tr><tr><td>A02</td><td>450</td></tr><tr><td>B03</td><td>200</td></tr></table>"]],
                      
                ["有 A、B 兩個使用者，當 A 使用者執行交易(transaction)功能"],
                ["BEGIN WORK UPDATE product SET quantity = 100 WHERE PID = 'A02' COMMIT"],
                ["B 使用者執行"],
                ["SELECT quantity FROM product WHERE PID = 'A02'"],
                ["所得到的值是多少？"]
            ]
        },
        "options": [
            {"label": "450", "value": "A"},
            {"label": "100", "value": "B"},
            {"label": "200", "value": "C"},
            {"label": "300", "value": "D"}
        ],
        "answer": ["B"],
        "type": "single"
    },
    {
        "id": "8-57",
        "question": "請參閱附圖中所顯示的資料表 product 作答",
        "media": {
            "type": "table",
            "data": [
                ["資料表 emp 如下:"],
                
                [["<table><tr><td>Pid</td><td>quantity</td></tr><tr><td>A01</td><td>300</td></tr><tr><td>A02</td><td>450</td></tr><tr><td>B03</td><td>200</td></tr></table>"]],              
                
                ["有 A、B 兩個使用者，當 A 使用者執行交易(transaction)功能"],
                ["BEGIN WORK INSERT INTO product VALUES(600, 400) COMMIT"],
                ["B 使用者執行"],
                ["SELECT quantity FROM product WHERE PID = 'A01'"],
                ["所得到的值是多少？"]
            ]
        },
        "options": [
            {"label": "600", "value": "A"},
            {"label": "400", "value": "B"},
            {"label": "200", "value": "C"},
            {"label": "300", "value": "D"}
        ],
        "answer": ["D"],
        "type": "single"
    },
    {
        "id": "8-58",
        "question": "請參閱附圖中所顯示的資料表 product 作答",
        "media": {
            "type": "table",
            "data": [
                ["資料表 emp 如下:"],

                [["<table><tr><td>Pid</td><td>quantity</td></tr><tr><td>A01</td><td>300</td></tr><tr><td>A02</td><td>200</td></tr><tr><td>B03</td><td>200</td></tr></table>"]],

                ["有 A、B 兩個使用者，當 A 使用者執行交易(transaction)功能"],
                ["BEGIN WORK INSERT INTO product VALUES(600, 400) COMMIT"],
                ["B 使用者執行"],
                ["SELECT SUM(quantity) FROM product"],
                ["所得到的值是多少？"]
            ]
        },
        "options": [
            {"label": "600", "value": "A"},
            {"label": "700", "value": "B"},
            {"label": "1100", "value": "C"},
            {"label": "1300", "value": "D"}
        ],
        "answer": ["D"],
        "type": "single"
    },
    {
        "id": "8-59",
        "question": "請參閱附圖中所顯示的資料表 product 作答",
        "media": {
            "type": "table",
            "data": [
                ["資料表 emp 如下:"],
                
                [["<table><tr><td>Pid</td><td>quantity</td></tr><tr><td>A01</td><td>300</td></tr><tr><td>A02</td><td>200</td></tr><tr><td>B03</td><td>200</td></tr></table>"]],    
            
                ["有 A、B 兩個使用者，當 A 使用者執行交易(transaction)功能"],
                ["BEGIN WORK INSERT INTO product VALUES(600, 400) ROLLBACK"],
                ["B 使用者執行"],
                ["SELECT SUM(quantity) FROM product"],
                ["所得到的值是多少？"]
            ]
        },
        "options": [
            {"label": "600", "value": "A"},
            {"label": "700", "value": "B"},
            {"label": "1100", "value": "C"},
            {"label": "1300", "value": "D"}
        ],
        "answer": ["B"],
        "type": "single"
    },
    {
        "id": "8-60",
        "question": "請參閱附圖中所顯示的資料表 product 作答",
        "media": {
            "type": "table",
            "data": [
                ["資料表 emp 如下:"],                
                
                [["<table><tr><td>Pid</td><td>quantity</td></tr><tr><td>A01</td><td>300</td></tr><tr><td>A02</td><td>200</td></tr><tr><td>B03</td><td>200</td></tr></table>"]],
                
                ["有 A、B 兩個使用者，當 A 使用者執行交易(transaction)功能"],
                ["BEGIN WORK INSERT INTO product VALUES(600, 400) ROLLBACK UPDATE product SET quantity = 100 WHERE PID = 'A02' COMMIT"],
                ["B 使用者執行"],
                ["SELECT SUM(quantity) FROM product"],
                ["所得到的值是多少？"]
            ]
        },
        "options": [
            {"label": "600", "value": "A"},
            {"label": "700", "value": "B"}, 
            {"label": "1100", "value": "C"},
            {"label": "1300", "value": "D"}
        ],
        "answer": ["A"],
        "type": "single"
    },
    {
        "id": "9-01",
        "question": "MySQL 5.1 支援以下那些儲存引擎(storage engine)？(複選)",
        "options": [
            {
                "label": "MyISAM",
                "value": "A"
            },
            {
                "label": "InnoDB",
                "value": "B"
            },
            {
                "label": "Memory",
                "value": "C"
            },
            {
                "label": "Merge",
                "value": "D"
            }
        ],
        "answer": [
            "A","B","C","D"
        ],
        "type": "multiple"
    },
    {
        "id": "9-02",
        "question": "下列哪一種儲存引擎是 MySQL 預設的儲存引擎？",
        "options": [
            {
                "label": "MyISAM",
                "value": "A"
            },
            {
                "label": "InnoDB",
                "value": "B"
            },
            {
                "label": "Memory",
                "value": "C"
            },
            {
                "label": "Merge",
                "value": "D"
            }
        ],
        "answer": [
            "A"
        ],
        "type": "single"
    },
    {
        "id": "9-03",
        "question": "每個 MyISAM 資料表會在磁碟上儲存三個檔案，分別儲存該資料表的結構、資料和索引，下列哪些是這三個檔案的副檔名？(複選) ",
        "options": [
            {
                "label": ".frm",
                "value": "A"
            },
            {
                "label": ".MYD",
                "value": "B"
            },
            {
                "label": ".MYI",
                "value": "C"
            },
            {
                "label": ".exe",
                "value": "D"
            }
        ],
        "answer": [
            "A","B","C"
        ],
        "type": "multiple"
    },
    {
        "id": "9-04",
        "question": "建立資料表時，若要指定儲存引擎，可類似以下指令建立：CREATE TABLE t(i INT)參數名稱 = MYISAM; 試問，參數名稱的地方要填入下列何項？",
        "options": [
            {
                "label": "STORAGE",
                "value": "A"
            },
            {
                "label": "ENGINE",
                "value": "B"
            },
            {
                "label": "ORDER",
                "value": "C"
            },
            {
                "label": "WHERE",
                "value": "D"
            }
        ],
        "answer": [
            "B"
        ],
        "type": "single"
    },
    {
        "id": "9-05",
        "question": "下列哪一種儲存引擎常被用於交易處理(transaction processing)應用程式，並支援 ACID 交易特性和外部索引鍵？",
        "options": [
            {
                "label": "MyISAM ",
                "value": "A"
            },
            {
                "label": "InnoDB",
                "value": "B"
            },
            {
                "label": "Memory",
                "value": "C"
            },
            {
                "label": "Merge",
                "value": "D"
            }
        ],
        "answer": [
            "B"
        ],
        "type": "single"
    },
    {
        "id": "9-06",
        "question": "下列哪一種儲存引擎將所有資料儲存於隨機存取記憶體(RAM)中以達到迅速搜尋資料的目的，也就是一般所稱的堆積(HEAP)引擎？",
        "options": [
            {
                "label": "MyISAM",
                "value": "A"
            },
            {
                "label": "InnoDB",
                "value": "B"
            },
            {
                "label": "Memory",
                "value": "C"
            },
            {
                "label": "Merge",
                "value": "D"
            }
        ],
        "answer": [
            "C"
        ],
        "type": "single"
    },
    {
        "id": "9-07",
        "question": "請參閱附圖作答",
        "media" : {
            "type": "table",
            "data": [
                ["下列哪一種儲存引擎允許 MySQL 資料庫管理者或開發者將依些相"],
                ["同的 MyISAM 資料表在邏輯上群組起來，並且將其參考為物件，"],
                ["適合於像資料倉儲(data warehousing)等超大型資料庫(VLDB)環境？"]
            ]
        },
        "options": [
            {"label": "MyISAM", "value": "A"},
            {"label": "InnoDB", "value": "B"},
            {"label": "Memory", "value": "C"},
            {"label": "Merge", "value": "D"}
        ],
        "answer": ["D"],
        "type": "single"
    },
    {
        "id": "9-08",
        "question": "下列哪一種儲存引擎對於存取大量少用性的歷史、存檔用或者安全性審核資訊，提供完美的解決方案？",
        "options": [
            {
                "label": "Archive",
                "value": "A"
            },
            {
                "label": "Blackhole",
                "value": "B"
            },
            {
                "label": "CSV",
                "value": "C"
            },
            {
                "label": "NDB",
                "value": "D"
            }
        ],
        "answer": [
            "A"
        ],
        "type": "single"
    },
    {
        "id": "9-09",
        "question": "下列哪一種儲存引擎可以串連分散的 MySQL 伺服器，由許多實體的伺服器建立一個邏輯資料庫，非常適合在分散式的環境中使用？",
        "options": [
            {
                "label": "Archive",
                "value": "A"
            },
            {
                "label": "Blackhole",
                "value": "B"
            },
            {
                "label": "Federated",
                "value": "C"
            },
            {
                "label": "NDB",
                "value": "D"
            }
        ],
        "answer": [
            "C"
        ],
        "type": "single"
    },
    {
        "id": "9-10",
        "question": "下列哪一種儲存引擎屬於叢集式資料庫引擎(clustered database enginee)，適合用於高效能搜尋及需要最高階的反應時間和可用性要求的應用程式？",
        "options": [
            {
                "label": "Archive",
                "value": "A"
            },
            {
                "label": "Blackhole",
                "value": "B"
            },
            {
                "label": "Federated",
                "value": "C"
            },
            {
                "label": "NDB",
                "value": "D"
            }
        ],
        "answer": [
            "D"
        ],
        "type": "single"
    },
    {
        "id": "9-11",
        "question": "下列哪一種儲存引擎是以逗號分隔的文字檔儲存，便於在支援該種格式的其他軟體和應用程式間作匯出與匯入的動作？",
        "options": [
            {
                "label": "Archive",
                "value": "A"
            },
            {
                "label": "CSV",
                "value": "B"
            },
            {
                "label": "Federated",
                "value": "C"
            },
            {
                "label": "NDB",
                "value": "D"
            }
        ],
        "answer": [
            "B"
        ],
        "type": "single"
    },
    {
        "id": "9-12",
        "question": "下列哪一種儲存引擎會接受指令但不存資料，搜尋資料時均回傳空集合，其功能被使用在資料會自動複製但不在本地端儲存的分散式資料庫設計？",
        "options": [
            {
                "label": "Blackhole",
                "value": "A"
            },
            {
                "label": "CSV",
                "value": "B"
            },
            {
                "label": "Federated",
                "value": "C"
            },
            {
                "label": "NDB",
                "value": "D"
            }
        ],
        "answer": [
            "A"
        ],
        "type": "single"
    },
    {
        "id": "9-13",
        "question": "下列哪一種引擎是不作處理的空殼引擎，可以建立資料表，但無法儲存和擷取資料，目的在於提供 MySQL 原始程式一個如何寫入新儲存引擎的範例？",
        "options": [
            {
                "label": "Blackhole",
                "value": "A"
            },
            {
                "label": "Example",
                "value": "B"
            },
            {
                "label": "Federated",
                "value": "C"
            },
            {
                "label": "NDB",
                "value": "D"
            }
        ],
        "answer": [
            "B"
        ],
        "type": "single"
    },
    {
        "id": "9-14",
        "question": "下列敘述哪些是正確的？(複選)",
        "options": [
            {
                "label": "MySQL 伺服器的開啟、執行與關閉的記錄是儲存於 error log",
                "value": "A"
            },
            {
                "label": "所有更改資料的敘述會被記錄在 binary log",
                "value": "B"
            },
            {
                "label": "超過 long_query_time 指定秒數的 query 指令，或者沒有建立索引(index)的 query 指令，會被記錄到 slow log",
                "value": "C"
            },
            {
                "label": "與用戶端的連線建立，及從用戶端收到的敘述會被記錄到 general query log",
                "value": "D"
            }
        ],
        "answer": [
            "A","B","C","D"
        ],
        "type": "multiple"
    },
    {
        "id": "9-15",
        "question": "所有的記錄檔預設會存放到下列何項 MySQL的目錄下？",
        "options": [
            {
                "label": "bin",
                "value": "A"
            },
            {
                "label": "scripts",
                "value": "B"
            },
            {
                "label": "share",
                "value": "C"
            },
            {
                "label": "data",
                "value": "D"
            }
        ],
        "answer": [
            "D"
        ],
        "type": "single"
    },
    {
        "id": "9-16",
        "question": "將記錄檔關閉後再重開的動作稱為 flushing，試問下列哪些指令可以 flushing 記錄檔？(複選)",
        "options": [
            {
                "label": "mysqladmin shutdown",
                "value": "A"
            },
            {
                "label": "mysqladmin status",
                "value": "B"
            },
            {
                "label": "mysqladmin flush-logs",
                "value": "C"
            },
            {
                "label": "mysqladmin refresh",
                "value": "D"
            }
        ],
        "answer": [
            "C","D"
        ],
        "type": "multiple"
    },
    {
        "id": "9-17",
        "question": "下列哪一種記錄檔當資料庫回復時，該記錄檔可用來更新資料庫，幫助資料庫做回復動作？",
        "options": [
            {
                "label": "error log",
                "value": "A"
            },
            {
                "label": "general query log",
                "value": "B"
            },
            {
                "label": "binary log",
                "value": "C"
            },
            {
                "label": "slow log",
                "value": "D"
            }
        ],
        "answer": [
            "C"
        ],
        "type": "single"
    },
    {
        "id": "9-18",
        "question": "啟動下列何種記錄檔，會造成效能下降約 1 %，但有助於資料的回復？",
        "options": [
            {
                "label": "error log",
                "value": "A"
            },
            {
                "label": "general query log",
                "value": "B"
            },
            {
                "label": "binary log",
                "value": "C"
            },
            {
                "label": "slow log",
                "value": "D"
            }
        ],
        "answer": [
            "C"
        ],
        "type": "single"
    },
    {
        "id": "9-19",
        "question": "關於記錄檔的敘述下列何者正確？(複選)",
        "options": [
            {
                "label": "在 MySQL 5.1.6 版以前，伺服器僅能將 general query log 和 slow query log 的資料寫到記錄檔",
                "value": "A"
            },
            {
                "label": "在 MySQL 5.1.6 版以後，伺服器不能將記錄寫到記錄檔",
                "value": "B"
            },
            {
                "label": "在 MySQL 5.1.6 版以後，伺服器只能將 general query log 寫到 mysql 資料庫中 general_log 資料表中",
                "value": "C"
            },
            {
                "label": "在 MySQL 5.1.6 版以後，general_log 和 slow_log 可以不記錄到 table 只寫到記錄檔中",
                "value": "D"
            }
        ],
        "answer": [
            "A","C","D"
        ],
        "type": "multiple"
    },
    {
        "id": "9-20",
        "question": "請參閱附圖作答",
        "media": {
            "type": "table",
            "data": [
                ["Binary log 的每次寫入預設並無與磁碟同步，"],
                ["所以當作業系統或者機器突然當機(不單指 MySQL 伺服器)，"],
                ["此時 binary log 的最後一些敘述有可能因不及寫入磁碟而遺失，"],
                ["此時可透過下列哪一個系統變數，"],
                ["以指定每經過若干個寫入動作即與磁碟同步？"]
            ]
        },
        "options": [
            {"label": "binlog_cache_use", "value": "A"},
            {"label": "binlog_cache_size", "value": "B"},
            {"label": "sync_binlog", "value": "C"},
            {"label": "max_binlog_cache_size", "value": "D"}
        ],
        "answer": ["C"],
        "type": "single"
    },
    {
        "id": "9-21",
        "question": "請參閱附圖作答",
        "media": {
            "type": "table",
            "data": [
                ["當使用 InnoDB 資料表且 MySQL 伺服器處理一個 COMMIT 敘述時，"],
                ["MySQL 會先寫入整筆交易到 binary log，"],
                ["然後才會提交資料到 InnoDB 資料表，"],
                ["若正好在此兩個動作中間發生當機事件，"],
                ["會造成 binary log 仍會寫入該筆記錄，"],
                ["但 InnoDB 會做回復(Roll back)動作，"],
                ["若要解決此現象，"],
                ["可在執行參數中加入下列哪一個參數，"],
                ["便可避免此問題？"]
            ]
        },
        "options": [
            {"label": "--innodb-safe-binlog", "value": "A"},
            {"label": "--binlog-do-db", "value": "B"},
            {"label": "--binlog-ignore-db", "value": "C"},
            {"label": "--log-bin-index", "value": "D"}
        ],
        "answer": ["A"],
        "type": "single"
    },
    {
        "id": "9-22",
        "question": "下列有關伺服器記錄檔的維護，哪些是正確的？(複選)",
        "options": [
            {
                "label": "記錄檔應該定期清除，以確保記錄檔不會佔據過多空間",
                "value": "A"
            },
            {
                "label": "記錄檔若有必要，應該定時作備份動作",
                "value": "B"
            },
            {
                "label": "Mysqladmin flush-logs 指令可用來強迫 MySQL 開始使用新的記錄檔",
                "value": "C"
            },
            {
                "label": "大部分記錄檔沒有保留價值，可以不用備份",
                "value": "D"
            }
        ],
        "answer": [
            "A","B","C"
        ],
        "type": "multiple"
    },
    {
        "id": "9-23",
        "question": "下列哪些事件的發生，會導致 MyISAM 資料表內容會紊亂不正常？(複選)",
        "options": [
            {
                "label": "在資料的寫入過程中，mysql 程序被強迫中止",
                "value": "A"
            },
            {
                "label": "無預警電腦突然關機",
                "value": "B"
            },
            {
                "label": "硬體故障",
                "value": "C"
            },
            {
                "label": "當使用外部程式修改資料表（例如：myisamchk），而此時，MySQL 伺服器也正在修改資料表",
                "value": "D"
            }
        ],
        "answer": [
            "A","B","C","D"
        ],
        "type": "multiple"
    },
    {
        "id": "9-24",
        "question": "下列關於 MyISAM 資料表的敘述哪些正確？(複選)",
        "options": [
            {
                "label": "若要檢查 MyISAM 資料表的狀況，可使用 CHECK TABLE 敘述",
                "value": "A"
            },
            {
                "label": "若要修復紊亂不正常的 MyISAM 資料表，可使用 REPAIR TABLE 敘述",
                "value": "B"
            },
            {
                "label": "當 mysql 沒有在執行時，仍可使用 myisamchk 指令作檢查與修復資料表的動作",
                "value": "C"
            },
            {
                "label": "當 mysql 沒有在執行時，無法作資料表的檢查與修復動作",
                "value": "D"
            }
        ],
        "answer": [
            "A","B","C"
        ],
        "type": "multiple"
    },
    {
        "id": "9-25",
        "question": "請參閱附圖作答",
        "media": {
            "type": "table",
            "data" : [
                ["當資料表發生紊亂不正常的現象時，"],
                ["若要判斷是否為伺服器所造成，"],
                ["可觀察哪一個記錄檔中的 restarted mysqld 訊息，"],
                ["若發現有此訊息，"],
                ["代表伺服器曾經終止掉後又重開，"],
                ["此錯誤的發生可能為下列何項伺服器的錯誤所造成？"]
            ]
        },
        "options": [
            {"label": "error log", "value": "A"},
            {"label": "general query log", "value": "B"},
            {"label": "binary log", "value": "C"},
            {"label": "slow log", "value": "D"}
        ],
        "answer": ["A"],
        "type": "single"
    }
];

// 初始化變量
let quizQuestions = [];
let currentQuestionIndex = 0;
let userAnswers = [];
let timerInterval; // 用於儲存 setInterval 的 ID
let startTime;     // 儲存測驗開始時間
let totalSeconds;  // 改為只宣告，不初始化
let markedQuestions = new Set(); // 新增: 用 Set 儲存標記問題的索引 (0-based)

// DOM元素
const startBtn = document.getElementById('startBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const submitBtn = document.getElementById('submitBtn');
const welcomeScreen = document.getElementById('welcome-screen');
const quizContainer = document.getElementById('quiz-container');
const resultsContainer = document.getElementById('results-container');
const reviewContainer = document.getElementById('review-container');
const questionType = document.getElementById('question-type');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const questionNumber = document.getElementById('question-number');
const progressEl = document.getElementById('progress');
const timerEl = document.getElementById('timer');
const reviewBtn = document.getElementById('reviewBtn');
const restartBtn = document.getElementById('restartBtn');
const backToResultsBtn = document.getElementById('backToResultsBtn');
const reviewList = document.getElementById('review-list');
const scoreDisplay = document.getElementById('score-display');
const timeTaken = document.getElementById('time-taken');
const resultsSummary = document.getElementById('results-summary');
const mediaContainer = document.getElementById('media-container'); // Add a container for media
const historyBtn = document.getElementById('historyBtn'); 
const historyContainer = document.getElementById('history-container'); 
const closeHistoryBtn = document.createElement('button');  //關閉按鈕
const homeBtn = document.getElementById('homeBtn'); // "回到首頁" 按鈕的 DOM 元素
const homeBtnFromResults = document.getElementById('homeBtnFromResults'); // "回到首頁" 按鈕 (results 頁面)
const jumpToSelect = document.getElementById('jumpToSelect');
const jumpBtn = document.getElementById('jumpBtn');
const jumpControls = document.querySelector('.jump-controls');
const jumpToInput = document.getElementById('jumpToInput'); // 新增輸入框參照
const jumpErrorMsg = document.getElementById('jumpErrorMsg'); // 新增錯誤訊息參照
const markBtn = document.getElementById('markBtn'); // 新增: 標記按鈕
const markedQuestionsContainer = document.getElementById('marked-questions-container'); // 新增: 標記容器
const markedQuestionsList = document.getElementById('marked-questions-list'); // 新增: 標記列表
const jumpMarkControls = document.querySelector('.jump-mark-controls'); // 新增: 包裹跳題和標記的容器


// 事件回傳器
startBtn.addEventListener('click', startQuiz);
prevBtn.addEventListener('click', goToPreviousQuestion);
nextBtn.addEventListener('click', goToNextQuestion);
submitBtn.addEventListener('click', submitQuiz);
reviewBtn.addEventListener('click', showReview);
restartBtn.addEventListener('click', restartQuiz);
backToResultsBtn.addEventListener('click', backToResults);
closeHistoryBtn.textContent = '關閉';
closeHistoryBtn.id = 'closeHistoryBtn';  // 設定 ID，方便 CSS 設定樣式
closeHistoryBtn.addEventListener('click', closeHistory);
historyBtn.addEventListener('click', loadHistory); 
homeBtn.addEventListener('click', goHome); 
homeBtnFromResults.addEventListener('click', goHome); // 事件監聽器 (results 頁面)
markBtn.addEventListener('click', toggleMarkQuestion); // 新增: 標記按鈕的事件監聽

// 從題庫中隨機抽取50題，如果題目數量不足50，則返回所有題目
function getRandomQuestions(count) {
    // 合併之前定義的題目數據和新增的題目
    const allQuestions = [...questionDatabase, ...additionalQuestions];

    // 如果題目数量不足count，直接返回所有題目
    if (allQuestions.length <= count) {
        return [...allQuestions];
    }

    // 否則隨機抽取count個題目
    const shuffled = [...allQuestions].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

// 填充跳題下拉選單 (顯示數字 1-50)
function populateJumpDropdown() {
    if (!jumpToSelect) return; // 安全檢查
    jumpToSelect.innerHTML = ''; // 清空舊選項
    quizQuestions.forEach((_, index) => { // 只需索引
        const option = document.createElement('option');
        option.value = index; // 儲存 0-based 索引
        option.textContent = index + 1; // 顯示 1-based 題號
        jumpToSelect.appendChild(option);
    });
}

// 處理跳題邏輯 (輸入框優先，非阻塞錯誤)
function handleJump() {
    // 在開始處理前清除上一次的錯誤訊息
    if (jumpErrorMsg) {
        jumpErrorMsg.textContent = ''; // 清空文字
        jumpErrorMsg.style.display = 'none'; // 隱藏元素
    }

    let targetIndex = -1;

    // 1. 優先處理輸入框
    const inputValue = jumpToInput ? jumpToInput.value.trim() : '';
    if (inputValue !== '') {
        const inputNumber = parseInt(inputValue, 10);
        if (!isNaN(inputNumber) && inputNumber >= 1 && inputNumber <= quizQuestions.length) {
            targetIndex = inputNumber - 1;
        } else {
            // --- 使用頁面元素顯示錯誤 ---
            if (jumpErrorMsg) {
                jumpErrorMsg.textContent = `請輸入 1 到 ${quizQuestions.length} 之間的有效題號！`;
                jumpErrorMsg.style.display = 'inline'; // 或 'block'
            }
            // --- 結束錯誤顯示 ---
            if (jumpToInput) {
                jumpToInput.focus();
                jumpToInput.select();
            }
            return; // 停止後續處理
        }
    } else if (jumpToSelect) {
        // 2. 如果輸入框為空，則使用下拉選單的選擇
        const selectedDropdownIndex = parseInt(jumpToSelect.value, 10);
         if (!isNaN(selectedDropdownIndex) && selectedDropdownIndex >= 0 && selectedDropdownIndex < quizQuestions.length) {
             targetIndex = selectedDropdownIndex;
        }
    }

    // 如果找到了有效的目標索引
    if (targetIndex !== -1) {
        currentQuestionIndex = targetIndex;
        showQuestion(currentQuestionIndex);
        if (jumpToInput) jumpToInput.value = ''; // 成功跳轉後清空輸入框
         // 如果是透過下拉選單成功跳轉，也要清除可能存在的錯誤訊息
        if (jumpErrorMsg && inputValue === '') {
            jumpErrorMsg.textContent = '';
            jumpErrorMsg.style.display = 'none';
        }
    } else if (inputValue === '' && targetIndex === -1) {
        // 處理輸入框為空且下拉選單也無效的情況
        if (jumpErrorMsg) {
            jumpErrorMsg.textContent = "請選擇或輸入要跳轉的題號。";
            jumpErrorMsg.style.display = 'inline'; // 或 'block'
        }
    }
}

// 測驗開始
function startQuiz() {
    welcomeScreen.classList.add('hidden');
    quizContainer.classList.remove('hidden');
    resultsContainer.classList.add('hidden');
    reviewContainer.classList.add('hidden');
    historyContainer.classList.add('hidden'); // 隱藏歷史紀錄

    startBtn.classList.add('hidden');   // 隱藏「開始測驗」
    homeBtn.classList.remove('hidden'); // 顯示「回到首頁」
    // if (jumpControls) jumpControls.classList.remove('hidden'); // 改為控制父容器
    if (jumpMarkControls) jumpMarkControls.classList.remove('hidden'); // 顯示跳題和標記的父容器

    // 隨機抽取50題，或所有可用題目（如果少於50題）
    quizQuestions = getRandomQuestions(50);
    populateJumpDropdown(); // <-- 填充跳題下拉選單
    currentQuestionIndex = 0;
    userAnswers = Array(quizQuestions.length).fill(null);
    markedQuestions.clear(); // 新增: 清除上一輪的標記
    updateMarkedQuestionsDisplay(); // 新增: 初始化標記列表顯示 (應為隱藏)


    // 更新進度顯示
    progressEl.textContent = `0 / ${quizQuestions.length}`;

    // 開始計時(在問題顯示後才開始計時, 並設定初始值)
    startTime = new Date();
    totalSeconds = 60 * 60; // 設定為 60 分鐘
    startTimer();   // 確保在設定完 totalSeconds 後才呼叫 startTimer

    startBtn.innerHTML = "<b>重新測驗</b>"; //將 "測驗開始"按鈕文字改成 "重新測驗"
    timerEl.textContent = 'Time limit: 60:00'; // 重置顯示

    // 顯示第一題
    showQuestion(currentQuestionIndex);
    updateProgress();
}

// 遞迴函數來處理嵌套的 media.data
function renderMedia(container, data) {  
    const table = document.createElement('table');
    data.forEach(item => {
        if (Array.isArray(item)) {
            if (Array.isArray(item[0])) { // 檢查是否為嵌套陣列
                item.forEach(rowData => {
                    const row = document.createElement('tr');
                    rowData.forEach(cellData => {
                        const cell = document.createElement('td');
                        cell.innerHTML = cellData;  // 使用 innerHTML
                        row.appendChild(cell);
                    });
                    table.appendChild(row);
                });
            } else { // 處理非嵌套陣列 (例如: ["資料表emp如下:"])
              const row = document.createElement('tr');
              const cell = document.createElement('td');
              cell.innerHTML = item[0]; // 使用 innerHTML
              row.appendChild(cell);
              table.appendChild(row);
            }

        } else {
            const textDiv = document.createElement('div');
            textDiv.textContent = item;
            container.appendChild(textDiv);
        }
    });
    container.appendChild(table);
}

// 在 showQuestion 中
function showQuestion(index) {
    const question = quizQuestions[index];  // 取得當前題目
    questionNumber.textContent = `題目 ${index + 1} / ${quizQuestions.length}`;
    questionText.textContent = question.question;

    // 更新跳題下拉選單的當前選項
    if (jumpToSelect) {
        jumpToSelect.value = index; // 同步下拉選單的值
    }

    // 設置題目類型標籤
    if (question.type === 'single') {
        questionType.textContent = '單選題';
        questionType.className = 'question-tag single-choice';
    } else {
        questionType.textContent = '複選題';
        questionType.className = 'question-tag multiple-choice';
    }

     // Clear previous media content
    if (mediaContainer) {
      mediaContainer.innerHTML = '';
    }

    // Display media if present
    if (question.media && question.media.type === 'table') {
        renderMedia(mediaContainer, question.media.data); // 呼叫 renderMedia
    }
    
    // 清空選項內容
    optionsContainer.innerHTML = '';

    // 添加選項
    question.options.forEach((option, optIndex) => {
        const optionEl = document.createElement('div');
        optionEl.className = 'option';

        const inputType = question.type === 'single' ? 'radio' : 'checkbox';

        // 檢查使用者是否已選擇該選項
        const isSelected = userAnswers[index] && userAnswers[index].includes(option.value);
        if (isSelected) {
            optionEl.classList.add('selected');
        }

        optionEl.innerHTML = `
            <input type="${inputType}" name="question${index}" value="${option.value}" ${isSelected ? 'checked' : ''}>
            <span class="option-text">${option.value}. ${option.label}</span>
        `;

        // 添加點擊事件
        optionEl.addEventListener('click', function() {
            const input = this.querySelector('input');

            if (question.type === 'single') {
                // 對於單選題，取消所有其他選項的選中狀態
                document.querySelectorAll('.option').forEach(opt => {
                    opt.classList.remove('selected');
                });
                // 選中當前選項
                this.classList.add('selected');
                userAnswers[index] = [input.value];
                input.checked = true;
            } else {
                // 對於多選題，切換當前選項的選中狀態
                this.classList.toggle('selected');
                input.checked = !input.checked;

                // 更新使用者答案
                if (!userAnswers[index]) {
                    userAnswers[index] = [];
                }

                if (input.checked) {
                    userAnswers[index].push(input.value);
                } else {
                    userAnswers[index] = userAnswers[index].filter(val => val !== input.value);
                }
            }

            // 更新進度（可能有新回答的題目）
            updateProgress();
        });

        optionsContainer.appendChild(optionEl);
    });

    // 更新按鈕狀態
    prevBtn.disabled = index === 0;
    nextBtn.disabled = index === quizQuestions.length - 1; // <-- 在最後一題禁用下一題

    // 始終顯示 submitBtn
    submitBtn.classList.remove('hidden');
    // 新增: 更新標記按鈕狀態
    updateMarkButtonState();
    // 新增: 更新標記題目列表顯示
    updateMarkedQuestionsDisplay();

    console.log(currentQuestionIndex);  //偵錯訊息

    // 最後一題時，隱藏下一題按鈕，顯示提交按鈕
    /*
        if (index === quizQuestions.length - 1) {
            nextBtn.classList.add('hidden');
            submitBtn.classList.remove('hidden');
        } else {
            nextBtn.classList.remove('hidden');
            submitBtn.classList.add('hidden');
        }
    */
}

// 新增: 切換標記問題
function toggleMarkQuestion() {
    const index = currentQuestionIndex;
    if (markedQuestions.has(index)) {
        markedQuestions.delete(index);
    } else {
        markedQuestions.add(index);
    }
    updateMarkButtonState(); // 更新按鈕文字/樣式
    updateMarkedQuestionsDisplay(); // 更新列表顯示
}

// 新增: 更新標記按鈕的文字和樣式
function updateMarkButtonState() {
    if (markedQuestions.has(currentQuestionIndex)) {
        markBtn.innerHTML = '<b>取消標記</b>';
        markBtn.classList.add('marked'); // 添加樣式 class
    } else {
        markBtn.innerHTML = '<b>標記此題</b>';
        markBtn.classList.remove('marked'); // 移除樣式 class
    }
}

// 新增: 更新已標記題目的顯示列表
function updateMarkedQuestionsDisplay() {
    markedQuestionsList.innerHTML = ''; // 清空現有列表

    if (markedQuestions.size === 0) {
        markedQuestionsContainer.classList.add('hidden'); // 如果沒有標記，隱藏容器
        return;
    }

    markedQuestionsContainer.classList.remove('hidden'); // 如果有標記，顯示容器

    // 將 Set 轉換為陣列並排序，以便按順序顯示
    const sortedMarkedIndices = Array.from(markedQuestions).sort((a, b) => a - b);

    sortedMarkedIndices.forEach(index => {
        const button = document.createElement('button');
        button.textContent = index + 1; // 顯示 1-based 題號
        button.className = 'marked-question-button';
        button.dataset.index = index; // 儲存 0-based 索引

        button.addEventListener('click', function() {
            const targetIndex = parseInt(this.dataset.index, 10);
            if (!isNaN(targetIndex) && targetIndex >= 0 && targetIndex < quizQuestions.length) {
                currentQuestionIndex = targetIndex;
                showQuestion(currentQuestionIndex);
                 // 清除跳題輸入框和錯誤訊息 (如果有的話)
                 if (jumpToInput) jumpToInput.value = '';
                 if (jumpErrorMsg) {
                    jumpErrorMsg.textContent = '';
                    jumpErrorMsg.style.display = 'none';
                }
            }
        });

        markedQuestionsList.appendChild(button);
    });
}

// showReview
function showReview() {
    resultsContainer.classList.add('hidden');
    reviewContainer.classList.remove('hidden');

    // 清空原有内容
    reviewList.innerHTML = '';

    // 生成詳細答題情況
    quizQuestions.forEach((question, index) => {
        const userAnswer = userAnswers[index] || [];
        const correctAnswer = question.answer;

        // 檢查答案是否正解
        const isCorrect = userAnswer.length === correctAnswer.length &&
                         userAnswer.every(ans => correctAnswer.includes(ans));

        const reviewItem = document.createElement('div');
        reviewItem.className = `review-item ${isCorrect ? 'correct' : 'incorrect'}`;

        // 題目類型
        const typeText = question.type === 'single' ? '單選題' : '複選題';

        // 使用者選擇的答案
        const userAnswerText = userAnswer.length > 0
            ? userAnswer.join(', ')
            : '未作答';

        // 正解答案
        const correctAnswerText = correctAnswer.join(', ');

        // 建立選項的 HTML
        let optionsHTML = '<div class="review-options">';
        question.options.forEach(opt => {
            // 為每個選項創建一個容器 div，並添加 class 以便 CSS 定位
            optionsHTML += `<div class="review-option-item">`;

            // 根據題目類型決定 input type
            const inputType = question.type === 'single' ? 'radio' : 'checkbox';
            // 檢查這個選項是否是使用者選擇的答案之一
            const isUserAnswer = userAnswer.includes(opt.value);
            // 添加一個 disabled 的 input 元素來模擬方塊，並根據使用者答案設定 checked 狀態
            optionsHTML += `<input type="${inputType}" class="review-checkbox" disabled ${isUserAnswer ? 'checked' : ''}>`;

            // 1. 選項編號 (A., B., etc.)
            optionsHTML += `<span class="option-prefix">${opt.value}.</span>`;

            // 2. 選項內容 (包含文字和可能的圖片)
            optionsHTML += `<span class="option-label-content">`;
            //    使用正規表達式來分割標籤字串，並保留 <img> 標籤
            //    /(<img.*?>)/ 這個 regex 會尋找 <img> 標籤，並將其作為分割後陣列的一部分保留下來
            const labelParts = opt.label.split(/(<img.*?>)/);

            // 遍歷分割後的部分，重建內容
            labelParts.forEach(part => {
                if (part) { // 確保部分不是空的
                    if (part.startsWith('<img')) {
                        // 如果是圖片標籤，直接加入
                        optionsHTML += part;
                    } else {
                        // 如果是文字，可以選擇性地再包一層 span，或直接加入文字
                        // 直接加入文字通常足夠
                        optionsHTML += part;
                         // 或者，如果你想對文字部分單獨應用樣式：
                         // optionsHTML += `<span class="option-text-part">${part}</span>`;
                    }
                }
            });
            optionsHTML += `</div>`; // 關閉 review-option-item
        });
        optionsHTML += '</div>'; // 關閉 review-options

        // Media display (handle both table and text)
        let mediaContent = '';
        if (question.media && question.media.type === 'table') {
            mediaContent += '<table class="review-table">'; // 添加 class
            function reviewRenderMedia(data) { // 巢狀結構
                data.forEach(item => {
                    if (Array.isArray(item)) {
                        if (Array.isArray(item[0])) { // 2D array (table rows)
                            item.forEach(rowData => {
                                mediaContent += '<tr>';
                                rowData.forEach(cellData => {
                                    mediaContent += `<td>${cellData}</td>`;
                                });
                                mediaContent += '</tr>';
                            });
                        } else { // 1D array (table row)
                           mediaContent += '<tr>';
                            item.forEach(cellData => {
                                mediaContent += `<td>${cellData}</td>`;
                            });
                            mediaContent += "</tr>";
                        }
                    } else {
                        mediaContent += `<div>${item}</div>`; // Render as simple text
                    }
                });
            }

            reviewRenderMedia(question.media.data);
            mediaContent += '</table>';
        }

        // 組合 HTML
        reviewItem.innerHTML = `
            <div class="review-question">${index + 1}. [${typeText}] ${question.question}</div>
            ${mediaContent}
            <div class="review-answers">
                <div>選項：</div>
                ${optionsHTML}
                <div>你的答案：<span class="user-answer">${userAnswerText}</span></div>
                <div>正確答案：<span class="correct-answer">${correctAnswerText}</span></div>
            </div>
            <div>${isCorrect ? '✓ 正確' : '✗ 錯誤'}</div>
        `;

        reviewList.appendChild(reviewItem);
    });
}

// 更新進度顯示
function updateProgress() {
    const answeredCount = userAnswers.filter(answer => answer !== null && answer.length > 0).length;
    progressEl.textContent = `Questions: ${answeredCount}/${quizQuestions.length}`;
}

// 下一題
function goToNextQuestion() {
    if (currentQuestionIndex < quizQuestions.length - 1) {
        currentQuestionIndex++;
        showQuestion(currentQuestionIndex);
    }
}

// 上一題
function goToPreviousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion(currentQuestionIndex);
    }
}


// 計時器
function startTimer() {
    if (timerInterval) {  // 如果已經有計時器在運行，先清除它
        clearInterval(timerInterval);
    }
    let totalSeconds = 60 * 60; // 每次開始計時都重置為 60 分鐘
    timerInterval = setInterval(function() {
        totalSeconds--;  //每秒減1
        //計算 "分" 和 "秒"
        const minutes = Math.floor(totalSeconds / 60).toString().padStart(2, '0');
        const seconds = (totalSeconds % 60).toString().padStart(2, '0');
        timerEl.textContent = `Time limit: ${minutes}:${seconds}`;

        if (totalSeconds <= 0) {
            // 時間到，停止計時器並提交答案
            stopTimer();
            submitQuiz();
        }
    }, 1000);

    /*  
        timerInterval = setInterval(function() {
            totalSeconds++;
            const minutes = Math.floor(totalSeconds / 60).toString().padStart(2, '0');
            const seconds = (totalSeconds % 60).toString().padStart(2, '0');
            timerEl.textContent = `${minutes}:${seconds}`;
        }, 1000);
    */
}

// 停止計時器
function stopTimer() {
    clearInterval(timerInterval);
    timerInterval = null; // 清除 timerInterval，表示沒有計時器在運行
}

// 提交測試
function submitQuiz() {
    stopTimer();

    // 計算得分
    let correctCount = 0;
    quizQuestions.forEach((question, index) => {
        const userAnswer = userAnswers[index] || [];
        const correctAnswer = question.answer;
        if (userAnswer.length === correctAnswer.length && userAnswer.every(ans => correctAnswer.includes(ans))) {
            correctCount++;
        }
    });

    const score = Math.round((correctCount / quizQuestions.length) * 100);

    // 計算用時
    const endTime = new Date();
    const timeDiff = Math.floor((endTime - startTime) / 1000); // 秒
    const minutes = Math.floor(timeDiff / 60);
    const seconds = timeDiff % 60;

    // 顯示结果
    quizContainer.classList.add('hidden');
    resultsContainer.classList.remove('hidden');

    scoreDisplay.textContent = `得分: ${score}% (${correctCount}/${quizQuestions.length})`;
    timeTaken.textContent = `用時: ${minutes}分${seconds}秒`;

    // 生成總分訊息
    let summaryText = '';
    if (score >= 90) {
        summaryText = '這波簡直太神了啦！';
    } else if (score >= 70) {
        summaryText = '通過邊緣繼續保持！';
    } else if (score >= 60) {
        summaryText = '就差那麼一點點啊！';
    } else {
        summaryText = '你真他喵的爛透了!';
    }

    resultsSummary.textContent = summaryText;

    // 儲存測驗結果到 localStorage (保留自動刪除最舊紀錄的邏輯)
    const quizResult = {
        score: score,
        time: `${minutes}分${seconds}秒`,
        questions: quizQuestions,  // 儲存問題
        userAnswers: userAnswers, // 儲存使用者答案
        date: new Date().toLocaleString() // 儲存測驗日期和時間
    };

    let history = JSON.parse(localStorage.getItem('quizHistory_mysql') || '[]'); // 讀取歷史紀錄
    history.push(quizResult); // 加入新的結果

    // 限制歷史紀錄數量 (最多 20 筆)
    if (history.length > 20) {
        history.shift(); // 移除最舊的紀錄
    }

    localStorage.setItem('quizHistory_mysql', JSON.stringify(history)); // 儲存回 localStorage
}

// 返回结果頁面
function backToResults() {
    reviewContainer.classList.add('hidden');
    resultsContainer.classList.remove('hidden');
}

// 重新開始測試
function restartQuiz() {
    resultsContainer.classList.add('hidden');
    quizQuestions = [];
    currentQuestionIndex = 0;
    userAnswers = [];
    startQuiz();  // 重新開始測驗
}

// 載入並顯示歷史紀錄
function loadHistory() {
    welcomeScreen.classList.add('hidden');
    quizContainer.classList.add('hidden');
    resultsContainer.classList.add('hidden');
    reviewContainer.classList.add('hidden');
    historyContainer.classList.remove('hidden');    // 顯示歷史紀錄容器
    historyContainer.innerHTML = '<h2>歷史記錄</h2>';   // 清空並添加標題

    const history = JSON.parse(localStorage.getItem('quizHistory_mysql') || '[]');

    if (history.length === 0) {
        historyContainer.innerHTML += '<p>目前沒有任何記錄</p>';
        historyContainer.appendChild(closeHistoryBtn);  //加入關閉按鈕
        return;
    }
    //正序迴圈
    for (let i = 0; i < history.length; i++) { // 改為正序遍歷
        const result = history[i];
        const resultDiv = document.createElement('div');
        resultDiv.className = 'history-item';

        // 將原本的 innerHTML 放入一個新的 div 內，並給予 class name
        const innerContentDiv = document.createElement('div');
        resultDiv.className = 'history-item';
        resultDiv.innerHTML = `
            <p><strong>測驗時間：</strong>${result.date}</p>
            <p><strong>得分：</strong>${result.score}%</p>
            <p><strong>用時：</strong>${result.time}</p>
            <button class="review-history-btn" data-index="${i}">查看詳情</button>
            <button class="delete-history-btn" data-index="${i}">刪除</button> 
        `;
        // 將新的 div 插入到 resultDiv
        resultDiv.appendChild(innerContentDiv);
        historyContainer.appendChild(resultDiv);
    }
    //加入關閉按鈕.
    historyContainer.appendChild(closeHistoryBtn);

    // 添加事件監聽器到 "查看詳情" 按鈕
    document.querySelectorAll('.review-history-btn').forEach(button => {
        button.addEventListener('click', function() {
            const index = parseInt(this.dataset.index, 10);
            showReviewFromHistory(index);
        });
    });

    // 刪除按鈕的事件監聽器
    document.querySelectorAll('.delete-history-btn').forEach(button => {
        button.addEventListener('click', function() {
            const index = parseInt(this.dataset.index, 10); // 取得按鈕上的 data-index (正序)
            deleteHistoryItem(index); // 傳遞正序的 index
        });
    });
}

// 關閉歷史紀錄
function closeHistory() {
    historyContainer.classList.add('hidden');
    welcomeScreen.classList.remove('hidden'); // 回到歡迎畫面
    
    // 停止計時器並重置顯示
    stopTimer();    
    timerEl.textContent = 'Time limit: 60:00'; // 重置顯示

    // 檢查是否在測驗中
    if (quizContainer.classList.contains('hidden')) {
        // 不在測驗中，將按鈕文字設為 "測驗開始"
        startBtn.innerHTML = "<b>測驗開始</b>";
    }else{
        startBtn.innerHTML = "<b>重新測驗</b>";
    }
}

// 從歷史紀錄中顯示答題詳情
function showReviewFromHistory(historyIndex) {
    const history = JSON.parse(localStorage.getItem('quizHistory_mysql') || '[]');
    const result = history[historyIndex];

    // 將歷史資料設定到全域變數，讓 showReview 函數可以使用
    quizQuestions = result.questions;
    userAnswers = result.userAnswers;
    currentQuestionIndex = 0; // 重置題目索引

    // 切換到答題詳情頁面
    historyContainer.classList.add('hidden');
    reviewContainer.classList.remove('hidden');
    showReview(); // 呼叫原本的 showReview 函數
}

// 刪除歷史紀錄的函數
function deleteHistoryItem(index) {
    let history = JSON.parse(localStorage.getItem('quizHistory_mysql') || '[]');
    history.splice(index, 1); // 直接使用 splice 刪除指定索引的元素 (正序索引)
    // history.splice(history.length - 1 - index, 1); // 從陣列中移除指定索引的元素 (倒序索引要轉成正序)
    localStorage.setItem('quizHistory_mysql', JSON.stringify(history));
    loadHistory(); // 重新載入歷史紀錄
}

// 回到首頁
function goHome() {
    // 隱藏所有非首頁的區塊
    quizContainer.classList.add('hidden');
    resultsContainer.classList.add('hidden');
    reviewContainer.classList.add('hidden');
    historyContainer.classList.add('hidden');
    // 顯示首頁
    welcomeScreen.classList.remove('hidden');
    // 顯示開始按鈕, 隱藏回首頁按鈕
    startBtn.classList.remove('hidden');
    homeBtn.classList.add('hidden');
    // if (jumpControls) jumpControls.classList.add('hidden'); // 改為控制父容器
    if (jumpMarkControls) jumpMarkControls.classList.add('hidden'); // 隱藏跳題和標記的父容器


    // 重置計時器和相關變數
    stopTimer(); // 停止計時器
    //totalSeconds = 0;  不需要設定為0 
    timerEl.textContent = 'Time limit: 60:00'; // 重置顯示
    currentQuestionIndex = 0;
    userAnswers = [];
    markedQuestions.clear(); // 新增: 清除標記
    updateMarkedQuestionsDisplay(); // 新增: 更新標記列表顯示 (應為隱藏)
    //quizQuestions = [];  //不需要了，因為每次都會重新開始
    updateProgress(); //更新進度
    startBtn.innerHTML = "<b>測驗開始</b>"; // 回到首頁後，將 "重新測驗"按鈕文字改回 "測驗開始"
    // 新增: 重置標記按鈕狀態
    markBtn.innerHTML = '<b>標記此題</b>';
    markBtn.classList.remove('marked');
}

// ===== 新增跳轉按鈕事件 =====
if (jumpBtn) { // 檢查按鈕是否存在
    jumpBtn.addEventListener('click', handleJump);
}
// ============================

// ===== 新增輸入框 Enter 和 input 事件 =====
if (jumpToInput) { // 檢查輸入框是否存在
    jumpToInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            handleJump();
        }
    });
    // 當使用者在輸入框輸入時清除錯誤訊息 (可選)
    jumpToInput.addEventListener('input', () => {
        if (jumpErrorMsg && jumpErrorMsg.textContent !== '') {
            jumpErrorMsg.textContent = '';
            jumpErrorMsg.style.display = 'none';
        }
    });
}
// ============================

//綁定歷史紀錄
historyBtn.addEventListener('click', loadHistory);