/**
 * Created by liuyujing on 16/10/14.
 */

window.corouselView = window.corouselView||{};

(function () {
    function Init(_superView,_datas) {
        this.datas = _datas;
        this.views = [];
        this.backgroundView = _superView;
        this.pageIndex = 0;
        this.timer = null;
    }
    Init.prototype.createSingleView = function (imagePath,toUrl) {
        var backgroundImageView = document.createElement("a");
        backgroundImageView.href = toUrl;
        var image = document.createElement("img");
        image.src = imagePath;
        backgroundImageView.appendChild(image);
        backgroundImageView.className = "imageView";
        return backgroundImageView;
    };
    Init.prototype.getSingleViews = function () {
        //判断是否传入了图片的数据
        if (this.datas&&this.datas.length!=0){
            if (this.views.length===0){
                for (var i=0;i<this.datas.length;i++){
                    var info = this.datas[i];
                    this.views.push(this.createSingleView(info.imagePath,info.toUrl));
                }
                return this.views;
            }else {
                return this.views;
            }
        }else {
            return [];
        }
    };
    Init.prototype.showFirstPage = function (pageNum) {
        if (pageNum<this.datas.length){
            this.backgroundView.appendChild(this.getSingleViews()[pageNum]);
        }else {
            console.log("超过总共的页数了~");
        }
    };
    Init.prototype.createControlButton = function () {
        var preButton = document.createElement("div");
        preButton.textContent = "<";
        var nextButton = document.createElement("div");
        nextButton.textContent = ">";
        preButton.className = "preButton";
        nextButton.className = "nextButton";
        this.backgroundView.appendChild(preButton);
        this.backgroundView.appendChild(nextButton);

        var self = this;
        preButton.onclick = function () {
            self.prePage();
        };
        nextButton.onclick = function () {
            self.nextPage();
        };
    };

    Init.prototype.nextPage = function () {
        this.pageIndex++;
        this.pageIndex = this.pageIndex==this.datas.length?0:this.pageIndex;
        this.updataPage();
    };

    Init.prototype.prePage = function () {
        this.pageIndex--;
        this.pageIndex = this.pageIndex==-1?this.datas.length-1:this.pageIndex;
        this.updataPage();
    };
    Init.prototype.updataPage = function () {
        var lastPage = document.querySelector("#"+this.backgroundView.getAttribute("id")+" .imageView");
        console.log(lastPage);
        this.backgroundView.removeChild(lastPage);
        this.backgroundView.appendChild(this.getSingleViews()[this.pageIndex]);
    };
    Init.prototype.startTimer = function (delay) {
        if (this.timer){
            clearInterval(this.timer);
        }
        var self = this;
        this.timer = setInterval(function () {
            self.nextPage();
        },delay);
    };
    Init.prototype.stopTimer = function () {
        if (this.timer){
            clearInterval(this.timer);
        }
    };

    Init.prototype.createCarouselView = function () {
        //显示第一个页面
        this.showFirstPage(0);
        //显示添加控制按钮
        this.createControlButton();
    };

    Init.prototype.putSuperView = function () {
        this.backgroundView.style.cssText = "position:relative;overflow:hidden";
        this.createCarouselView();
    };

    corouselView.Init = Init;
})();
