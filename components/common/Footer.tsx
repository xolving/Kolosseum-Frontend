'use client';

import { StyledFooter } from '@/app/service/styles/Tag';
import { H1 } from '@/app/service/styles/Text';

export default function Footer() {
  return (
    <StyledFooter className="border-t grid pt-6 my-10 gap-y-3">
      <div>
        <H1>Kolosseum</H1>
        <p className="text-neutral-600">역사를 잊은 민족에게 미래는 없다.</p>
      </div>
      <div>
        <p className="text-neutral-600">개발자 김동학 | me@fodo.dev</p>
        <p className="text-neutral-600">
          언제든 발견된 문제가 있다면 문의해주세요.
        </p>
      </div>
    </StyledFooter>
  );
}
