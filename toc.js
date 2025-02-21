// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded affix "><a href="0.简介.html">简介</a></li><li class="chapter-item expanded "><a href="1.初识安全与非安全代码.html"><strong aria-hidden="true">1.</strong> 初识安全与非安全代码</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="1.1.安全与非安全代码的交互方式.html"><strong aria-hidden="true">1.1.</strong> 安全与非安全代码的交互方式</a></li><li class="chapter-item expanded "><a href="1.2.非安全Rust能做什么.html"><strong aria-hidden="true">1.2.</strong> 非安全Rust能做什么</a></li><li class="chapter-item expanded "><a href="1.3.编写非安全代码.html"><strong aria-hidden="true">1.3.</strong> 编写非安全代码</a></li></ol></li><li class="chapter-item expanded "><a href="2.数据布局.html"><strong aria-hidden="true">2.</strong> 数据布局</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="2.1.repr(Rust).html"><strong aria-hidden="true">2.1.</strong> repr(Rust)</a></li><li class="chapter-item expanded "><a href="2.2.类型中的奇行种.html"><strong aria-hidden="true">2.2.</strong> 类型中的奇行种</a></li><li class="chapter-item expanded "><a href="2.3.其他repr.html"><strong aria-hidden="true">2.3.</strong> 其他repr</a></li></ol></li><li class="chapter-item expanded "><a href="3.所有权.html"><strong aria-hidden="true">3.</strong> 所有权</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="3.1.引用.html"><strong aria-hidden="true">3.1.</strong> 引用</a></li><li class="chapter-item expanded "><a href="3.2.别名.html"><strong aria-hidden="true">3.2.</strong> 别名</a></li><li class="chapter-item expanded "><a href="3.3.生命周期.html"><strong aria-hidden="true">3.3.</strong> 生命周期</a></li><li class="chapter-item expanded "><a href="3.4.生命周期的局限.html"><strong aria-hidden="true">3.4.</strong> 生命周期的局限</a></li><li class="chapter-item expanded "><a href="3.5.省略生命周期.html"><strong aria-hidden="true">3.5.</strong> 省略生命周期</a></li><li class="chapter-item expanded "><a href="3.6.无界生命周期.html"><strong aria-hidden="true">3.6.</strong> 无界生命周期</a></li><li class="chapter-item expanded "><a href="3.7.高阶trait边界.html"><strong aria-hidden="true">3.7.</strong> 高阶trait边界</a></li><li class="chapter-item expanded "><a href="3.8.子类型和变性.html"><strong aria-hidden="true">3.8.</strong> 子类型和变性</a></li><li class="chapter-item expanded "><a href="3.9.Drop检查.html"><strong aria-hidden="true">3.9.</strong> Drop检查</a></li><li class="chapter-item expanded "><a href="3.10.PhantomData（幽灵数据）.html"><strong aria-hidden="true">3.10.</strong> PhantomData（幽灵数据）</a></li><li class="chapter-item expanded "><a href="3.11.分解借用.html"><strong aria-hidden="true">3.11.</strong> 分解借用</a></li></ol></li><li class="chapter-item expanded "><a href="4.类型转换.html"><strong aria-hidden="true">4.</strong> 类型转换</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="4.1.强制类型转换.html"><strong aria-hidden="true">4.1.</strong> 强制类型转换</a></li><li class="chapter-item expanded "><a href="4.2.点操作符.html"><strong aria-hidden="true">4.2.</strong> 点操作符</a></li><li class="chapter-item expanded "><a href="4.3.显式类型转换.html"><strong aria-hidden="true">4.3.</strong> 显式类型转换</a></li><li class="chapter-item expanded "><a href="4.4.变形.html"><strong aria-hidden="true">4.4.</strong> 变形</a></li></ol></li><li class="chapter-item expanded "><a href="5.未初始化内存.html"><strong aria-hidden="true">5.</strong> 未初始化内存</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="5.1.安全方式.html"><strong aria-hidden="true">5.1.</strong> 安全方式</a></li><li class="chapter-item expanded "><a href="5.2.Drop标志.html"><strong aria-hidden="true">5.2.</strong> Drop标志</a></li><li class="chapter-item expanded "><a href="5.3.非安全方式.html"><strong aria-hidden="true">5.3.</strong> 非安全方式</a></li></ol></li><li class="chapter-item expanded "><a href="6.基于所有权的资源管理.html"><strong aria-hidden="true">6.</strong> 基于所有权的资源管理</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="6.1.构造函数.html"><strong aria-hidden="true">6.1.</strong> 构造函数</a></li><li class="chapter-item expanded "><a href="6.2.析构函数.html"><strong aria-hidden="true">6.2.</strong> 析构函数</a></li><li class="chapter-item expanded "><a href="6.3.泄露.html"><strong aria-hidden="true">6.3.</strong> 泄露</a></li></ol></li><li class="chapter-item expanded "><a href="7.展开.html"><strong aria-hidden="true">7.</strong> 展开</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="7.1.异常安全性.html"><strong aria-hidden="true">7.1.</strong> 异常安全性</a></li><li class="chapter-item expanded "><a href="7.2.污染.html"><strong aria-hidden="true">7.2.</strong> 污染</a></li></ol></li><li class="chapter-item expanded "><a href="8.并发.html"><strong aria-hidden="true">8.</strong> 并发</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="8.1.竞争.html"><strong aria-hidden="true">8.1.</strong> 竞争</a></li><li class="chapter-item expanded "><a href="8.2.Send和Sync.html"><strong aria-hidden="true">8.2.</strong> Send和Sync</a></li><li class="chapter-item expanded "><a href="8.3.原子操作.html"><strong aria-hidden="true">8.3.</strong> 原子操作</a></li></ol></li><li class="chapter-item expanded "><a href="9.实现Vec.html"><strong aria-hidden="true">9.</strong> 实现Vec</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="9.1.布局.html"><strong aria-hidden="true">9.1.</strong> 布局</a></li><li class="chapter-item expanded "><a href="9.2.内存分配.html"><strong aria-hidden="true">9.2.</strong> 内存分配</a></li><li class="chapter-item expanded "><a href="9.3.push和pop.html"><strong aria-hidden="true">9.3.</strong> push和pop</a></li><li class="chapter-item expanded "><a href="9.4.回收资源.html"><strong aria-hidden="true">9.4.</strong> 回收资源</a></li><li class="chapter-item expanded "><a href="9.5.DeRef.html"><strong aria-hidden="true">9.5.</strong> DeRef</a></li><li class="chapter-item expanded "><a href="9.6.插入和删除.html"><strong aria-hidden="true">9.6.</strong> 插入和删除</a></li><li class="chapter-item expanded "><a href="9.7.IntoIter.html"><strong aria-hidden="true">9.7.</strong> IntoIter</a></li><li class="chapter-item expanded "><a href="9.8.RawVec.html"><strong aria-hidden="true">9.8.</strong> RawVec</a></li><li class="chapter-item expanded "><a href="9.9.Drain.html"><strong aria-hidden="true">9.9.</strong> Drain</a></li><li class="chapter-item expanded "><a href="9.10.处理零尺寸类型.html"><strong aria-hidden="true">9.10.</strong> 处理零尺寸类型</a></li><li class="chapter-item expanded "><a href="9.11.最终代码.html"><strong aria-hidden="true">9.11.</strong> 最终代码</a></li></ol></li><li class="chapter-item expanded "><a href="10.实现Arc和Mutex.html"><strong aria-hidden="true">10.</strong> 实现Arc和Mutex</a></li><li class="chapter-item expanded "><a href="11.FFI.html"><strong aria-hidden="true">11.</strong> FFI</a></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
