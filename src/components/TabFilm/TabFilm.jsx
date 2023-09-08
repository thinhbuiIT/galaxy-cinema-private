import React from 'react'
import { Tabs } from 'antd';


export default function TabFilm() {
    return (
        <Tabs defaultActiveKey="1">
            <Tabs.TabPane tab="Tab 1" key="1">
                Content of Tab 1
            </Tabs.TabPane>
            <Tabs.TabPane tab="Tab 2" key="2">
                Content of Tab 2
            </Tabs.TabPane>
            <Tabs.TabPane tab="Tab 3" key="3">
                Content of Tab 3
            </Tabs.TabPane>
        </Tabs>
    )
}
