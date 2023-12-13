const anbar = (function () {
    let mojodi = 0;

    function ezafekardan(sanad) {
        mojodi += sanad;
        console.log("کالای مورد نظر به انبار اضافه شد " + mojodi);
    }

    function kastan(sanad) {
        if (sanad <= mojodi) {
            mojodi -= sanad;
            console.log("کالای مورد نظر از انبار حذف گردید " + mojodi);
        } else {
            console.log("مقدار درخواستی بیشتر از موجودی انبار است.");
        }
    }

    function gereftanMojodi() {
        console.log("موجودی انبار برابر است با: " + mojodi + " عدد");
    }

    return {
        ezafe: ezafekardan,
        kam: kastan,
        gereftanMojodi: gereftanMojodi,
    };
})();

anbar.ezafe(50);
anbar.kam(20);
anbar.gereftanMojodi();
