# 화면별 피드백

`index.html`은 화면별 기능 명세를 확인하고 검토 이력을 브라우저의 `localStorage`에 저장합니다. 기존 `feedback/20261004_화면별_피드백.html`을 기반으로 구성했으며 이전 형식(`schemaVersion: 1`)의 피드백 JSON 백업을 가져올 수 있습니다.

## 기본 검토 목록

`resources/20261004_매물_검토목록.json`은 매물 화면 8개의 기본 목록입니다. `resources/manifest.json`에 등록된 파일이 페이지의 **기본 검토 목록** 영역에 표시됩니다. 목록을 여러 개 선택하고 **선택한 목록으로 초기화**를 누르면 feature와 version 조합을 기준으로 브라우저 저장소에 추가하거나 갱신합니다. 같은 조합을 다시 불러오면 확인 항목의 문구가 일치하는 결과와 기존 검토 이력을 유지합니다.

새 목록을 추가하려면 `resources`에 JSON 파일을 넣고 `manifest.json`의 `files` 배열에 파일 이름과 표시 이름을 추가하세요. 각 목록은 다음 형식을 사용합니다.

```json
{
  "feature": "properties",
  "version": "2026-10-04",
  "screens": [
    {
      "id": "PROP-001",
      "name": "매물 검색",
      "route": "/properties",
      "example": "/properties",
      "source": "src/app/(tabs)/properties.tsx",
      "purpose": "검토 목적",
      "features": [["기능 이름", "기능 설명"]],
      "checks": ["확인할 동작"],
      "boundaries": ["검토 시 참고할 제약"]
    }
  ]
}
```

파일을 직접 여는 경우에는 브라우저의 로컬 파일 접근 제한으로 `manifest.json`을 읽지 못할 수 있습니다. 이때는 페이지에 내장된 매물 기본 목록이 표시됩니다. GitHub Pages에서는 등록된 리소스가 표시됩니다.

검토 이력은 사용 중인 브라우저에만 남습니다. **수정 요청 일괄 저장**과 **전체 피드백 백업**은 현재 feature·version에서 가장 최근 이력 한 건만 다운로드합니다.
