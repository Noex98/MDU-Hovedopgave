import { css } from '@emotion/react'

export const fontPath = './assets/fonts'

export const fontFace = css(`

    @font-face {
        font-family: 'COOP-Bold';
        src: local(COOP-Bold),
            url('${fontPath}/COOP-Bold.otf') format('otf');
        font-weight: normal;
    }
    @font-face {
        font-family: 'COOP-Light.otf';
        src: local(COOP-Light.otf),
            url('${fontPath}/COOP-Light.otf') format(otf);
        font-weight: normal;
    }
    @font-face {
        font-family: 'COOP-Medium.otf';
        src: local(COOP-Medium.otf),
            url('${fontPath}/COOP-Medium.otf') format(otf);
        font-weight: normal;
    }
    @font-face {
        font-family: 'COOP-Regular.otf';
        src: local(COOP-Regular.otf),
            url('${fontPath}/COOP-Regular.otf') format(otf);
        font-weight: normal;
    }
    @font-face {
        font-family: 'COOP-SemiBold.otf';
        src: local(COOP-SemiBold.otf),
            url('${fontPath}/COOP-SemiBold.otf') format(otf);
        font-weight: normal;
    }
`);