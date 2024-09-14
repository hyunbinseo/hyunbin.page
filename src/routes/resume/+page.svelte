<script lang="ts">
	import '../../tailwind.css';

	import 'pretendard/dist/web/variable/pretendardvariable.css';
	import 'print-friendly';
	import profile from './profile.avif';
</script>

{#snippet anchor(text: string, href: string)}
	<a {href} target="_blank">{text}</a>
{/snippet}

<header class="mb-[2em] text-center text-smallish max-a4x:px-[2em]">
	직접 개발한 {@render anchor(
		'print-friendly',
		'https://github.com/hyunbinseo/print-friendly#readme'
	)}를 사용해 작성된,
	<span class="xxs:inline-block">종이와 스크린에 모두 최적화된 웹 문서입니다.</span>
</header>

<section class="page">
	<header class="flex h-40 justify-between">
		<div class="flex flex-col">
			<h1 class="text-2xl font-bold">공개적으로 기록하고 공유합니다.</h1>
			<p class="mt-0.5">오픈소스에 진심인 5년 차 개발자 서현빈입니다.</p>
			<ul class="mt-auto list-inside list-disc">
				<li>GitHub <a href="https://github.com/hyunbinseo/">@hyunbinseo</a></li>
				<li>LinkedIn <a href="https://www.linkedin.com/in/hyunbinseo/">@hyunbinseo</a></li>
				<li>Email <a href="mailto:hyunbin@duck.com">hyunbin@duck.com</a></li>
			</ul>
		</div>
		<img src={profile} class="aspect-square shrink-0 max-sm:hidden" alt="서현빈 증명사진" />
	</header>
	<article class="mt-10">
		<h2 class="text-xl font-semibold">소개</h2>
		<p class="mt-2">
			2016년, 성인이 되자마자 창업을 시작해 꾸준히 이어오고 있습니다. VR Haptic 기업인
			<a
				href="https://www.chosun.com/site/data/html_dir/2016/07/03/2016070301029.html"
				target="_blank">리얼햅틱스</a
			>를 시작으로, 현재는 '다양한학습자를위한(주)'를 공동 설립해 기술이사로 근무 중입니다. 창업을
			도구 삼아 세상의 문제를 해결하는데 늘 흥미를 느끼며, 최근에는 사회적 배려가 필요한 학습자에게 {@render anchor(
				'증거기반의 과학적 교수학습',
				'https://home.ebs.co.kr/ebsnews/menu2/newsVodView/noon/60428848/H'
			)}을 제공 중입니다. 이를 인정받아 2024년 {@render anchor(
				'예비 사회적 기업',
				'https://www.socialenterprise.or.kr/social/ente/resepConcept.do?m_cd=E008'
			)}으로 지정됐으며, 사회적 기업 인증을 준비하고 있습니다.
		</p>
	</article>
	<article class="mt-10">
		<h2 class="text-xl font-semibold">COO에서 CTO로</h2>
		<p class="mt-2">
			2020년부터 소프트웨어 개발을 독학해 지금은 자사 서비스를 직접 작성하는 기술이사가 되었습니다.
			그전까지는 운영총괄을 맡으며 신규 사업 제안, 투자 유치 등에 집중했으며, 그 과정에서 노무, 세무
			등 실무도 겸했었습니다.
		</p>
	</article>
	<article class="mt-10">
		<h2 class="text-xl font-semibold">"오픈소스 개발자, 창업가"</h2>
		<p class="mt-2">
			다소 모순적으로 보이는 두 가지를 모두 하고 있습니다. 소규모 스타트업에서는 이미 공개된
			오픈소스를 활용해서 빠르게 개발하고 사업화하는 것이 중요하다고 생각할 수 있으나, OSS를 활용한
			뒤 생각이 완전히 바뀌었습니다.
		</p>
		<h3 class="mt-10 text-lg font-semibold">발견한 문제를 기록합니다.</h3>
		<p class="mt-4">
			오픈소스 소프트웨어 버그를 직접 수정하는 것이 유일하고 진정한 기여 방법이라고 생각했습니다.
			하지만 OSS를 사용하다 보니 겪은 문제나 제안 사항을 공개적으로 기록하는 것 또한 중요함을 알게
			됐습니다. GitHub Issue 상에 게시된 글과 댓글을 통해 어떤 문제가 있는지, 어떻게 해결되고 있는지
			등을 확인하고 공유하기 때문입니다.
		</p>
		<p class="mt-4">
			그래서 개발 도중에 마주친 문제 중 아직 기록되지 않는 것은 무조건 시간을 할애해 기록합니다.
			그리고 확실하고 간결한 {@render anchor(
				'Minimal reproducible example',
				'https://en.wikipedia.org/wiki/Minimal_reproducible_example'
			)}을 작성하기 위해, 우회 방법을 발견해 기록하려고 노력합니다. 이를 통해 커뮤니티 구성원,
			그리고 비슷한 문제를 겪고 있을 제 미래 시행착오를 줄일 수 있음에 큰 보람을 느낍니다.
		</p>
		<h3 class="mt-10 text-lg font-semibold">직접 개발해서 공개합니다.</h3>
		<p class="mt-4">
			비슷한 맥락에서 "내가 반복해서 필요한데, 남들도 필요하지 않을까?"라는 생각으로 새로운 오픈소스
			프로젝트를 만들기도 합니다. 구글 캘린더에 대한민국 공휴일이 제대로 표시되지 않아 만든 {@render anchor(
				'공개 캘린더 및 패키지',
				'https://github.com/hyunbinseo/holidays-kr'
			)}, macOS를 처음 쓰고 파일명 자소 분리에 괴로워하다 만든 {@render anchor(
				'자모야 모여라',
				'https://github.com/hyunbinseo/jamoya.one'
			)}가 대표적입니다. 또한 이러한 프로젝트들을 꾸준히 유지보수하면서 새롭게 배운 개발 지식, 신규
			런타임 API를 가장 먼저 적용하는 장으로 활용하고 있습니다.
		</p>
	</article>
</section>

<style lang="postcss">
	:root {
		font-family: 'Pretendard Variable', sans-serif;
	}
	a {
		@apply cursor-pointer text-[#0000EE] underline visited:text-[#551A8B] active:text-[#FF0000];
	}
	@page {
		size: A4 portrait;
		margin: 0.5in;
	}
	@media print {
		:root {
			@apply break-keep;
		}
	}
	@media screen {
		:root {
			@apply a4:break-keep;
			--page-width: 21cm;
			--page-height: 29.7cm;
			--page-padding: 0.25in;
			--page-gap-y: 0.5in;
		}
	}
	@media screen and (min-width: 23.54cm) {
		:root {
			--page-min-height: var(--page-height);
			--page-padding: 0.5in;
			--page-gap-y: 0.75in;
		}
	}
</style>
