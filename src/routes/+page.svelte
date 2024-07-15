<script lang="ts">
	import '../app.css';
	import profileImage from './profile.avif';

	const title = '서현빈 | Hyunbin Seo';
	const description = '오픈소스 개발자 겸 창업가';

	export let data;
</script>

<svelte:head>
	<title>{title}</title>
	<meta property="og:title" content={title} />
	<meta name="description" content={description} />
	<meta property="og:description" content={description} />
	<!-- Required for KakaoTalk. If not, a blank image is shown. -->
	<meta property="og:image" content="https://hyunbin.page/profile.png" />
</svelte:head>

<header>
	<div>
		<h1>서현빈</h1>
		<p>소프트웨어 개발자</p>
		<ul class="socials">
			{#each data.socialAnchors as [textContent, href]}
				<li>
					<a {href} target="_blank">{textContent}</a>
				</li>
			{/each}
		</ul>
	</div>
	<img src={profileImage} alt="서현빈 캐릭터" draggable="false" height="84" />
</header>

<section>
	<h2>오픈소스 프로젝트</h2>
	<span>Open Source Projects</span>
	<ul class="projects">
		{#each data.projectAnchors as [textContent, { description, href, badge }]}
			<li>
				<p>
					<a {href} target="_blank">{textContent}</a>
					{#if badge}
						<img src="https://img.shields.io{badge}" alt="GitHub 저장소 Star 배지" height="18" />
					{/if}
				</p>
				<span>{description}</span>
			</li>
		{/each}
	</ul>
</section>

<!-- TODO Add tech-stack section -->

<style>
	header {
		display: flex;
		justify-content: space-between;
	}

	header > img {
		border-radius: 0.375rem;
	}

	section {
		margin-top: 2.5rem;
	}

	h2 {
		padding-bottom: 0.125rem;
		border-bottom: solid 0.5px black;
		margin-bottom: 0.125rem;
	}

	h2 + span {
		font-size: 0.875rem;
	}

	ul {
		list-style-type: none;
	}

	ul.socials > li {
		font-size: 0.875rem;
		display: inline-block;
	}

	ul.socials > li:not(:first-child)::before {
		content: ' ⋅ ';
		white-space: pre;
	}

	ul.projects > li {
		margin-top: 1.25rem;
	}

	ul.projects > li > p {
		display: flex;
		align-items: center;
		column-gap: 0.5rem;
	}

	ul.projects > li > span {
		font-size: 0.875rem;
	}
</style>
