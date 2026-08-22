# Ahmed Dalwan — Backend Developer Portfolio

موقع شخصي ثنائي اللغة (عربي/إنجليزي) لـ Ahmed Dalwan، **مطور Backend** متخصص بـ .NET.

## ✨ المميزات

- 🎯 تركيز كامل على تخصص **Backend Development**
- 🎨 تصميم Dark Mode عصري بألوان teal/cyan
- 🌐 ثنائي اللغة مع كشف لغة المتصفح تلقائياً
- 📱 متجاوب بالكامل (Responsive)
- ⭐ شريط تقييمات متحرك (Marquee) بتصميم شعارات مستقل وخمسات
- 🎬 رسوم متحركة سلسة

## 📂 هيكل الملفات

```
website/
├── index.html      # الصفحة الرئيسية (صفحة واحدة فقط الآن)
├── styles.css      # كل التنسيقات
├── script.js       # JavaScript
├── assets/
│   ├── profile.jpg
│   └── logo.jpg
└── README.md
```

> ملاحظة: تمّت إزالة قسم/صفحات المدونة بالكامل بناءً على طلبك، لأن الموقع أصبح مخصصاً للسيرة الذاتية فقط. يمكن إضافتها مستقبلاً عند تطوير الموقع ليشمل مقالات ودورات.

## 🗂️ أقسام الصفحة

1. **Hero** — ترحيب + تخصص واحد واضح: **Backend Developer**
2. **About (01)** — نبذة + قائمة نقاط سريعة القراءة + كود C# (بدون IsAvailable)
3. **Skills (02)** — تقنيات Backend (مع Clean Code, Clean Architecture, Problem Solving كاختصاص) + Frontend + Database + Desktop/Mobile + Cloud
4. **Services (03)** — بدل "Projects"، الآن عرض خدمات:
   - ⭐ **بناء APIs قوية وسريعة** (الأولوية — الاختصاص الأساسي)
   - لوحة تحكم متكاملة
   - تطبيق موبايل متكامل
   - دراسة وإعادة تصميم قاعدة بيانات
   - برامج سطح مكتب متكاملة (أونلاين/أوفلاين)
5. **Education (04)** — تعليم رسمي (بعنوان "التعليم الحالي" للجامعة) + قائمة 5 دورات أونلاين بروابط يوتيوب
6. **Reviews (05)** — شريط متحرك (Marquee) لا نهائي لـ 10 تقييمات، مع شعارات ملونة لمستقل (أزرق فاتح) وخمسات (خلفية داكنة/أصفر)
7. **Contact (06)** — بدون نموذج، فقط معلومات تواصل (بريد، هاتف، واتساب، موقع) + روابط سوشيال + زر بريد مباشر

## ✏️ التخصيصات المطلوبة منك

### 1. روابط السوشيال ميديا
ابحث عن `href="#"` مع `aria-label` (Facebook, Instagram, Threads, GitHub, LinkedIn, YouTube) في Hero وContact.

### 2. روابط دورات اليوتيوب (قسم Education)
كل عنصر `.course-item` له `href="#"` — استبدلها برابط الفيديو/الدورة الفعلي على يوتيوب:
```html
<a href="#" class="course-item">  <!-- ضع رابط اليوتيوب هنا -->
```
الدورات الخمس بالترتيب:
1. C# Fundamentals
2. ASP.NET MVC with SQL Server
3. Angular with ASP.NET Web API & SQL Server
4. Oracle Database — SQL Statements Basics
5. Oracle Database Programming — PL/SQL

### 3. روابط Hire (مستقل وخمسات)
```html
<a href="#" class="hire-btn hire-mostaql">  <!-- رابط ملفك على مستقل -->
<a href="#" class="hire-btn hire-khamsat">  <!-- رابط ملفك على خمسات -->
```

### 4. شعارات مستقل وخمسات الحقيقية
حالياً تظهر مربعات ملونة كبديل مؤقت للشعار:
- **مستقل**: خلفية بيضاء، لون أزرق `#2386c8`
- **خمسات**: خلفية داكنة `#323232`، لون أصفر/برتقالي

لاستبدالها بالشعار الحقيقي، ضع صورة الشعار داخل `.platform-logo-box` أو `.hire-logo-box` في `index.html` بدلاً من الحرف/الأيقونة:
```html
<div class="platform-logo-box khamsat-box">
    <img src="assets/khamsat-logo.png" alt="خمسات">
</div>
```

### 5. زر تحميل CV
استبدل `href="#"` في زر "Download CV" برابط ملف PDF.

## 🎨 الألوان الأساسية

```css
--bg-primary: #0a0e1a;
--accent-primary: #14b8a6;
--text-primary: #f1f5f9;
```

شعارات المنصات:
```css
Mostaql:  #2386c8 على خلفية بيضاء
Khamsat:  أصفر/برتقالي على خلفية #323232
```

## 🚀 طريقة التشغيل

```bash
python -m http.server 8000
```
ثم افتح: `http://localhost:8000`

---

**Built with ❤️ by Ahmed DN | © 2026**
