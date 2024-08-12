export function useCopyToClipboard(val) {
    let isSuccessRef = false;

    //创建input标签
    var input = document.createElement("input");
    //将input的值设置为需要复制的内容
    input.value = val;
    //添加input标签
    document.body.appendChild(input);
    //选中input标签
    input.select();
    //执行复制
    document.execCommand("copy");
    if (document.execCommand("copy")) {
        isSuccessRef = true;
    } else {
        isSuccessRef = false;
    }
    //移除input标签
    document.body.removeChild(input);

    return { isSuccessRef };
}
