import microApp from '@micro-zoe/micro-app';
import React, { memo } from 'react';

// ! 使用setGlobalData前请先获取之前的数据，做数据合并，否则可能数据丢失出现bug

const Child = memo(() => {

	return (
		<div>
			<micro-app
				onMounted={() => {
					console.log('子应用已加载！')
				}}
				name="child"
				url="http://localhost:3001"
				baseurl="/child"
			/>
		</div>
	);
});

export default Child;
