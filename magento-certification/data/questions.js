import { escapeHTML } from "../js/util.js";

function highlightText(text, type, inline = false) {
    typesCode.add(type);
    return `${inline === false ? "<pre>" : ""}<code class="js-highligh ${type}${
        inline === true ? " is-inline" : ""
    }">${escapeHTML(text)}</code>${inline === false ? "</pre>" : ""}`;
}

function colorPreview(c) {
    return `<span class='c-color-preview' style="color:${c};"></span>`;
}

const base = 107;
export const typesCode = new Set();
export const qestions = new Map([
 [
     1,
     {
         question: `In layout XML, which of the following action methods would you use to define the block identifier on a block of type <code>cms/block</code>?`,
         answers: new Map([
             ["A", highlightText(`<action method="addBlockId">`, "xml")],
             ["B", highlightText(`<action method="setStaticBlock">`, "xml")],
             ["C", highlightText(`<action method="setBlockName">`, "xml")],
             ["D", highlightText(`<action method="setBlockId">`, "xml")]
         ]),
         rightAnswers: "D"
     }
 ],
 [
     2,
     {
         question: `You want to figure out which phtml-files are rendering in the front end. Which developer tool helps you do that?`,
         answers: new Map([
             ["A", "Profiler"],
             ["B", "Exception.log"],
             ["C", "Block Class Names"],
             ["D", "Template Path Hints"],
             ["E", "System.log"]
         ]),
         rightAnswers: "D"
     }
 ],
 [
     3,
     {
         question: `You want to add a block to the content of the product detail page, without having to modify a template.<br>Which three container blocks are rendered regardless of product type and configuration?`,
         answers: new Map([
             ["A", "alert.urls"],
             ["B", "product.info.extrahint"],
             ["C", "product.info.options.wrapper"],
             ["D", "product.info.options .wrapper.bottom"],
             ["E", "product.info.additional"],
             ["F", "product.info.container1"],
             ["G", "product.info.container2"],
             ["H", "product.info.attributes"]
         ]),
         rightAnswers: "A,B,E"
     }
 ],
 [
     4,
     {
         question: `In layout XML, which tag attributes are always used when configuring a template block?`,
         answers: new Map([
             ["A", "as"],
             ["B", "name"],
             ["C", "type"],
             ["D", "value"],
             ["E", "before"],
             ["F", "module"],
             ["G", "template"]
         ]),
         rightAnswers: "B,C,G"
     }
 ],
 [
     5,
     {
         question: `You have added some HTML to a custom template located at <code>template/mytemplates/custom.phtml</code>,<br>Which code snippet is the correct way to create a block for <code>custom.phtml</code> in the layout XML?,`,
         answers: new Map([
             [
                 "A",
                 highlightText(
                     '<block type="core/template" name="custom" template="mytemplates/custom.phtml"/>',
                     "xml"
                 )
             ],
             [
                 "B",
                 highlightText(
                     '<block type="core/template" name="custom" template="template/mytemplates/custom.phtml"/>',
                     "xml"
                 )
             ],
             [
                 "C",
                 highlightText(
                     '<block type="custom1"       name="custom" template="template/mytemplates/custom.phtml"/>',
                     "xml"
                 )
             ],
             [
                 "D",
                 highlightText(
                     '<block type="custom"        name="custom" template="mytemplates/custom.phtml"/>',
                     "xml"
                 )
             ]
         ]),
         rightAnswers: "A"
     }
 ],
 [
     6,
     {
         question: `Given the HTML and CSS shown below, which attribute would clear the floated columns if applied to the grid element?<br><b>HTML:</b>${highlightText(
             `<div class="grid">
    <div class="col">Column 1</div>
    <div class="col">Column 2</div>
</div>`,
             "xml"
         )}<b>CSS:</b>${highlightText(
             ".col { float: left; width: 50%; }",
             "css"
         )}`,
         answers: new Map([
             ["A", highlightText("clear:both", "css")],
             ["B", highlightText("clear:left", "css")],
             ["C", highlightText("display:block", "css")],
             ["D", highlightText("display:inline", "css")],
             ["E", highlightText("overflow:auto", "css")],
             ["F", highlightText("overflow:hidden", "css")]
         ]),
         rightAnswers: "F"
     }
 ],
 [
     7,
     {
         question: `Which three types of file are contained in the folder <code>"skin/"</code> in Magento?`,
         answers: new Map([
             ["A", "CSS"],
             ["B", "Image"],
             ["C", "JavaScript"],
             ["D", "Layout"],
             ["E", "Template"],
             ["F", "Translate"]
         ]),
         rightAnswers: "A,B,C"
     }
 ],
 [
     8,
     {
         question: `What is the proper layout update handle for adding a CSS file to the product page?`,
         answers: new Map([
             ["A", highlightText("<product>", "xml")],
             ["B", highlightText("<catalog_product>", "xml")],
             ["C", highlightText("<catalog_product_view>", "xml")],
             ["D", highlightText("<default>", "xml")]
         ]),
         rightAnswers: "C"
     }
 ],
 [
     9,
     {
         question: `Which XML layout handle is used to assign layout configurations to all pages of a store?`,
         answers: new Map([
             ["A", "All"],
             ["B", "Base"],
             ["C", "Root"],
             ["D", "Every"],
             ["E", "Default"]
         ]),
         rightAnswers: "E"
     }
 ],
 [
     10,
     {
         question: `Which three of the following action method(s) are valid ways to add custom JavaScript files?`,
         answers: new Map([
             [
                 "A",
                 highlightText(
                     '<action method="addJs"><script>example.js</script></action>',
                     "xml"
                 )
             ],
             [
                 "B",
                 highlightText(
                     '<action method="addScript"><type>js</type><src>example.js</src></action>',
                     "xml"
                 )
             ],
             [
                 "C",
                 highlightText(
                     '<action method="addJs"><type>skin_js</type><name>example.is</name></action>',
                     "xml"
                 )
             ],
             [
                 "D",
                 highlightText(
                     '<action method="addltem"><type>skin_js</type><name>example-js</name></action>',
                     "xml"
                 )
             ],
             [
                 "E",
                 highlightText(
                     '<action method="newItem"><type>js</type><script>example.js</script></action>',
                     "xml"
                 )
             ],
             [
                 "F",
                 highlightText(
                     '<action method="addScript"><script>example.js</script></action>',
                     "xml"
                 )
             ],
             [
                 "G",
                 highlightText(
                     '<action method="addItem"><type>js</type><name>example.js</name></action>',
                     "xml"
                 )
             ]
         ]),
         rightAnswers: "A,D,G"
     }
 ],
 [
     11,
     {
         question: `You want to add the file <code>"somescript.js"</code> in a template<br>The JS-file is in the folder <code>"root: js/lib"</code>. Which piece of code should you use?`,
         answers: new Map([
             [
                 "A",
                 highlightText(
                     "$this->getItemurl('lib/somescript.js')",
                     "php"
                 )
             ],
             [
                 "B",
                 highlightText(
                     "$this->getskinurl('lib/somescript.js')",
                     "php"
                 )
             ],
             [
                 "C",
                 highlightText("$this->getJsUrl('lib/somescript.js')", "php")
             ],
             [
                 "D",
                 highlightText(
                     "$this->getFileurl('lib/somescript.js')",
                     "php"
                 )
             ],
             [
                 "E",
                 highlightText(
                     "$this->getLibUrl('lib/somescript.js')",
                     "php"
                 )
             ]
         ]),
         rightAnswers: "C"
     }
 ],
 [
     12,
     {
         question: `You want to use layout XML to specify the order of child blocks in a structural block<br>Which two of the following tag attributes would you use?`,
         answers: new Map([
             ["A", "behind"],
             ["B", "after"],
             ["C", "previous"],
             ["D", "next"],
             ["E", "before"],
             ["F", "below"]
         ]),
         rightAnswers: "B,E"
     }
 ],
 [
     13,
     {
         question: `You want to load <code>my-file.js</code> only on the <code>exam</code> CMS page<br>In native Magento, which two of the following statements are true?`,
         answers: new Map([
             [
                 "A",
                 `You must create exam.xml and put the appropriate XML inside the ${highlightText(
                     "<cms_page_exam>",
                     "xml",
                     true
                 )} layout handle`
             ],
             [
                 "B",
                 "You must make sure that <code>my-file.js</code> is present in <code>app/design/base/default/cms/exam/</code>"
             ],
             [
                 "C",
                 "You must add appropriate XML to the CMS Layout-Update-XML textarea of the exam CMS page"
             ],
             [
                 "D",
                 `You must add ${highlightText(
                     "<?php echo $this->getChildJs('js/my-file.js'); ?>",
                     "php",
                     true
                 )} to <code>head.phtml</code>`
             ],
             [
                 "E",
                 'You must make sure you are not using a layout handle in the Layout-Update-XML textarea of the "exam" CMS page'
             ]
         ]),
         rightAnswers: "C,E"
     }
 ],
 [
     14,
     {
         question: `Which of the following is a native frontend layout handle in Magento?`,
         answers: new Map([
             ["A", "catalog_product_details"],
             ["B", "catalog_category_list"],
             ["C", "checkout_onepage_shippingmethod"],
             ["D", "customer_account_default"],
             ["E", "multiple_addresses_progress"]
         ]),
         rightAnswers: "C"
     }
 ],
 [
     15,
     {
         question: `You want to add additional XML (Additional XML Declaration) to an existing layout block<br>Which is the proper tag for adding it?`,
         answers: new Map([
             [
                 "A",
                 highlightText(
                     '<reference type="block">Additional XML Declaration</reference>',
                     "xml"
                 )
             ],
             [
                 "B",
                 highlightText(
                     '<action method="addNewBlock"><block name>Additional XML Declaration </block name></action>',
                     "xml"
                 )
             ],
             [
                 "C",
                 highlightText(
                     '<reference name="block.name">Additional XML Declaration</reference>',
                     "xml"
                 )
             ],
             [
                 "D",
                 highlightText(
                     '<method action="setBlockContent"><xml>Additional XML Declaration</xml></method>',
                     "xml"
                 )
             ]
         ]),
         rightAnswers: "C"
     }
 ],
 [
     16,
     {
         question: `In order to display a custom design on a category landing page for a set number of days, you need to make a change to the _____ area of Magento`,
         answers: new Map([
             ["A", "XML"],
             ["B", "Admin Panel"],
             ["C", "CSS"],
             ["D", "Block"]
         ]),
         rightAnswers: "B"
     }
 ],
 [
     17,
     {
         question: `Given the following XML, which statement is true?${highlightText(
             `<default>
    <reference name="left">
        <block type="core/template" name="my.block"
               template="my-files/my-block.phtml" />
    </reference>
</default>`,
             "xml"
         )}`,
         answers: new Map([
             [
                 "A",
                 "You have to modify page/html/left.phtml to display the block"
             ],
             [
                 "B",
                 `You have to add ${highlightText(
                     '<action method="setTemplate"><file>my-files/my-block.phtml</file></action>',
                     "xml",
                     true
                 )} to display the block`
             ],
             ["C", "The block renders in the left structural block"],
             [
                 "D",
                 `The block won't be shown until you put ${highlightText(
                     "<?php echo $this->getChildHtml('left') ?>",
                     "php",
                     true
                 )} into my-block.phtml`
             ]
         ]),
         rightAnswers: "C"
     }
 ],
 [
     18,
     {
         question: `Which ONE of the following adds links to the top links navigation?`,
         answers: new Map([
             [
                 "A",
                 highlightText(
                     `<block name="top.links" type="page/template_links">
    <mylink>
        <label>I HAS A SHOP</label>
        <url>http://magento.com</url>
        <title>ITZ A MAGENTO</title>
    </mylink>
</block>`,
                     "xml"
                 )
             ],
             [
                 "B",
                 highlightText(
                     `<action method="addLink" block="top.links">
    <label>I HAS A SHOP</label>
    <url>http://magento.com</url>
    <title>ITZ A MAGENTO</title>
</action>`,
                     "xml"
                 )
             ],
             [
                 "C",
                 highlightText(
                     `<reference name="top.links">
    <link>
        <label>I HAS A SHOP</label>
        <url>http://magento.com</url>
        <title>ITZ A MAGENTO</title>
    </link>
</reference>`,
                     "xml"
                 )
             ],
             [
                 "D",
                 highlightText(
                     `<update handle="top.links" method="addLink">
    <label>I HAS A SHOP</label>
    <url>http://magento.com</url>
    <title>ITZ A MAGENTO</title>
</update>`,
                     "xml"
                 )
             ]
         ]),
         rightAnswers: "B"
     }
 ],
 [
     19,
     {
         question: `Which of the following is the correct code for assigning a custom template file using layout XML?`,
         answers: new Map([
             [
                 "A",
                 highlightText(
                     '<block type="core/text_list" name="custom.template" template="folder/custom_template.phtml"/>',
                     "xml"
                 )
             ],
             [
                 "B",
                 highlightText(
                     '<block type="core/template"  name="custom template" template="folder/custom_template.phtml"/>',
                     "xml"
                 )
             ],
             [
                 "C",
                 highlightText(
                     '<block type="block/template" name="custom template" template="folder/custom_template.phtml"/>',
                     "xml"
                 )
             ],
             [
                 "D",
                 highlightText(
                     '<block type="cms/block"      name="custom.template" template="folder/custom_template.phtml"/>',
                     "xml"
                 )
             ],
             [
                 "E",
                 highlightText(
                     '<block type="block/html"     name="custom template" template="folder/custom_template.phtml"/>',
                     "xml"
                 )
             ]
         ]),
         rightAnswers: "B"
     }
 ],
 [
     20,
     {
         question: `You have created a custom theme called <code>my_theme</code> within the default package and want to override the native template file <code>page/1column.phtml</code><br>You will need to place the file in the following structure:`,
         answers: new Map([
             [
                 "A",
                 "app/design/frontend/base/my_theme/template/page/1column.phtml"
             ],
             [
                 "B",
                 "app/design/frontend/my_theme/default/template/page/1column.phtml"
             ],
             [
                 "C",
                 "app/design/frontend/default/my_theme/template/page/1column.phtml"
             ],
             [
                 "D",
                 "skin/design/frontend/my_theme/template/page/1column.phtml"
             ],
             [
                 "E",
                 "skin/design/frontend/base/my_theme/template/page/1column.phtml"
             ]
         ]),
         rightAnswers: "C"
     }
 ],
 [
     21,
     {
         question: `You created a <b>header-new.phtml</b> from the original <b>header.phtml</b>. How can you force Magento to use that new file in place of the native header block template?`,
         rightAnswers: "C",
         answers: new Map([
             [
                 "A",
                 highlightText(`<reference block="header">
    <action method="setTemplate">
        <file>path/to/header-new.phtml</file>
    </action>
</reference>`,"xml")
             ],
             [
                 "B",
                 highlightText(`<parent name="header">
    <action method="setTemplate">
        <file>path/to/header-new.phtml</file>
    </action>
</parent>`,"xml")
             ],
             [
                 "C",
                 highlightText(`<reference block="header">
    <action method="setTemplate">
        <file>path/to/header-new.phtml</file>
    </action>
</reference>`,"xml")
             ],
             [
                 "D",
                 highlightText(`<action method="setTemplate" parent="header">
    <file>path/to/header-new.phtml</file>
</action>`,"xml")
             ],
             [
                 "E",
                 highlightText(`<reference name="header">
    <action method="setTemplate">path/to/header-new.phtml</action>
</reference>`,"xml")
             ]
         ])
     }
 ],
 [
     22,
     {
         question: `You want to stop all events on someElement. Which two methods from <b>prototype.js</b> will do this?`,
         rightAnswers: "B,F",
         answers: new Map([
             [
                 "A",
                 highlightText(`$("someElement").stopEvent()`, "javascript")
             ],
             [
                 "B",
                 highlightText(
                     `$("someElement").stopObserving()`,
                     "javascript"
                 )
             ],
             ["C", highlightText(`Event.stop("someElement")`, "javascript")],
             ["D", highlightText(`$("someElement").stop()`, "javascript")],
             [
                 "E",
                 highlightText(
                     `Event.stopEvent("someElement")`,
                     "javascript"
                 )
             ],
             [
                 "F",
                 highlightText(
                     `Event.stopObserving("someElement")`,
                     "javascript"
                 )
             ]
         ])
     }
 ],
 [
     23,
     {
         question: `If your custom frontend theme is missing an expected template file, the last place.<br>Magento will look is this directory:`,
         rightAnswers: "A",
         answers: new Map([
             ["A", "<code>app/design/frontend/base/default</code>"],
             ["B", "<code>skin/design/frontend/base/default</code>"],
             ["C", "<code>skin/frontend/base/default</code>"],
             ["D", "<code>app/frontend/default/default</code>"],
             ["E", "<code>skin/frontend/default/default</code>"],
             ["F", "<code>app/frontend/design/default/default</code>"]
         ])
     }
 ],
 [
     24,
     {
         question: `To configure a category to display a set of Shop By filters, what is the correct option to set in the Magento admin?`,
         rightAnswers: "A",
         answers: new Map([
             ["A", '"Is Anchor" set to "Yes"'],
             ["B", '"Show Filters" set to "Yes"'],
             ["C", '"Category Links" set to "No"'],
             ["D", '"Is Active" set to "No"']
         ])
     }
 ],
 // [
 //  25,
 //  {
 //      question: `You have a <code>custom/default</code> design package. You need to edit this file: <code>/app/design/frontend/base/defauIt/template/page/html/header.phtml</code> Which method is a bad practice because the file will be overwritten during Magento upgrades?`,
 //      rightAnswers: "A",
 //      answers: new Map([
 //          ["A", "Edit the <code>base/default</code> file directly."],
 //          [
 //              "B",
 //              "Create a new module in <code>base/default</code> called <code>custom</code> and copy the file there for editing."
 //          ],
 //          [
 //              "C",
 //              "Create a new package called <code>custom/custom</code> and copy the file there for editing."
 //          ],
 //          [
 //              "D",
 //              "Copy the file to <code>custom/default</code> for editing."
 //          ]
 //      ])
 //  }
 // ],
 [
     26,
     {
         question: `Which two of the following statements are true regarding Magento configuration scopes?`,
         rightAnswers: "A,D",
         answers: new Map([
             ["A", '"Websites" contain "Stores".'],
             ["B", 'A "Store" can be associated with multiple "Websites".'],
             [
                 "C",
                 'A "Store View" can be associated with multiple "Stores".'
             ],
             [
                 "D",
                 'A "Store" can be associated with multiple "Store Views".'
             ],
             ["E", 'Multiple "Websites" can share a "Store View".']
         ])
     }
 ],
 [
     27,
     {
         question: `You want to set up different languages in a Magento installation with multiple stores.<br>Which configuration scope should you use?`,
         answers: new Map([
             ["A", `Global`],
             ["B", `Website`],
             ["C", `Store`],
             ["D", `Store View`]
         ]),
         rightAnswers: "D"
     }
 ],
 [
     28,
     {
         question: `Which two of the following code samples contain correct XML code for adding <code>style.css</code> to a page?`,
         answers: new Map([
             [
                 "A",
                 highlightText(
                     `<action method="add"><stylesheet>css/styles.css</stylesheet></action>`,
                     "xml"
                 )
             ],
             [
                 "B",
                 highlightText(
                     `<action method="addCss"><stylesheet>css/styles.css</stylesheet></action>`,
                     "xml"
                 )
             ],
             [
                 "C",
                 highlightText(
                     `<action method="addltem"><name>css/styles.css</name></action>`,
                     "xml"
                 )
             ],
             [
                 "D",
                 highlightText(
                     `<action method="addltem"><type>css</type><name>css/styles.css</name></action>`,
                     "xml"
                 )
             ],
             [
                 "E",
                 highlightText(
                     `<action method= addltem ><type>skin_css</type><name>css/styles.css</name></action>`,
                     "xml"
                 )
             ]
         ]),
         rightAnswers: "B,E"
     }
 ],

 [
     29,
     {
         question: `Which is the correct type attribute for a structural block?`,
         answers: new Map([
             ["A", `core/block`],
             ["B", `core/html_wrapper`],
             ["C", `core/text`],
             ["D", `core/text_list`]
         ]),
         rightAnswers: "D"
     }
 ],

 [
     30,
     {
         question: `Which of these block types can be used to define "breadcrumbs" on a page?`,
         answers: new Map([
             ["A", `page/breadcrumbs`],
             ["B", `page/html_breadcrumbs`],
             ["C", `core/htmlbreadcrumbs`],
             ["D", `core/template`]
         ]),
         rightAnswers: "B"
     }
 ],
 [
     31,
     {
         question: `Which of the following will render the custom content block custom, name to a page based on the native <code>3columns.phtml</code> template?`,
         rightAnswers: "A",
         answers: new Map([
             [
                 "A",
                 highlightText(`<reference name="root">
                     <block type="core/text_list" name="left" as="left" translate="label">
                         <block type="core/template" name="custom.name" template="page/html/custom.phtml" />
                     </block>
                 </reference>`,"xml")
             ],
             [
                 "B",
                 highlightText(`<reference name="root">
                     <block type="checkout/onepage" name="checkout.opepage" template="checkout/onepage.phtml">
                         <block type="core/template" name="custom.name" template="page/html/custom.phtml" />
                     </block>
                 </reference>`,"xml")
             ],
             [
                 "C",
                 highlightText(`<reference name="catalog.topnav">
                     <block type="core/template" name="custom.name" template="page/html/custom.phtml" />
                 </reference>`,"xml")
             ],
             [
                 "D",
                 highlightText(`<reference name="checkout.cart">
                     <block type="core/template" name="custom.name" template="page/html/custom.phtml" />
                 </reference>`,"xml")
             ]
         ])
     }
 ],
 [
     32,
     {
         question: `A parent HTML element has the style ${highlightText(
             `position: relative;`,
             "css",
             true
         )}.<br>You need to position a child element within the parent so that the child's position originates from the parent element's box.<br>Which style on the child will accomplish that?`,
         answers: new Map([
             ["A", highlightText(`position: absolute;`, "css")],
             ["B", highlightText(`position: fixed;`, "css")],
             ["C", highlightText(`position: relative;`, "css")],
             ["D", highlightText(`position: static;`, "css")]
         ]),
         rightAnswers: "A"
     }
 ],
 [
     33,
     {
         question: `<img src="img/33.png" alt=""><br><br>Magento is searching in the fallback system for a <code>my-template.phtml</code> file. As shown in the graphic above, you have configured Magento to the following:<br><br><b>Package: my_pkg<br>Themes<br>— Translations: my_theme<br>— Layout: [empty]<br>— Skin: my_theme<br>— Template: christmas<br>— Default: common</b><br><br>In which four places might Magento find that file, assuming it has been placed there?`,
         rightAnswers: "D,E,H,I",
         answers: new Map([
             ["A", "app/design/frontend/my_pkg/my_theme/template/"],
             ["B", "app/design/frontend/default/default/"],
             ["C", "app/design/frontend/base/default/layout/"],
             ["D", "app/design/frontend/my_pkg/common/template"],
             ["E", "app/design/frontend/my_pkg/christmas/template"],
             ["F", "skin/frontend/my_pkg/christmas/template"],
             ["G", "skin/frontend/my_pkg/common/"],
             ["H", "app/design/frontend/my_pkg/default/template"],
             ["I", "app/design/frontend/base/default/template"]
         ])
     }
 ],
 [
     34,
     {
         question: `Which three types of files are contained in the folder <code>app/design</code>?`,
         answers: new Map([
             ["A", `CSS`],
             ["B", `Image`],
             ["C", `JavaScript`],
             ["D", `Layout`],
             ["E", `Template`],
             ["F", `Translate`]
         ]),
         rightAnswers: "D,E,F"
     }
 ],

 [
     35,
     {
         question: `What is <code>System->Design</code> used for?`,
         answers: new Map([
             ["A", `Configuring the fallback system of a store view`],
             [
                 "B",
                 `Overriding the fallback system of a store view for a limited period of time`
             ],
             ["C", `Activating the fallback system of a store view`],
             [
                 "D",
                 `Overriding the fallback system of a subpart (Layout, Templates, ...) of a store view`
             ],
             [
                 "E",
                 `Configuring basic Package and Theme settings of your Magento instance`
             ]
         ]),
         rightAnswers: "B"
     }
 ],

 [
     36,
     {
         question: `What is the difference between ${highlightText(
             `display: none`,
             "css",
             true
         )} and ${highlightText(`visibility: hidden`, "css", true)}?`,
         answers: new Map([
             [
                 "A",
                 `The ${highlightText(
                     `display: none`,
                     "css",
                     true
                 )} rule removes the element from the DOM.<br>The ${highlightText(
                     `visibility: hidden`,
                     "css",
                     true
                 )} rule leaves the element in the DOM.`
             ],
             [
                 "B",
                 `The ${highlightText(
                     `display: none`,
                     "css",
                     true
                 )} rule leaves the element in the DOM.<br>The ${highlightText(
                     `visibility: hidden`,
                     "css",
                     true
                 )} rule removes the element from the DOM.`
             ],
             [
                 "C",
                 `The “${highlightText(
                     `display: none`,
                     "css",
                     true
                 )}” rule removes the space used by the element from the page.<br>The “${highlightText(
                     `visibility: hidden`,
                     "css",
                     true
                 )}” rule reserves space on the page for the element.`
             ],
             [
                 "D",
                 `The “${highlightText(
                     `display: none`,
                     "css",
                     true
                 )}” rule reserves space on the page for the element.<br>The “${highlightText(
                     `visibility: hidden`,
                     "css",
                     true
                 )}” rule removes the space used by the element from the page.`
             ]
         ]),
         rightAnswers: "C"
     }
 ],

 [
     37,
     {
         question: `In <code>System->Configuration->Design</code> you can configure individual theme names for _____ ?`,
         answers: new Map([
             ["A", `templates`],
             ["B", `images only`],
             ["C", `layout XML`],
             ["D", `all skin files`],
             ["E", `translations`],
             ["F", `default theme`],
             ["G", `admin panel`],
             ["H", `modules`]
         ]),
         rightAnswers: "A,C,D,E,F"
     }
 ],
 [
     38,
     {
         question: `When assigning a template file, what is the difference between <code>template=""</code> in a ${highlightText(
             `&lt;block&gt;`,
             "xml",
             true
         )} tag and ${highlightText(
             `&lt;action method="setTemplate"&gt;`,
             "xml",
             true
         )}`,
         rightAnswers: "B",
         answers: new Map([
             [
                 "A",
                 `No difference: Both set a template for an existing block.`
             ],
             [
                 "B",
                 `<code>template=""</code> can only be used when the block is being instantiated.`
             ],
             [
                 "C",
                 `${highlightText(
                     `&lt;action method="setTemplate">&gt;`,
                     "xml",
                     true
                 )} can only be used when the block is being instantiated.`
             ],
             [
                 "D",
                 `<code>template=""</code> is wrong and doesn't work at all.`
             ]
         ])
     }
 ],
 [
     39,
     {
         question: `You want to create a wrapper block that uses an HTML tag name which is set by the action <code>setHtmlTagName</code>.<br>The wrapper block should render all its child blocks within the HTML tag.<br>Which block type should you use to create the wrapper block?`,
         answers: new Map([
             ["A", `page/html`],
             ["B", `page/wrapper`],
             ["C", `page/div_wrapper`],
             ["D", `page/html_wrapper`]
         ]),
         rightAnswers: "D"
     }
 ],

 [
     40,
     {
         question: `Which two of the following statements regarding Magento configuration scopes are true?`,
         answers: new Map([
             [
                 "A",
                 `"Website"&nbsp;&nbsp;&nbsp;&nbsp;has a higher priority than "Store View".`
             ],
             [
                 "B",
                 `"Store View"&nbsp;has a higher priority than "Website".`
             ],
             [
                 "C",
                 `"Global"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;has a higher priority than "Website."`
             ],
             [
                 "D",
                 `"Website"&nbsp;&nbsp;&nbsp;&nbsp;has a higher priority than "Global".`
             ],
             [
                 "E",
                 `"Global"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;has a higher priority than "Store View".`
             ],
             [
                 "F",
                 `"Global"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;has a higher priority than "Store".`
             ],
             [
                 "G",
                 `"Store"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;has a higher priority than "Store View".`
             ]
         ]),
         rightAnswers: "B,D"
     }
 ],

 [
     42,
     {
         question: `Layered navigation is displayed for a specific category when _____ ?`,
         answers: new Map([
             [
                 "A",
                 `layered navigation is enabled in <code>System-> Configuration-> Catalog</code>`
             ],
             [
                 "B",
                 `the category contains products with filterable attributes`
             ],
             ["C", `"Is Anchor" is set to "Yes" in the category settings`],
             [
                 "D",
                 `custom layout update XML adds the layered navigation block`
             ]
         ]),
         rightAnswers: "C"
     }
 ],

 [
     43,
     {
         question: `Which string will NOT be translated?`,
         answers: new Map([
             [
                 "A",
                 `"You can save %s %% in the next 15 min.","Du kannst %s %% in den nachsten 15min sparen"`
             ],
             [
                 "B",
                 `"Click &lt;a href="%s"&gt;here&lt;/a&gt; to continue.","Klicken Sie &lt;a href="%s"&gt;hier&lt;/a&gt; um welter zu machen."`
             ],
             [
                 "C",
                 `"We\'ll send you a new password.","Wir werden dir emneues Password zusenden."`
             ],
             ["D", `"The coupon has expired","Der Coupon ist "abgelaufen"`]
         ]),
         rightAnswers: "B"
     }
 ],

 [
     44,
     {
         question: `Which file adds "breadcrumbs" on pages?`,
         answers: new Map([
             ["A", `page.xml`],
             ["B", `breadcrumbs.xml`],
             ["C", `navigation.xml`],
             ["D", `core.xml`],
             ["E", `header.xml`]
         ]),
         rightAnswers: "A"
     }
 ],

 [
     45,
     {
         question: `Within a Magento instance configured to use the package name <code>my_package</code> and the theme name <code>my_theme</code>, which file would override the default catalog search template?`,
         answers: new Map([
             [
                 "A",
                 `app/frontend/base/my_package/my_theme/template/catalogsearch/form.mini.phtml`
             ],
             [
                 "B",
                 `app/design/frontend/base/default/template/customsearch/form.mini.phtml`
             ],
             [
                 "C",
                 `app/design/frontend/my_theme/my_package/template/catalogsearch/custom.form.mini.phtml`
             ],
             [
                 "D",
                 `app/design/frontend/my_package/my_theme/template/catalogsearch/form.mini.phtml`
             ],
             [
                 "E",
                 `app/frontend/default/my_theme/customsearch/form.mini.phtml`
             ]
         ]),
         rightAnswers: "D"
     }
 ],

 [
     47,
     {
         question: `If a layout handle exists in the <code>base/default</code> package, your custom design package, and the custom package's <code>local.xml</code>, which handles can be merged?`,
         answers: new Map([
             ["A", `All of the handles can be merged.`],
             [
                 "B",
                 `Only the handles in <code>base/default</code> can be merged.`
             ],
             ["C", `Only the handles in your design package can be merged.`],
             [
                 "D",
                 `Only the handles in <code>local.xml</code> can be merged.`
             ],
             [
                 "E",
                 `Only the handles in <code>base/default</code> and "<code>local.xml</code>" can be merged.`
             ],
             [
                 "F",
                 `Only the handles in your design package and "<code>local.xml</code>" can be merged.`
             ]
         ]),
         rightAnswers: "A"
     }
 ],

 [
     51,
     {
         question: `When you create an inline translation, where is it stored?`,
         answers: new Map([
             ["A", `In a browser cookie`],
             ["B", `In a CSV file`],
             ["C", `In an XML file`],
             ["D", `In the database`],
             ["E", `In the Magento cache`]
         ]),
         rightAnswers: "D"
     }
 ],

 [
     52,
     {
         question: `What is the correct PHP code for adding the output of a CMS block to a template?`,
         answers: new Map([
             ["A", highlightText(`$this->getchildcms('myCmsBlock')`, "php")],
             [
                 "B",
                 highlightText(`$this->getchildHtml('myCmsElock')`, "php")
             ],
             [
                 "C",
                 highlightText(`$this->getChildBlock('myCmsBlock')`, "php")
             ],
             ["D", highlightText(`$this->getcrnsHtml('myCmsElock')`, "php")],
             ["E", highlightText(`$this->getHtml('myCmsBlock')`, "php")]
         ]),
         rightAnswers: "B"
     }
 ],

 [
     53,
     {
         question: `Which of the following functions is guaranteed to be executed after the DOM is ready?<br>(Assume that the page only includes the <b>prototype.js</b> library)`,
         answers: new Map([
             [
                 "A",
                 highlightText(`$(function() { /* ... */ })`, "javascript")
             ],
             [
                 "B",
                 highlightText(
                     `$(document).ready(function() { /* ... */ })`,
                     "javascript"
                 )
             ],
             [
                 "C",
                 highlightText(
                     `$("dom:loaded", function(){ /* ... */ } })`,
                     "javascript"
                 )
             ],
             [
                 "D",
                 highlightText(
                     `document.observe("dom:loaded", function(){ /* ... */ } })`,
                     "javascript"
                 )
             ],
             [
                 "E",
                 highlightText(
                     `document.observe("html:loaded", function(){ /* ... */ } })`,
                     "javascript"
                 )
             ],
             [
                 "F",
                 highlightText(
                     `document.event("html:load", function(){ /* ... */ } })`,
                     "javascript"
                 )
             ]
         ]),
         rightAnswers: "D"
     }
 ],

 [
     55,
     {
         question: `You want to add CSS to an HTML page. Which HTML tag would you use?`,
         answers: new Map([
             ["A", `css`],
             ["B", `style`],
             ["C", `script`],
             ["D", `styling`]
         ]),
         rightAnswers: "B"
     }
 ],

 [
     56,
     {
         question: `Your project, which uses <b>prototype.js</b>, contains the JavaScript class <code>Photoviewer</code>.<br>Which one of the following code samples will create a class called <code>AdvancedPhotoViewer</code> that extends <code>Photoviewer</code>?<br>EXAMPLE: ${highlightText(
             `var PhotoViewer = Class.create();`,
             "javascript"
         )}`,
         answers: new Map([
             [
                 "A",
                 highlightText(
                     `var AdvancedPhotoViewer = new PhotoViewer()`,
                     "javascript"
                 )
             ],
             [
                 "B",
                 highlightText(
                     `AdvancedPhotoViewer.prototype = Object.extend (new PhotoViewer ()`,
                     "javascript"
                 )
             ],
             [
                 "C",
                 highlightText(
                     `var AdvancedPhotoViewer = Class.extend (PhotoViewer)`,
                     "javascript"
                 )
             ],
             [
                 "D",
                 highlightText(
                     `AdvancedPhotoViewer = PhotoViewer.extend ()`,
                     "javascript"
                 )
             ]
         ]),
         rightAnswers: "B"
     }
 ],

 [
     57,
     {
         question: `You want to create a new screendesign package based on the default packages default theme.<br>Which ONE of the following steps do you have to take?`,
         answers: new Map([
             [
                 "A",
                 `Copy <code>app/design/base</code> to <code>app/design/screendesign</code>`
             ],
             [
                 "B",
                 `Create an empty folder <code>app/design/frontend/screendesign</code> and copy <code>app/design/frontend/default/default</code> into it`
             ],
             [
                 "C",
                 `Create <code>skin/frontend/screendesign</code>, then copy the CSS and images folders and their files from <code>skin/frontend/default/default/</code> to <code>skin/frontend/screendesign/default</code>`
             ],
             [
                 "D",
                 `Inside <code>app/design/frontend</code> and <code>skin/frontend</code>, copy the folder "default" to the folder "custom"; then rename <code>custom/default</code> to <code>custom/screendesign</code> in both places`
             ],
             [
                 "E",
                 `Create <code>app/design/frontend/default/screendesign</code>`
             ]
         ]),
         rightAnswers: "C"
     }
 ],

 [
     61,
     {
         question: `Using <b>prototype.js</b>, which selector would be used to target a group of list items with the class of item?`,
         answers: new Map([
             [
                 "A",
                 highlightText(`$('ul').children('li.item')`, "javascript")
             ],
             ["B", highlightText(`$('item')`, "javascript")],
             ["C", highlightText(`$$('li.item')`, "javascript")],
             ["D", highlightText(`$$('ul > li#item')`, "javascript")]
         ]),
         rightAnswers: "C"
     }
 ],

 [
     62,
     {
         question: `The name of a design package in the Design tab of the <code>System->Configuration</code> window in Admin is also used as ______ and _____ .`,
         answers: new Map([
             ["A", `a folder name in <code>app/design/frontend</code>`],
             [
                 "B",
                 `a configuration value taken from <code>index.php</code>`
             ],
             ["C", `a folder name in <code>skin/frontend</code>`],
             ["D", `a setting in the menu <code>System->Design</code>`],
             ["E", `a folder name in <code>app/design/frontend/base</code>`]
         ]),
         rightAnswers: "A,C"
     }
 ],

 [
     63,
     {
         question: `You have created a system of multiple stores within a single Magento installation.<br>Which one of the following levels of settings is NOT available?`,
         answers: new Map([
             ["A", `Global`],
             ["B", `Website`],
             ["C", `Store Group`],
             ["D", `Store`],
             ["E", `Store View`]
         ]),
         rightAnswers: "C"
     }
 ],

 // [
 //  64,
 //  {
 //      question: `How can a template be included in a CMS block?`,
 //      answers: new Map([
 //          [
 //              "A",
 //              highlightText(
 //                  `{{block template="path/to/template.phtml"}}`,
 //                  "php"
 //              )
 //          ],
 //          [
 //              "B",
 //              highlightText(
 //                  `{{block type="core/template" template="path/to/template.phtml"}}`,
 //                  "php"
 //              )
 //          ],
 //          [
 //              "C",
 //              highlightText(
 //                  `{{block template="path/to/template.phtml"}}`,
 //                  "php"
 //              )
 //          ],
 //          [
 //              "D",
 //              highlightText(
 //                  `{{block id="path/to/template.phtml"}}`,
 //                  "php"
 //              )
 //          ],
 //          [
 //              "E",
 //              highlightText(
 //                  `{{block type="core/template" method="setTemplate" param="path/to/template.phtml"}}`,
 //                  "php"
 //              )
 //          ]
 //      ]),
 //      rightAnswers: "B"
 //  }
 // ],

 [
     65,
     {
         question: `Which file adds the search module on a Magento website frontend?`,
         answers: new Map([
             ["A", `page.xml`],
             ["B", `search.xml`],
             ["C", `catalogsearch.xml`],
             ["D", `searchproducts.xml`]
         ]),
         rightAnswers: "C"
     }
 ],

 [
     67,
     {
         question: `How can you override a native template file in an activated custom theme, using the design fallback?`,
         answers: new Map([
             ["A", `Copy the file to the appropriate folder.`],
             [
                 "B",
                 `Copy the file to the appropriate folder and specify the path to it in the admin panel.`
             ],
             [
                 "C",
                 `Copy the file to the appropriate folder and specify the path to it in the database.`
             ],
             [
                 "D",
                 `Copy the file to the appropriate folder and rename it by adding the suffix <code>as</code>.`
             ]
         ]),
         rightAnswers: "A"
     }
 ],

 [
     68,
     {
         question: `In Magento layouts, which attribute for <code>&lt;block&gt;</code> defines the functionality of the block?`,
         answers: new Map([
             ["A", `as`],
             ["B", `action`],
             ["C", `type`],
             ["D", `name`]
         ]),
         rightAnswers: "C"
     }
 ],
////69
 [
     70,
     {
         question: `Given the information shown below, which answer will correctly assign a customized template file using layout XML?<br>Block type: <code>example/controller</code><br>Template path: <code>app/design/frontend/base/exampletheme/examplefolder/example.phtml</code>`,
         answers: new Map([
             [
                 "A",
                 highlightText(
                     `<template block type="example/controller" name="example" as="example1" filepath="examplefolder/example.phtml" />`,
                     "xml"
                 )
             ],
             [
                 "B",
                 highlightText(
                     `<block name="example/controller" template="examplefolder/example.phtml" />`,
                     "xml"
                 )
             ],
             [
                 "C",
                 highlightText(
                     `<block type="example/controller" name="example" as="example" template="examplefolder/example.phtml" />`,
                     "xml"
                 )
             ],
             [
                 "D",
                 highlightText(
                     `<reference name="example/controller" as="example" template="examplefolder/example.phtml" />`,
                     "xml"
                 )
             ]
         ]),
         rightAnswers: "C"
     }
 ],
////71
 [
     72,
     {
         question: `Which piece of code creates a url that links to the store pages in transactional email templates?`,
         answers: new Map([
             ["A", highlightText(`{{store url=""}}`, "php")],
             ["B", highlightText(`{{store_page url=""}}`, "php")],
             ["C", highlightText(`{{store_url=""}}`, "php")],
             ["D", highlightText(`{{store_name url=""}}`, "php")]
         ]),
         rightAnswers: "A"
     }
 ],

 [
     73,
     {
         question: `Which element in layout XML specifies a method to be called on a referenced or newly defined block?`,
         answers: new Map([
             ["A", highlightText(`<action>`, "xml")],
             ["B", highlightText(`<call>`, "xml")],
             ["C", highlightText(`<change>`, "xml")],
             ["D", highlightText(`<method>`, "xml")],
             ["E", highlightText(`<update>`, "xml")]
         ]),
         rightAnswers: "A"
     }
 ],

 [
     74,
     {
         question: `Where are the core module translations located?`,
         answers: new Map([
             ["A", `app/code/locale/`],
             ["B", `app/locale/`],
             ["C", `app/design/frontend/default/default/locale/`],
             ["D", `app/etc/modules/locale/`]
         ]),
         rightAnswers: "B"
     }
 ],

 [
     75,
     {
         question: `How can you minimize the number of HTTP requests made by your native Magento sites for JavaScript files?`,
         answers: new Map([
             ["A", `Enable "JavaScript merging" in the admin.`],
             [
                 "B",
                 `Move JavaScript requests to footer block in <code>local.xml</code>.`
             ],
             ["C", `Enable all Cache Storage Management.`],
             [
                 "D",
                 `D. Remove Magento JavaScript and only use files hosted by a third party CDN.`
             ]
         ]),
         rightAnswers: "A"
     }
 ],

 [
     76,
     {
         question: `You want to change the number of columns per row in the list of upsell products on all product pages.<br>Where do you set the parameter that specifies the number of columns?`,
         answers: new Map([
             ["A", `Admin panel`],
             ["B", `XML layout`],
             ["C", `Template`],
             ["D", `Database`]
         ]),
         rightAnswers: "B"
     }
 ],

 [
     77,
     {
         question: `In an email template or a CMS block, which two of the following directives specify a store URL without requiring you to hardcode the base URL?`,
         answers: new Map([
             [
                 "A",
                 highlightText(`{{store url="checkout/cart/index"}}`, "php")
             ],
             [
                 "B",
                 highlightText(
                     `{{store route="checkout/cart/index"}}`,
                     "php"
                 )
             ],
             ["C", highlightText(`{{store checkout/cart/index}}`, "php")],
             [
                 "D",
                 highlightText(
                     `http://{{store url="checkout/cart/index"}}`,
                     "php"
                 )
             ],
             [
                 "E",
                 highlightText(`{{base url="}}checkout/cart/index`, "php")
             ],
             [
                 "F",
                 highlightText(
                     `{{store direct_url="checkout/cart/index"}}`,
                     "php"
                 )
             ]
         ]),
         rightAnswers: "A,F"
     }
 ],

 // [
 //  78,
 //  {
 //      question: `Which is the correct order of the three types of translations by priority (<b>1</b> = highest, <b>3</b> = lowest)?`,
 //      answers: new Map([
 //          [
 //              "A",
 //              `1. Database (Inline) translation<br>2. Module translation<br>3. Theme translation`
 //          ],
 //          [
 //              "B",
 //              `1. Database (Inline) translation<br>2. Theme translation<br>3. Module translation`
 //          ],
 //          [
 //              "C",
 //              `1. Module translation<br>2. Database (Inline) translation<br>3. Theme translation`
 //          ],
 //          [
 //              "D",
 //              `1. Theme translation<br>2. Database (Inline) translation<br>3. Module translation`
 //          ]
 //      ]),
 //      rightAnswers: "B"
 //  }
 // ],

 [
     79,
     {
         question: `In a "<code>new order</code>" transactional email template, which two of the following are valid ways to get properties of the template variable "<code>order</code>"?`,
         answers: new Map([
             ["A", highlightText(`{{order var=customer_lastname}}`, "php")],
             ["B", highlightText(`{{var data=order.customerEmail}}`, "php")],
             ["C", highlightText(`{{var order.customer_lastname}}`, "php")],
             [
                 "D",
                 highlightText(`{{var $order.getCustornerEmail()}}`, "php")
             ],
             [
                 "E",
                 highlightText(`{{var order.getCustomerLastname()}}`, "php")
             ],
             [
                 "F",
                 highlightText(`{{var order.getCustomerFirstname}}`, "php")
             ]
         ]),
         rightAnswers: "C,E"
     }
 ],

 [
     80,
     {
         question: `Which three of the following folders should NOT be publicly accessible?`,
         answers: new Map([
             ["A", `app/design/frontend/package/theme/layout`],
             ["B", `app/design/frontend/package/theme/locale`],
             ["C", `app/design/frontend/package/theme/template`],
             ["D", `skin/frontend/package/theme/css`],
             ["E", `skin/frontend/package/theme/js`],
             ["F", `skin/frontend/package/theme/img`]
         ]),
         rightAnswers: "A,B,C"
     }
 ],

 [
     81,
     {
         question: `When a block of type _____ is rendered, all its child blocks are rendered automatically, without the need to call the <code>getChildHtml()</code> method.`,
         answers: new Map([
             ["A", `page/html`],
             ["B", `core/template`],
             ["C", `core/text_list`],
             ["D", `page/html_wrapper`]
         ]),
         rightAnswers: "C"
     }
 ],

 [
     82,
     {
         question: `In layout XML, which two handles are used to assign layout rules to catalog category pages of a store?`,
         answers: new Map([
             ["A", highlightText(`<catalog_category>`, "xml")],
             ["B", highlightText(`<catalog_layered>`, "xml")],
             ["C", highlightText(`<catalog_category_default>`, "xml")],
             ["D", highlightText(`<catalog_category_index>`, "xml")],
             ["E", highlightText(`<catalog_category_layered>`, "xml")]
         ]),
         rightAnswers: "C,E"
     }
 ],

 [
     83,
     {
         question: `Which attribute of an XML tag in the layout defines the system configuration key to be checked before performing the action method?`,
         answers: new Map([
             ["A", `as`],
             ["B", `config`],
             ["C", `if`],
             ["D", `ifconfig`],
             ["E", `iftrue`]
         ]),
         rightAnswers: "D"
     }
 ],

 [
     84,
     {
         question: `What is the function of the attribute <code>output="toHtml"</code> when applied to a <code>&lt;block&gt;</code> tag?`,
         answers: new Map([
             ["A", `Renders a block without any other explicit calls`],
             ["B", `Specifies the sequence of blocks on the page`],
             ["C", `Marks a block as a structural block`],
             ["D", `Marks a block as a content block`]
         ]),
         rightAnswers: "A"
     }
 ],
////85,86
 [
     87,
     {
         question: `Which layout handle can be used to assign a customized template file to the filter navigation block in the left column?`,
         answers: new Map([
             ["A", `default`],
             ["B", `catalog_category_view`],
             ["C", `catalog_category_layered`],
             ["D", `page_two_columns_left`]
         ]),
         rightAnswers: "C"
     }
 ],

 [
     88,
     {
         question: `Which file contains the code that renders the grid of products for a page of the catalog?`,
         answers: new Map([
             ["A", `catalog/product/list.phtml`],
             ["B", `catalog/product/grid.phtml`],
             ["C", `catalog/category/list.phtml`],
             ["D", `catalog/category/grid.phtml`]
         ]),
         rightAnswers: "A"
     }
 ],

 [
     89,
     {
         question: `If you want to provide an existing custom theme for a mobile device browser, you'll only have to _____ .`,
         answers: new Map([
             ["A", `Create a new store for that theme`],
             ["B", `Configure the setting in main menu <code>Mobile</code>`],
             [
                 "C",
                 `Create an exception under <code>System->Design</code> for an appropriate UserAgent`
             ],
             [
                 "D",
                 `Create an exception under the <code>System->Configuration</code> "Design" tab for an appropriate UserAgent`
             ]
         ]),
         rightAnswers: "D"
     }
 ],
////90
 [
     91,
     {
         question: `In which of the following directories is a <code>.xml</code> file located?`,
         answers: new Map([
             ["A", `css`],
             ["B", `layout`],
             ["C", `skin`],
             ["D", `template`]
         ]),
         rightAnswers: "B"
     }
 ],
////92
 [
     93,
     {
         question: `Given a configured package <code>mypackage</code> and a configured theme <code>mytheme</code>, which <b>THREE</b> of the following templates would be part of the design fallback?`,
         answers: new Map([
             ["A", `mypackage/default/template/my/template.phtml`],
             ["B", `base/mytheme/template/my/template.phtml`],
             ["C", `default/default/template/my/template.phtml`],
             ["D", `base/default/template/my/template.phtml`],
             ["E", `default/mytheme/template/my/template.phtml`],
             ["F", `mypackage/mytheme/template/my/template.phtml`]
         ]),
         rightAnswers: "A,D,F"
     }
 ],

 [
     94,
     {
         question: `You want to override the <code>column.phtml</code> file. Which two of the following methods could you use?`,
         answers: new Map([
             [
                 "A",
                 `Rename the file in <code>base/default</code> to enable overriding.`
             ],
             ["B", `Rename the root template configuration in the admin.`],
             [
                 "C",
                 `Create a file with same file name in the same directory structure as your theme.`
             ],
             [
                 "D",
                 `Create a file exception in <code>System->Design</code>, clear cache, and rebuild indexes.`
             ],
             [
                 "E",
                 `Create a file with different file name and different directory structure;<br>then change the template with the <code>setTemplate</code> method.`
             ]
         ]),
         rightAnswers: "C,E"
     }
 ],

 [
     95,
     {
         question: `Which of the following is the layout update handle loaded for built-in simple products?`,
         answers: new Map([
             ["A", `TYPE_simple`],
             ["B", `PRODUCT_TYPE_simple`],
             ["C", `PRODUCT_simple`],
             ["D", `Simple_product`]
         ]),
         rightAnswers: "B"
     }
 ],

 [
     96,
     {
         question: `You want to remove the right structural block from a page. Which code should you use?`,
         answers: new Map([
             ["A", highlightText(`<remove name="right" />`, "xml")],
             ["B", highlightText(`<remove_block name="right" />`, "xml")],
             ["C", highlightText(`<remove type="right">`, "xml")],
             ["D", highlightText(`<remove_structure name="right" />`, "xml")]
         ]),
         rightAnswers: "A"
     }
 ],
////97
 [
     98,
     {
         question: `You need to add a custom structural block template to a block that will render all children automatically.<br>Which three attributes are required in the blocks XML definition?`,
         answers: new Map([
             ["A", `after`],
             ["B", `as`],
             ["C", `before`],
             ["D", `name`],
             ["E", `template`],
             ["F", `type`]
         ]),
         rightAnswers: "B,D,F"
     }
 ],

 [
     99,
     {
         question: `Which type of block defines the HTML head section of the page, which contains elements for including JavaScript, CSS, etc.?`,
         answers: new Map([
             ["A", `core/head`],
             ["B", `core/template`],
             ["C", `page/head`],
             ["D", `page/html_head`],
             ["E", `page/head_template`]
         ]),
         rightAnswers: "D"
     }
 ],

 [
     100,
     {
         question: `Which four of the following page elements can be updated from the Magento Admin in <code>System->Configuration->Design</code>?`,
         answers: new Map([
             ["A", `Breadcrumb Separator`],
             ["B", `Copyright`],
             ["C", `Favicon`],
             ["D", `Logo`],
             ["E", `Navigation`],
             ["F", `Page Title`],
             ["G", `Top Links`]
         ]),
         rightAnswers: "B,C,D,F"
     }
 ],
////101,102,103,104
 [
     105,
     {
         question: `Where can you assign a root category for a new store in your Magento installation?`,
         answers: new Map([
             ["A", `Global`],
             ["B", `Website`],
             ["C", `Store`],
             ["D", `Store View`]
         ]),
         rightAnswers: "C"
     }
 ],

 [
     106,
     {
         question: `The underscore prefix "_" in variable names in Magento template files marks these variables as _____ ?`,
         answers: new Map([
             ["A", `protected`],
             ["B", `public`],
             ["C", `private`],
             ["D", `declared in the template file`]
         ]),
         rightAnswers: "D"
     }
 ],

 [
     107,
     {
         question: `Using Magentos JavaScript translator object, which is the correct option for translating JavaScript strings within a <code>.phtml</code> file?`,
         answers: new Map([
             [
                 "A",
                 highlightText(
                     `Translator.newTranslation({"To be translated":"Translated Copy Here"});`,
                     "javascript"
                 )
             ],
             [
                 "B",
                 highlightText(
                     `Translator.add("To be translated");`,
                     "javascript"
                 )
             ],
             [
                 "C",
                 highlightText(
                     `Translate({"To be translated","<?php echo $this->__('To be translated'); ?>"});`,
                     "javascript"
                 )
             ],
             [
                 "D",
                 highlightText(
                     `Translator.add({"To be translated":"<?php echo $this->__('To be translated'); ?>"});`,
                     "javascript"
                 )
             ]
         ]),
         rightAnswers: "D"
     }
 ],
 [
     base + 1.1,
     {
         question: `In a Magento instance configured to use the package name <code>creare</code> and the theme name <code>blue</code>, which file would override the default catalog category view template?`,
         answers: new Map([
             [
                 "A",
                 "<code>app/frontend/base/creare/blue/template/catalog/category/view.phtml</code>"
             ],
             [
                 "B",
                 "<code>app/design/frontend/creare/blue/template/catalog/category/view.phtml</code>"
             ],
             [
                 "C",
                 "<code>app/design/frontend/creare/default/template/catalog/view.phtml</code>"
             ],
             [
                 "D",
                 "<code>app/design/frontend/blue/creare/template/catalog/category.phtml</code>"
             ],
             [
                 "E",
                 "<code>app/frontend/default/blue/customcategory/view.phtml</code>"
             ]
         ]),
         rightAnswers: "B"
     }
 ],
 [
     base + 1.2,
     {
         question: `You have a "custom/default" design package. You need to edit this file: <code>/app/design/frontend/base/default/template/page/html/header.phtml</code>.<br>Which method is bad practice?`,
         answers: new Map([
             [
                 "A",
                 "Create a new module in <code>base/default</code> called <code>custom</code> and copy the file there for editing."
             ],
             [
                 "B",
                 "Create a new package called <code>custom/custom</code> and copy the file there for editing."
             ],
             [
                 "C",
                 "Copy the file to <code>custom/default</code> for editing."
             ],
             ["D", "Edit the <code>base/default</code> file directly."]
         ]),
         rightAnswers: "D"
     }
 ],
 [
     base + 1.3,
     {
         question: `Given a configured package <code>mypackage</code> and a configured theme <code>mytheme</code>, which THREE of the following templates would be part of the design fallback?`,
         answers: new Map([
             [
                 "A",
                 "<code>mypackage/default/template/my/template.phtml</code>"
             ],
             ["B", "<code>base/mytheme/template/my/template.phtml</code>"],
             [
                 "C",
                 "<code>default/default/template/my/template.phtml</code>"
             ],
             ["D", "<code>base/default/template/my/template.phtml</code>"],
             [
                 "E",
                 "<code>default/mytheme/template/my/template.phtml</code>"
             ],
             [
                 "F",
                 "<code>mypackage/mytheme/template/my/template.phtml</code>"
             ]
         ]),
         rightAnswers: "A,D,F"
     }
 ],
 [
     base + 1.4,
     {
         question: `What is <code>System > Design</code> used for?`,
         answers: new Map([
             ["A", "Configuring the fallback system of a store view"],
             [
                 "B",
                 "Overriding the fallback system of a store view for a limited period of time"
             ],
             ["C", "Activating the fallback system of a store view"],
             [
                 "D",
                 "Overriding the fallback system of a subpart (Layout, Templates, ...) of a store view"
             ],
             [
                 "E",
                 "Configuring basic Package and Theme settings of your Magento instance"
             ]
         ]),
         rightAnswers: "B"
     }
 ],
 [
     base + 2.1,
     {
         question: `You want to remove the left structural block from a page. Which code should you use?`,
         answers: new Map([
             [`A`, highlightText(`<remove_block name="left"/>`, "xml")],
             [`B`, highlightText(`<remove type="left">`, "xml")],
             [`C`, highlightText(`<remove name="left"/>`, "xml")],
             [`D`, highlightText(`<remove_structure name="left"/>`, "xml")]
         ]),
         rightAnswers: "C"
     }
 ],
 [
     base + 2.2,
     {
         question: `Which three of the following action method(s) are valid ways to add custom JavaScript files?`,
         answers: new Map([
             [
                 `A`,
                 highlightText(
                     `<action method="addItem"><type>js</type><name>myscript.js</name></action>`,
                     "xml"
                 )
             ],
             [
                 `B`,
                 highlightText(
                     `<action method="addJs"><script>myscript.js</script></action>`,
                     "xml"
                 )
             ],
             [
                 `C`,
                 highlightText(
                     `<action method="addJavascript"><type>js</type><src>myscript.js</src></action>`,
                     "xml"
                 )
             ],
             [
                 `D`,
                 highlightText(
                     `<action method="addJs"><type>skin_js</type><name>myscript.js</name></action>`,
                     "xml"
                 )
             ],
             [
                 `E`,
                 highlightText(
                     `<action method="addItem"><type>skin_js</type><name>myscript.js</name></action>`,
                     "xml"
                 )
             ],
             [
                 `F`,
                 highlightText(
                     `<action method="appendScript"><type>js</type><script>myscript.js</script></action>`,
                     "xml"
                 )
             ],
             [
                 `G`,
                 highlightText(
                     `<action method="addScript"><script>myscript.js</script></action>`,
                     "xml"
                 )
             ]
         ]),
         rightAnswers: "A,B,E"
     }
 ],
 [
     base + 2.3,
     {
         question: `You need to add a custom structural block template to a block that will render all children automatically. Which three attributes are NOT required in the block’s XML definition?`,
         answers: new Map([
             [`A`, highlightText(`after`, "css")],
             [`B`, highlightText(`name`, "css")],
             [`C`, highlightText(`template`, "css")],
             [`D`, highlightText(`before`, "css")],
             [`E`, highlightText(`ifModule`, "css")],
             [`F`, highlightText(`type`, "css")]
         ]),
         rightAnswers: "A,D,E"
     }
 ],
 [
     base + 2.1,
     {
         question: `What is the proper layout update handle for adding a CSS file to the product page?`,
         answers: new Map([
             [`A`, highlightText(`<product>`, "xml")],
             [`B`, highlightText(`<catalog_product>`, "xml")],
             [`C`, highlightText(`<catalog_product_view>`, "xml")],
             [`D`, highlightText(`<default>`, "xml")]
         ]),
         rightAnswers: "C"
     }
 ],
 [
     base + 3.1,
     {
         question: `The correct way to call a child template from within a template file would be to use:`,
         answers: new Map([
             [
                 `A`,
                 highlightText(
                     `<?php echo $this->getChildHtml('name_of_block') ?>`,
                     "php"
                 )
             ],
             [
                 `B`,
                 highlightText(
                     `<?php echo $this->getTemplate('/my/template.phtml') ?>`,
                     "php"
                 )
             ],
             [
                 `C`,
                 highlightText(
                     `<?php echo $this->getChildTemplate('name_of_block') ?>`,
                     "php"
                 )
             ],
             [
                 `D`,
                 highlightText(
                     `<?php echo $template->getChild('name_of_block') ?>`,
                     "php"
                 )
             ]
         ]),
         rightAnswers: "B"
     }
 ],
 [
     base + 3.2,
     {
         question: `How would you replace the root template of a product page using <code>layout.xml</code>?`,
         answers: new Map([
             [
                 `A`,
                 highlightText(
                     `<default>
    <reference name="product_view">
        <action method="setTemplate">
            <template>page/4-columns.phtml</template>
        </action>
    </reference>
</default>`,
                     "xml"
                 )
             ],
             [
                 `B`,
                 highlightText(
                     `<catalog_product_view>
    <reference name="root">
        <action method="setTemplate">
            <template>page/4-columns.phtml</template>
        </action>
    </reference>
</catalog_product_view>`,
                     "xml"
                 )
             ],
             [
                 `C`,
                 highlightText(
                     `<catalog_product_view>
    <reference name="root">
        <template>page/4-columns.phtml</template>
    </reference>
</catalog_product_view>`,
                     "xml"
                 )
             ],
             [
                 `D`,
                 highlightText(
                     `<catalog_product_view>
    <reference name="root">
        <action method="setRootTemplate">
            <template>page/4-columns.phtml</template>
        </action>
    </reference>
</catalog_product_view>`,
                     "xml"
                 )
             ]
         ]),
         rightAnswers: "B"
     }
 ],
 [
     base + 3.3,
     {
         question: `Why does Magento use different constructs in its <code>.phtml</code> files e.g. <code>if (...) : endif;</code>?`,
         answers: new Map([
             [
                 `A`,
                 `<code>if(...){ ... }</code> doesn't work in <code>.phtml</code> file types`
             ],
             [
                 `B`,
                 `To make it easier to distinguish starting and ending tags within HTML/PHP mixed files`
             ],
             [`C`, `<code>if(...) : endif;</code> is Magento specific`],
             [`D`, `There is no reason`]
         ]),
         rightAnswers: "B"
     }
 ],
 [
     base + 3.4,
     {
         question: `What would the following code render? ${highlightText(
             "<?php echo $this->getChildHtml(); ?>",
             "php",
             true
         )}`,
         answers: new Map([
             [`A`, `It wouldn't render anything`],
             [
                 `B`,
                 `It would render any child block without a <code>name</code> attribute associated`
             ],
             [
                 `C`,
                 `It would render all child blocks that have not yet been rendered`
             ],
             [`D`, `You will receive a PHP error`]
         ]),
         rightAnswers: "C"
     }
 ],
 [
     base + 4.1,
     {
         question: `Which is the correct type attribute for a structural block?`,
         answers: new Map([
             [`A`, `page/html`],
             [`B`, `core/html_wrapper`],
             [`C`, `core/template`],
             [`D`, `core/text_list`]
         ]),
         rightAnswers: "D"
     }
 ],
 [
     base + 4.2,
     {
         question: `What does <code>$this</code> refer to in template files?`,
         answers: new Map([
             [
                 `A`,
                 `<code>$this</code> refers to the template and variables set within the template file`
             ],
             [
                 `B`,
                 `<code>$this</code> refers to the controller file and allows access to controller methods`
             ],
             [
                 `C`,
                 `<code>$this</code> refers to the block instance of the template we are currently using`
             ],
             [`D`, `<code>$this</code> refers to the Magento database`]
         ]),
         rightAnswers: "C"
     }
 ],
 [
     base + 5.1,
     {
         question: `Which three of the following folders should NOT be publicly accessible?`,
         answers: new Map([
             [`A`, `app/design/frontend/package/theme/layout`],
             [`B`, `app/locale`],
             [`C`, `var/cache`],
             [`D`, `js/varien`],
             [`E`, `skin/frontend/package/theme/js`],
             [`F`, `skin/frontend/package/theme/css`]
         ]),
         rightAnswers: "A,B,C"
     }
 ],
 [
     base + 5.2,
     {
         question: `Which files are typically available within the <code>skin/</code> directory?`,
         answers: new Map([
             [`A`, `Layout`],
             [`B`, `Javascript`],
             [`C`, `Stylesheet`],
             [`D`, `Images`],
             [`E`, `Translation`],
             [`F`, `Block`]
         ]),
         rightAnswers: "B,C,D"
     }
 ],
 [
     base + 6.1,
     {
         question: `Using <b>prototype.js</b>, which selector would be used to target a group of paragraphs with the class of green?`,
         answers: new Map([
             [`A`, highlightText(`$$('p.green')`, "javascript")],
             [
                 `B`,
                 highlightText(`$('div').children('p.green')`, "javascript")
             ],
             [`C`, highlightText(`$('.green')`, "javascript")],
             [`D`, highlightText(`$$('p > .green')`, "javascript")]
         ]),
         rightAnswers: "A"
     }
 ],
 [
     base + 6.2,
     {
         question: `Given that the <b>prototype.js</b> library is included - what would be the result of the following code?
${highlightText(
             `<script type="text/javascript">
    Person = Class.create();
    Person.prototype = {
         initialize: function(name)
         {
              this.name = name;
              this.sayHello('Hello');
         },
         sayHello: function (message)
         {
              return(this.name + ' says ' + message);
         }
    };
    Person.prototype.sayHello = Person.prototype.sayHello.wrap(function(parentMethod, message, flag) {
         if (flag){
            return(message + ' Shouted ' + this.name);
        } else {
            return parentMethod(message);
        }
     });
    var Jimmy = new Person('Jimmy');
    alert(Jimmy.sayHello('Hi!', true));
    alert(Jimmy.sayHello('Hi!', false));
</script>`,
             "javascript"
         )}`,
         answers: new Map([
             [
                 `A`,
                 `${highlightText(
                     `undefined`,
                     "javascript"
                 )} followed by ${highlightText(`[Object]`, "javascript")}`
             ],
             [
                 `B`,
                 `${highlightText(
                     `"Jimmy says Hi!"`,
                     "javascript"
                 )} followed by ${highlightText(
                     `"Hi! Shouted Jimmy"`,
                     "javascript"
                 )}`
             ],
             [
                 `C`,
                 `${highlightText(
                     `"Hi! Shouted Jimmy"`,
                     "javascript"
                 )} followed by ${highlightText(
                     `"Jimmy says Hi!"`,
                     "javascript"
                 )}`
             ],
             [
                 `D`,
                 `${highlightText(
                     `undefined`,
                     "javascript"
                 )} followed by ${highlightText(
                     `"Jimmy says Hi!"`,
                     "javascript"
                 )}`
             ]
         ]),
         rightAnswers: "C"
     }
 ],
 [
     base + 7.1,
     {
         question: `Given the folling HTML code - what colour would the ${highlightText(
             `<span>`,
             "xml",
             true
         )} text be within the paragraph? The browser width has been set to <code>600px</code>.
${highlightText(
             `<html>
    <head>
        <style>
            .urgent {
                color: yellow;
            }
            @media (min-width: 600px) {
                .urgent {
                    color: blue;
                }
            }
            @media (max-width: 599px) {
                .urgent {
                    color: red;
                }
            }
        </style>
    </head>
    <body>
        <p>This is just a <span class="urgent">paragraph</span></p>
    </body>
</html>`,
             "xml"
         )}`,
         answers: new Map([
             [`A`, `${colorPreview("yellow")} yellow`],
             [`B`, `${colorPreview("blue")} blue`],
             [`C`, `${colorPreview("red")} red`],
             [`D`, `${colorPreview("black")} black`]
         ]),
         rightAnswers: "B"
     }
 ],
 [
     base + 7.2,
     {
         question: `How many ${highlightText(
             `<li>`,
             "xml",
             true
         )} elements would show in the first row of this grid?
${highlightText(
             `<html>
    <head>
        <style>
            ul {
                width: 100%;
            }
            ul li {
                display: block;
                float: left;
                width: 20%;
                padding: 0 2.5%;
                border: 1px solid grey;
            }
        </style>
    </head>
    <body>
        <div>
            <ul>
                <li>Block</li>
                <li>Block</li>
                <li>Block</li>
                <li>Block</li>
            </ul>
        </div>
    </body>
</html>`,
             "xml"
         )}`,
         answers: new Map([
             [`A`, `One`],
             [`B`, `Two`],
             [`C`, `Three`],
             [`D`, `Four`]
         ]),
         rightAnswers: "C"
     }
 ],
 [
     base + 7.3,
     {
         question: `Based on the code below, what color will the <code>background</code> colour be of the <code>div</code> tag?
${highlightText(
             `<style>
    div { background: #000; }
    #darker { background: #333; }
    .lighter { background: #FFF; }
</style>
<div class="lighter" id="darker" style="background: #F00"></div>`,
             "xml"
         )}`,
         answers: new Map([
             [`A`, `${colorPreview("black")} black`],
             [`B`, `${colorPreview("grey")} grey`],
             [`C`, `${colorPreview("white")} white`],
             [`D`, `${colorPreview("red")} red`]
         ]),
         rightAnswers: "D"
     }
 ],
 [
     base + 7.4,
     {
         question: `What would be the expected outcome of the following code?
${highlightText(
             `<html>
    <head>
        <style>
            .container {
                width: 100%;
            }
            .left {
                float: left;
                clear: left;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="left">BOX1</div>
            <div class="left" style="clear:right">BOX2</div>
            <div class="left" style="clear:none">BOX3</div>
        </div>
    </body>
</html>`,
             "xml"
         )}`,
         answers: new Map([
             [
                 `A`,
                 `
<br>BOX1<br>
BOX2 BOX3
<br>
<br>`
             ],
             [
                 `B`,
                 `
<br>BOX1 BOX2 BOX3
<br>
<br>`
             ],
             [
                 `C`,
                 `
<br>BOX1<br>
BOX2<br>
BOX3
<br>
<br>`
             ],
             [
                 `D`,
                 `
<br>BOX1 BOX2<br>
BOX3
<br>
<br>`
             ]
         ]),
         rightAnswers: "B"
     }
 ],
 [
     base + 8.1,
     {
         question: `How would you retrieve the customers name in a transactional email template?`,
         answers: new Map([
             [`A`, highlightText(`{{var customer.name}}`, "php")],
             [`B`, highlightText(`{{var customer_name}}`, "php")],
             [`C`, highlightText(`{{customer name}}`, "php")],
             [`D`, highlightText(`{{var getCustomerName()}}`, "php")]
         ]),
         rightAnswers: "B"
     }
 ],
 [
     base + 8.2,
     {
         question: `How can a template be included in a CMS block?`,
         answers: new Map([
             [
                 `A`,
                 highlightText(
                     `{{block template="catalog/product/view.phtml"}}`,
                     "php"
                 )
             ],
             [
                 `B`,
                 highlightText(
                     `{{block id="catalog/product/view.phtml"}}`,
                     "php"
                 )
             ],
             [
                 `C`,
                 highlightText(
                     `{{block type="core/template" template="catalog/product/view.phtml"}}`,
                     "php"
                 )
             ],
             [
                 `D`,
                 highlightText(
                     `{{block type="core/template" name="product.info" } }`,
                     "php"
                 )
             ]
         ]),
         rightAnswers: "C"
     }
 ],
 [
     base + 9.1,
     {
         question: `Where would you change the timezone settings in Magento?`,
         answers: new Map([
             [`A`, `Index.php`],
             [`B`, `System > Configuration > Admin > Timezone`],
             [`C`, `System > Configuration > General`],
             [`D`, `System > General`]
         ]),
         rightAnswers: "C"
     }
 ],
 [
     base + 9.2,
     {
         question: `You have two website views, ChairsRUs and TablesRUs. You want to disable the flat rate shipping method for the English Store View within ChairsRUs. Which of the following would be the most appropriate way to do this?`,
         answers: new Map([
             [`A`, `Disable within Default scope`],
             [`B`, `Disable within the ChairsRUs website scope`],
             [
                 `C`,
                 `Disable within the English Store View within ChairsRUs as it's more specific`
             ],
             [
                 `D`,
                 `Disable within Default scope and enable for the TablesRUs website view`
             ]
         ]),
         rightAnswers: "B"
     }
 ],
 [
     base + 9.3,
     {
         question: `Which four of the following page elements can be updated from the Magento Admin in <code>System->Configuration->Catalog->Catalog</code>?`,
         answers: new Map([
             [`A`, `Sitemap Generation Frequency`],
             [`B`, `Backorders`],
             [`C`, `Price Scope`],
             [`D`, `Use Javascript Calendar`],
             [`E`, `Search Type`],
             [`F`, `Enable Terms & Conditions`],
             [`G`, `Image Placeholders`]
         ]),
         rightAnswers: "C,D,E,G"
     }
 ],
 [
     base + 10.1,
     {
         question: `Which is the correct order of the three types of translations by priority <code>1 = highest, 3 = lowest</code>?`,
         answers: new Map([
             [
                 `A`,
                 `1. Database (Inline) translation<br>2. Module translation<br>3. Theme translation`
             ],
             [
                 `B`,
                 `1. Database (Inline) translation<br>2. Theme translation<br>3. Module translation`
             ],
             [
                 `C`,
                 `1. Module translation<br>2. Database (In line) translation<br>3. Theme translation`
             ],
             [
                 `D`,
                 `1. Theme translation<br>2. Database (In line) translation<br>3. Module translation`
             ]
         ]),
         rightAnswers: "B"
     }
 ],
 [
     base + 10.2,
     {
         question: `Where would you find the <code>order_new.html</code> transaction template within the Magento file structure?`,
         answers: new Map([
             [`A`, `Inside your themes <code>locale</code> folder`],
             [`B`, `Directly inside <code>app/core/locale/en_US/</code>`],
             [
                 `C`,
                 `Directly inside <code>app/locale/template/email/sales</code>`
             ],
             [`D`, `Directly inside <code>app/locale/template/email</code>`]
         ]),
         rightAnswers: "C"
     }
 ],

    [
        41,
        {
            question: `Given the following HTML and CSS, what color will the word "nice be: <br>
<b>HTML:</b><br>
${highlightText(`<p>This is some <em>nice</em> looking text.</p>`, "xml")}
<b>CSS:</b><br>
${highlightText(
                `body { color: black; }
p { color: red; }
em { color: green; }
p * { color: blue; }
p em { color: inherit; }`,
                "css"
            )}
`,
            answers: new Map([
                ["A", `${colorPreview("black")} black`],
                ["B", `${colorPreview("blue")} blue`],
                ["C", `${colorPreview("green")} green`],
                ["D", `${colorPreview("red")} red`]
            ]),
            rightAnswers: "D"
        }
    ],

    [
        46,
        {
            question: `Given the following layout XML, what will be the expected result on the Magento frontend?${highlightText(
                `
<default>
    <reference name="header">
        <remove name="top.menu" />
        <block type="core/text_list" name="top.menu" as="topMenu">
            <label>Navigation Bar</label>
            <block type="page/html_topmenu" name="catalog.topnav"
                   template="page/html/topmenu.phtml" />
    </reference>
</default>`,
                "xml"
            )}`,
            answers: new Map([
                [
                    "A",
                    `The <code>top.menu</code> block will be displayed on all pages within the header block`
                ],
                [
                    "B",
                    `The <code>top.menu</code> block will never be displayed`
                ],
                [
                    "C",
                    `The <code>top.menu</code> block will be displayed within the default block`
                ],
                [
                    "D",
                    `The <code>top.menu</code> block will only be displayed within "<b>Catalog</b>" pages`
                ]
            ]),
            rightAnswers: "B"
        }
    ],

    [
        48,
        {
            question: `What does the ${highlightText(
                `<update handle=catalog_seo_sitemap />`,
                "xml",
                true
            )} element do in the following piece of layout XML?
${highlightText(
                `<catalog_seo_sitemap_category translate="label">
    <label>Catalog Seo Sitemap (Category List)</label>
    <reference name="head">
        <action method="setTitle" translate="title" module="catalog">
            <title>Site Map</title>
        </action>
    </reference>
    <update handle="catalog_seo_sitemap" />
    <reference name=" seo.sitemap.container">
        <action method="setTitle" translate="title" module="catalog">
            <title>Categories</title>
        </action>
        <block type="catalog/seo_sitemap_category" name="seo.sitemap.sitemap"
               as="sitemap" after="pager_top"
               template="catalog/seo/sitemap.phtml">
            <action method="bindPager">
            <pager>seo.sitemap.pager.tope</pager></action>
            <action method="bindPager">
            <pager>seo.sitemap.pager.bottom</pager></action>
            <action method="setItemsTitle" translate="title" module="catalog">
                <title>categories</title>
            </action>
        </block>
    </reference>
    <reference name="seo.sitemap.links">
        <action method="addLink" translate="label title" module="catalog">
            <label>Products sitemap</label>
            <url helper="catalog/map/getProductUrl"/>
            <title>Products Sitemap</title>
        </action>
    </reference>
</catalog_seo_sitemap_category>`,
                "xml"
            )}`,
            answers: new Map([
                [
                    "A",
                    `It unsets all elements defined in the layout handle called <code>catalog_seo_sitemap</code>.`
                ],
                [
                    "B",
                    `It loads the layout handle <code>catalog_seo_sitemap_category</code> into the layout handle ca <code>catalog_seo_sitemap</code>.`
                ],
                [
                    "C",
                    `It loads the layout handle <code>catalog_seo_sitemap</code> into the layout handle called <code>catalog_seo_sitemap_category</code>.`
                ],
                [
                    "D",
                    `It updates the name on the layout handle <code>catalog_seo_sitemap_category</code> to <code>catalog_seo_sitemap</code>.`
                ]
            ]),
            rightAnswers: "C"
        }
    ],

    [
        49,
        {
            question: `Given the following HTML code, how are the divs <code>#column1</code>, <code>#column2</code> and <code>#column3</code> displayed on the page?
${highlightText(`<style>`, "xml")}
${highlightText(
                `    .container { width: 600px; }
    .col { border: 1px solid #000; float: left; width: 200px; }`,
                "css"
            )}
${highlightText(
                `</style>

<div class="container">
    <div id="column1" class="col"></div>
    <div id="column2" class="col"></div>
    <div id="column3" class="col"></div>
</div>`,
                "xml"
            )}`,
            answers: new Map([
                [
                    "A",
                    `The 3 divs are displayed side-by-side and their borders are adjacent to each other.`
                ],
                [
                    "B",
                    `The 3 divs are displayed side-by-side; however their borders overlap with each other.`
                ],
                [
                    "C",
                    `The divs <code>#column1</code> and <code>#column2</code> are displayed side-by-side. The div <code>#column3</code> appears below <code>#column1</code>.`
                ],
                ["D", `The divs are displayed on top of one another.`]
            ]),
            rightAnswers: "C"
        }
    ],

    [
        50,
        {
            question: `What is the total width of a block-element styled with the following CSS?${highlightText(
                `#example{
    width: 200px;
    border: 1px solid #333;
    margin: 10px;
    padding: 15px;
}`,
                "css"
            )}`,
            answers: new Map([
                ["A", `${highlightText(`200px`, "css")}`],
                ["B", `${highlightText(`202px`, "css")}`],
                ["C", `${highlightText(`222px`, "css")}`],
                ["D", `${highlightText(`232px`, "css")}`]
            ]),
            rightAnswers: "D"
        }
    ],

    [
        54,
        {
            question: `Which of following <code>if else</code> constructs is used in Magento core templates?`,
            answers: new Map([
                [
                    "A",
                    `${highlightText(
                        `if (/* ... */):
elseif (/* ... */) { }
endif;`,
                        "php"
                    )}`
                ],
                [
                    "B",
                    `${highlightText(
                        `if ():
elseif (/* ... */):
endif;`,
                        "php"
                    )}`
                ],
                [
                    "C",
                    `${highlightText(
                        `if (/* ... */) { }
elseif (/* ... */) { }
else { }`,
                        "php"
                    )}`
                ],
                [
                    "D",
                    `${highlightText(
                        `if (/* ... */) { }
else {
    if (/* ... */) { }
}`,
                        "php"
                    )}`
                ]
            ]),
            rightAnswers: "B"
        }
    ],

    [
        58,
        {
            question: `Based on the code below, what color will a browser display in rendering the text inside the div tag?
${highlightText(`<style>`, "xml")}
${highlightText(
                `    div   { color: black; }
    #red  { color: red;   }
    .blue { color: blue;  }`,
                "css"
            )}
${highlightText(
                `</style>
<div id="red" class="blue" style="color green;">What color is this text?</div>`,
                "xml"
            )}`,
            answers: new Map([
                ["A", `${colorPreview("green")} green`],
                ["B", `${colorPreview("blue")} blue`],
                ["C", `${colorPreview("red")} red`],
                ["D", `${colorPreview("black")} black`]
            ]),
            rightAnswers: "A"
        }
    ],

    [
        59,
        {
            question: `Which two of the following would add a CSS file to every page?`,
            answers: new Map([
                [
                    "A",
                    highlightText(
                        `<default>
    <reference name="head">
        <action method="addCss">css/styles.css</action>
    </reference>
</default>`,
                        "xml"
                    )
                ],
                [
                    "B",
                    highlightText(
                        `<default>
    <reference name="head">
        <action method="addItem">
            <type>skin_css</type>
            <name>css/styles.css</name>
        </action>
    </reference>
</default>`,
                        "xml"
                    )
                ],
                [
                    "C",
                    highlightText(
                        `<default>
    <reference name="head">
        <action method="addStylesheet">css/styles.css</action>
    </reference>
</default>`,
                        "xml"
                    )
                ],
                [
                    "D",
                    highlightText(
                        `<default>
    <reference name="head">
        <action method="addCss">
            <stylesheet>css/styles.css</stylesheet>
        </action>
    </reference>
</default>`,
                        "xml"
                    )
                ],
                [
                    `E`,
                    highlightText(
                        `<default>
    <reference name="head">
        <action method="addltemn">
            <type>css</type>
            <name>css/styles.css</name>
        </action>
    </reference>
</default>`,
                        "xml"
                    )
                ]
            ]),
            rightAnswers: "B,D"
        }
    ],

    [
        60,
        {
            question: `Given the following code, what color is the word "sale"?
${highlightText(`<style>`, "xml")}
${highlightText(
                `    strong            { color: #AA0000; }
    #container        { color: #000000; }
    #container strong { color: #000099; }
    .sale strong      { color: #AA9900; }`,
                "css"
            )}
${highlightText(
                `</style>
<div id="container">
    <p>
        <strong>Hooray!</strong>
        This item is on <span class="sale"><strong>sale</strong></span>
    </p>
</div>`,
                "xml"
            )}`,
            answers: new Map([
                ["A", "#AA0000"],
                ["B", "#000000"],
                ["C", "#000099"],
                ["D", "#AA9900"]
            ]),
            rightAnswers: "C"
        }
    ],

    [
        69,
        {
            question: `Which one of the following methods assigns a custom template to the product compare sidebar block?`,
            answers: new Map([
                [
                    "A",
                    highlightText(
                        `<action block="catalog.compare.sidebar" method="setTemplate">
    <tpl>my/custom/template.phtml</tpl>
</action>`,
                        "xml"
                    )
                ],
                [
                    "B",
                    highlightText(
                        `<action block="catalog.compare.sidebar" method="setData">
    <key>template</key>
    <tpl>my/custom/template.phtml</tpl>
</action>`,
                        "xml"
                    )
                ],
                [
                    "C",
                    highlightText(
                        `<action block="catalog.compare.sidebar"
    method="setTemplate"
    template="my/custom/template.phtml"/>`,
                        "xml"
                    )
                ],
                [
                    "D",
                    highlightText(
                        `<block type="core/template" parent="catalog.compare.sidebar"
     template="my/custom/template.phtml"/>`,
                        "xml"
                    )
                ]
            ]),
            rightAnswers: "A"
        }
    ],

    [
        71,
        {
            question: `Which code snippet shows the correct way to add a JavaScript file from your custom theme to all Magento pages?`,
            answers: new Map([
                [
                    "A",
                    highlightText(
                        `<default>
    <reference name="head">
        <action method="addItem">
            <type>skin_js</type>
            <name>js/custom.js</name>
        </action>
    </reference>
</default>`,
                        "xml"
                    )
                ],
                [
                    "B",
                    highlightText(
                        `<homepage>
    <reference name="head">
        <action method="addItem">
            <type>skin_js</type>
            <name>js/custom.js</name>
        </action>
    </reference>
</homepage>`,"xml")
                ],
                [
                    "C",
                    highlightText(
                        `<default>
    <reference name="top">
        <action method="addItem">
            <type>skin_js</type>
            <name>js/custom.js</name>
        </action>
    </reference>
</default>`,
                        "xml"
                    )
                ],
                [
                    "D",
                    highlightText(
                        `<default>
    <reference name="head">
        <action method="addJs">
            <script>custom.js</script>
        </action>
    </reference>
</default>`,
                        "xml"
                    )
                ]
            ]),
            rightAnswers: "A"
        }
    ],

    [
        85,
        {
            question: `Which two of the following examples can be used to include a custom JavaScript on every page?`,
            answers: new Map([
                [
                    "A",
                    highlightText(
                        `<default>
    <reference name="head">
        <action method="addItem"><name>js/my_script.js</name></action>
    </reference>
</default>`,
                        "xml"
                    )
                ],
                [
                    "B",
                    highlightText(
                        `<default>
    <reference name="head">
        <action method="addItem"><type>skin_is</type><name>js/my_script.js</name></action>
    </reference>
</default>`,
                        "xml"
                    )
                ],
                [
                    "C",
                    highlightText(
                        `<default>
    <reference name="head">
        <action method="addSkinJs"><script>js/my_script.js</script></action>
    </reference>
</default>`,
                        "xml"
                    )
                ],
                [
                    "D",
                    highlightText(
                        `<default>
    <reference name="head">
        <action method="addJs"><script>my_folder/my_script.js</script></action>
    </reference>
</default>`,
                        "xml"
                    )
                ],
                [
                    "E",
                    highlightText(
                        `<default>
    <reference name="head">
        <action method="addJavaScript">
            <script>my_folder/my_script.js></script>
        </action>
    </reference>
</default>`,
                        "xml"
                    )
                ]
            ]),
            rightAnswers: "B,D"
        }
    ],

    [
        86,
        {
            question: `Given the layout XML example below, which one of the following actions will cause the title, Some Title, to be translated by Magento?<br>EXAMPLE:<br>${highlightText(
                `<action method="something">
    <title>Some Title</title>
    <message>Some message</message>
</action>`,
                "xml"
            )}

`,
            answers: new Map([
                [
                    "A",
                    `Add the strings <code>"Some Title", "Ein Titel"</code> to a translation CSV file.`
                ],
                [
                    "B",
                    `Change the XML as follows:<br>${highlightText(
                        `<action method="something" translate="title">
    <title>Some Title</title>
    <message>Some message</message>
</action>`,
                        "xml"
                    )}`
                ],
                [
                    "C",
                    `Change the XML as follows:<br>${highlightText(
                        `<action method="something">
    <title translate="en_US, de_DE">Some Title</title>
    <message>Some message</message>
</action>`,
                        "xml"
                    )}`
                ],
                [
                    "D",
                    `Change the XML as follows:<br>${highlightText(
                        `<action method="something">
    <title>
        <en_US>Some Title</en_US>
        <de_DE>Some Title</de_DE>
    </title>
    <message>Some message</message>
</action>`,
                        "xml"
                    )}`
                ]
            ]),
            rightAnswers: "B"
        }
    ],

    [
        90,
        {
            question: `What type of block is created by the code below?${highlightText(
                `<block type="core/text_list" name="left" as="left" translate="label">
    <label>Left Column</label>
</block>`,
                "xml"
            )}

            `,
            answers: new Map([
                ["A", `Content block`],
                ["B", `Text block`],
                ["C", `Structural block`],
                ["D", `Bulleted list block`],
                ["E", `Navigation block`]
            ]),
            rightAnswers: "C"
        }
    ],

    [
        92,
        {
            question: `If you open an HTML document with the following code sample in the browser, what will you see in the text of the two Alerts in the browser?<br>SAMPLE:<br>${highlightText(
                `<html>
    <head>
        <script src="http://ajax.googleapis.com/ajax/libs/prototype/1.7.1.0/prototype.js"
                type="text/javascript"></script>
    </head>
    <body>
        <script type="text/javascript">
            var someFunction = function() {
                return Try.these(
                    function() {
                        variable;
                        alert(1);
                        return 1;
                    },
                    function() {
                        alert(2);
                        return 2;
                        variable;
                    }
                ) || false;
            }
            alert(someFunction());
        </script>
    </body>
</html>`,
                "xml"
            )}`,
            answers: new Map([
                [
                    "A",
                    `${highlightText(
                        `1`,
                        "javascript",
                        true
                    )} and ${highlightText(`1`, "javascript", true)}`
                ],
                [
                    "B",
                    `${highlightText(
                        `2`,
                        "javascript",
                        true
                    )} and ${highlightText(`2`, "javascript", true)}`
                ],
                [
                    "C",
                    `${highlightText(
                        `1`,
                        "javascript",
                        true
                    )} and ${highlightText(`undefined`, "javascript", true)}`
                ],
                [
                    "D",
                    `${highlightText(
                        `2`,
                        "javascript",
                        true
                    )} and ${highlightText(`false`, "javascript", true)}`
                ],
                [
                    "E",
                    `${highlightText(
                        `false`,
                        "javascript",
                        true
                    )} and ${highlightText(`false`, "javascript", true)}`
                ],
                [
                    "F",
                    `${highlightText(
                        `undefined`,
                        "javascript",
                        true
                    )} and ${highlightText(`undefined`, "javascript", true)}`
                ]
            ]),
            rightAnswers: "B"
        }
    ],

    [
        97,
        {
            question: `A block named newsletter is already defined in the layout XML, as in the example shown below. The page on which the block is visible has a three-column layout. How can you move the block from the left column to the right column?<br>EXAMPLE:<br>${highlightText(
                `<default>
    <reference name="left">
        <block type="newsletter/subscribe"
               name="newsletter"
               template="newsletter/subscribe.phtml" />
    </reference>
</default>`,
                "xml"
            )}`,
            answers: new Map([
                [
                    "A",
                    highlightText(
                        `<default>
    <reference name="left">
        <remove name="left.newsletter" />
    </reference>
    <reference name="right">
        <action method="insert">
            <block>newsletter</block>
        </action>
    </reference>
</default>`,
                        "xml"
                    )
                ],
                [
                    "B",
                    highlightText(
                        `<default>
    <reference name="left">
        <action method="unsetChild">
            <name>newsletter</name>
        </action>
    </reference>
    <reference name="right">
        <action method="insert">
            <block>newsletter</block>
        </action>
    </reference>
</default>`,
                        "xml"
                    )
                ],
                [
                    "C",
                    highlightText(
                        `<default>
    <reference name="right">
        <action method="insert">
            <block>newsletter</block>
        </action>
    </reference>
</default>`,
                        "xml"
                    )
                ],
                [
                    "D",
                    highlightText(
                        `<default>
    <reference name="left">
        <action method="unsetChild"><name>newsletter</name></action>
    </reference>
</default>`,
                        "xml"
                    )
                ]
            ]),
            rightAnswers: "B"
        }
    ],

    [
        101,
        {
            question: `Which is the proper XML markup for creating a new content block containing the content from a CMS static block?`,
            answers: new Map([
                [
                    "A",
                    highlightText(
                        `<block type=" core/template" name="cms.block">
    <action method="setBlockIdentifier">cms_block_name</action>
</block>`,
                        "xml"
                    )
                ],
                [
                    "B",
                    highlightText(
                        `<block type="cms/block" name="cms.block">
    <action method="setBlockId">
        <block_id>cms_block_identifier</block_id>
    </action>
</block>`,
                        "xml"
                    )
                ],
                [
                    "C",
                    highlightText(
                        `<block type="cms/block" name="cms.block">
    <action method="setBlockId">cms_block_identifier</action>
</block>`,
                        "xml"
                    )
                ],
                [
                    "D",
                    highlightText(
                        `<block type="cms/block" name="cms.block">
    <action method="setBlockIdentifier">
        <block_identifier>cms_block_name</block_identifier>
    </action>
</block>`,
                        "xml"
                    )
                ]
            ]),
            rightAnswers: "B"
        }
    ],

    [
        102,
        {
            question: `Given a configured package <code>mypackage</code>, which of the following sequences of design fallback steps is correct?`,
            answers: new Map([
                [
                    "A",
                    `mypackage/[type-specific-theme] -><br>mypackage/[configured-default] -><br>mypackage/default -><br>base/default`
                ],
                [
                    "B",
                    `mypackage/[type-specific-theme] -><br>mypackage/default -><br>default/default -><br>base/default`
                ],
                [
                    "C",
                    `mypackage/[configured-default] -><br>mypackage/[type-specific-theme] -><br>mypackage/default`
                ],
                [
                    "D",
                    `mypackage/[configured-default] -><br>mypackage/default -><br>default/default`
                ]
            ]),
            rightAnswers: "A"
        }
    ],

    [
        103,
        {
            question: `A website contains the three store views English, French, and German, with the following settings configured:
<br>
<br>
<b>Default scope:<br>
&nbsp;&nbsp;&nbsp;&nbsp;Package: default<br>
&nbsp;&nbsp;&nbsp;&nbsp;Default theme: <empty><br>
Website scope:<br>
&nbsp;&nbsp;&nbsp;&nbsp;Package; package1<br>
&nbsp;&nbsp;&nbsp;&nbsp;Default theme: theme1<br>
"English" store view scope:<br>
&nbsp;&nbsp;&nbsp;&nbsp;Default theme: theme2<br>
"French" store view scope:<br>
&nbsp;&nbsp;&nbsp;&nbsp;Template theme: theme3</b>
<br>
<br>
The template file <code>template/page/1column.phtml</code> exists within the following frontend themes:
<br>
<br>
<b>base/default<br>
default/default<br>
package1/default<br>
package1/theme2<br>
package1/theme3</b><br>`,
            answers: new Map([
                ["A", "base/default"],
                ["B", "default/default"],
                ["C", "package1/default"],
                ["D", "package1/theme1"],
                ["E", "package1/theme2"],
                ["F", "package1/theme3"]
            ]),
            rightAnswers: "C"
        }
    ],

    [
        104,
        {
            question: `What result will be produced by the following layout handle?
${highlightText(
                `<catalog_category_layered>
    <reference name="left">
        <action method="unsetChild"><name>catalog.leftnav</name></action>
    </reference>
    <reference name="content">
        <action method="insert"><child>catalog.leftnav</child></action>
    </reference>
</catalog_category_layered>`,
                "xml"
            )}`,
            answers: new Map([
                [
                    "A",
                    `On a non-anchored category page the layered navigation will be moved into the main content block.`
                ],
                [
                    "B",
                    `On an anchored category page the layered navigation will be moved into the main content block.`
                ],
                [
                    "C",
                    `On an anchored category page the layered navigation will be removed from the page.`
                ],
                ["D", `This XML will produce a syntax error.`]
            ]),
            rightAnswers: "B"
        }
    ]
]);