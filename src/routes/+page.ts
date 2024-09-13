type EmailHref = `mailto:${string}`;
type HttpsHref = `https://${string}`;

const socialAnchors: ReadonlyMap<string, EmailHref | HttpsHref> = new Map([
	['Email', 'mailto:hyunbin@duck.com'],
	['GitHub', 'https://github.com/hyunbinseo'],
	['LinkedIn', 'https://www.linkedin.com/in/hyunbinseo/']
]);

const projectAnchors: ReadonlyMap<
	string,
	{
		description: string;
		href: HttpsHref;
		badge?: string;
	}
> = new Map([
	[
		'대한민국의 공휴일',
		{
			description: '월력요항 기반의 오류 없는 공개 캘린더',
			href: 'https://github.com/hyunbinseo/holidays-kr#readme',
			badge: '/github/stars/hyunbinseo/holidays-kr'
		}
	],
	[
		'자모야 모여라',
		{
			description: '프로그램 설치 없는 파일명 자소 분리 해결',
			href: 'https://jamoya.one/',
			badge: '/github/stars/hyunbinseo/jamoya.one'
		}
	],
	[
		'민방위.kr',
		{
			description: '전국에서 참여 가능한 민방위 훈련 일정 조회',
			href: 'https://민방위.kr/'
		}
	]
]);

export const load = () => ({ socialAnchors, projectAnchors });
