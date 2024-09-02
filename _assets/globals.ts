import { GuideListGuide, PluginSettings, PluginUserOperations, ShowGuideSlideoutOptions } from './types'

const globalsElement = document.getElementById('guide-admin-globals')

export const devMode: boolean = globalsElement?.dataset?.devMode ? globalsElement.dataset.devMode === 'true' : false
export const guides: GuideListGuide[] = globalsElement?.dataset?.guides
  ? JSON.parse(globalsElement.dataset.guides)
  : null
export const proEdition: boolean = globalsElement?.dataset?.proEdition
  ? globalsElement.dataset.proEdition === 'true'
  : false
export async function showGuideSlideout({ docs = false, slug = '' }: ShowGuideSlideoutOptions) {
  if (proEdition) {
    await window.Craft?.postActionRequest(
      'guide/slideout',
      { docs, slug },
      (response: { data: string }, textStatus: string) => {
        if (textStatus === 'success') {
          const slideout = new window.Craft.Slideout(response.data)
          slideout.open()
          slideout.on('close', function () {
            slideout.destroy()
          })
        }
      }
    )
  }
}
export const settings: PluginSettings = globalsElement?.dataset?.settings
  ? JSON.parse(globalsElement.dataset.settings)
  : null
export const userOperations: PluginUserOperations = globalsElement?.dataset?.userOperations
  ? JSON.parse(globalsElement.dataset.userOperations)
  : null

// Set text to kebab-case
export function kebab(text: string) {
  /* eslint-disable */
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w\-]+/g, '') // Remove all non-word chars
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, '') // Trim - from end of text
  /* eslint-enable */
}
