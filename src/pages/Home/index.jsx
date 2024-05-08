import React, {useState, Suspense, lazy} from 'react';
import {debounce} from 'lodash';
import home from './index.module.css'; //引入的时候给一个名称

const Clock = lazy(() => import('@/components/Clock')); // 使用React.lazy进行路由懒加载

const Home = () => {
    const [currentTime, setCurrentTime] = useState(new Date());
    const [clocks, setClocks] = useState([]); // 用数组存储时钟组件
    const [loading, setLoading] = useState(false); // loading状态
    const [isRefreshing, setIsRefreshing] = useState(false); // 是否正在刷新中

    // 点击刷新时间 使用debounce进行防抖优化
    const refreshTime = debounce(() => {
        // 设置为正在刷新中
        setIsRefreshing(true);
        setCurrentTime(new Date());
        setTimeout(() => {
            // 刷新完成后取消正在刷新中状态
            setIsRefreshing(false);
        }, 500);
    }, 500);

    // 创建时钟，使用debounce进行防抖优化
    const createClock = debounce(() => {
        // 开始加载时显示loading
        setLoading(true);
        setTimeout(() => {
            // 添加一个新的时钟组件
            setClocks(prevClocks => [...prevClocks, <Clock key={prevClocks.length}/>]);
            // 完成时取消loading
            setLoading(false);
        }, 500);
    }, 500);

    return (<div id={home.box}>
        <table>
            <tbody>
            <tr>
                <td>
                    <h2>Aria 赖慧梅 Front-end engineer</h2>
                </td>
            </tr>
            <tr>
                <td>
                    <h2>{currentTime.toLocaleTimeString()}</h2>
                </td>
                <td>
                    {/* 根据isRefreshing状态显示不同的按钮文本 */}
                    <button className={home.button}
                            onClick={refreshTime}>{isRefreshing ? "更新中Loading..." : "Refresh Time"}</button>
                </td>
            </tr>
            <tr>
                <td>
                    <button className={home.button} onClick={createClock}>
                        {loading ? "加载中Loading..." : "Create Another Clock"}
                    </button>
                    <Suspense fallback={<div>Loading...</div>}>
                        {clocks.map((clock, index) => (<div key={index}>{clock}</div>))}
                    </Suspense>
                </td>
            </tr>
            </tbody>
        </table>
    </div>);
};

export default Home;
