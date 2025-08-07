// src/components/ProfileCard.jsx
import Image from "next/image";
import { Star, MessageCircle } from "lucide-react";

export default function ProfileCard({
  imageSrc,
  name,
  title,
  company,
  flagSrc,
  logoSrc,
  matchPercent,
  expertise,
  isRepresentative = false,
}) {
  return (
    <div className="relative w-full max-w-md p-4 rounded-2xl bg-white shadow-md transition-all duration-500 transform hover:scale-101">
      {isRepresentative && (
        <div className="absolute -top-3 left-4 bg-gray-100 text-gray-400 text-xs px-3 py-1 rounded-full flex items-center gap-1 font-semibold">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAD5UlEQVR4nO1YS29NURT+0ldIRJQBSWvSgUq0Hg0pei/C1GNEiFcwxtCQH0A8Zl53n3oNbhh4tdrSgTZB50QHFa9EGFSpokI/+e4+163bc+7z3PaSu5KVnJy999rft/faa629gZKUpDiEEeynQT8NPtGggxFsYhTlMXWwmQ46aTBMB8/pYB+KSWhwgA7ood9pMOrZFsF+FIMwgiYafPEh4K/ajVYsm3zAUUxnBGEa7KSD03QwkjX4hI7EbMiWbEYxvbDgW7GKBm/yAJxOX9NgZeFWPh34q5XkrWqyez7ZU0c+XmBV3/qntisVmZCYFjwBbbHfpALVMY/sqyf7FqbWJwvJ+zXktUp/Eq0IBU/AYLfnZDdm2FWOgasnH9aQXTPJ9iryTplVfeuf2tRHfTXmxgw/EruCJ+DgzISJ5BJaUQHqqSHbKsnbSK3qo77x3bhV7RWhTgUfKpOjjVZPAKTds9MDT9YHcxLjJ+7ESGAhNpakkuO8fD7uNrmAH0+iz3Wn5MOtPJFvslPK9/TRznkJt8kVfFx7XHdSEPA+0HvzIfDcM1TGD2wmPp9O26vcg13vF2Kf5k7AFl8TD64IKKLkC/62q7Ilmzc9DrSDj/nsQOcEg0pImkxhMSgCXTPd81TrFZHu5U5AJXGywd46O1lbVXAE2qvcM1XndQY25k7A1vLf/zIYjz53y4IjcLcsEY3+JvCNR1FW/ATupCAQRfm/40K9QbtQcRzijn8ojM7yCqNDwSYyJRslnaASWVuaRGbwLPhSoiPIUqK2cKWEbzF3dVwxp4IsV/DdbjH3yKeYMziQF/iMy+lcSIwvp68nldNaMIOlgYD/Q8K+QKS+0CgcZuLzD2tTX2gcnAwUvEtgl6ePavXi7tSXdKVUspO2eVwp5TbXJ/NKmepSf7mcvDc3s0u9+ujApnqdaC3EpT6TZxWBUix/UGuzavxZRd9KUmpL96xi8KogzyoxEgYrY+82qQDkowaveAnNBQE/jsQ0bfH7beDQQXDsQu6Axy6AQ4dA2ZLNgq28lww0gNK3G8Cx89mD/3UOfLPe2pBisuVzM/h6iZ38ww6fFb5o1atNYwYarA3ZmnQCDIOjq8EXjS6J7eCPE+Cvs+DXY+C7LeCA2hrtt/6pTX3UV2NeNFgbsjUlBKTDzRbIQJaqMV+arY0pJRDfifdN4MvGhFsMLgd/tlgdXGH/abdeLgY/NCVWnsVAIAhFiUCW8v8SCOEnw+hlCEfYgkUMoY5rcJhhdDGM0WIlMMgwomzBHoZQ7TsmhGqGsJVhXHLHcCoJ9DOE42zBOq5FRdbj16IiNlY2wugvDMqSlATp5Dc3bvlL9IxbzQAAAABJRU5ErkJggg=="
            alt="prize"
            className="w-4 h-4"
          />
          REPRESENTATIVE
        </div>
      )}

      <div className="flex items-start justify-between gap-4">
        <div className="relative w-24 h-24">
          <Image
            src={imageSrc}
            alt={`${name} profile`}
            className="rounded-full object-cover"
            fill
          />
          {flagSrc && (
            <Image
              src={flagSrc}
              alt="Flag"
              width={24}
              height={24}
              className="absolute bottom-0 right-0 rounded-full border border-white"
            />
          )}
        </div>

        <div className="flex-1">
          <h2 className="text-xl font-bold text-[#b29a59] leading-snug">
            {name}
          </h2>
          <p className="text-sm text-gray-500">{title}</p>
          <p className="text-sm text-gray-500">{company}</p>
          <p className="mt-2 font-semibold text-indigo-900">{expertise}</p>
        </div>

        {logoSrc && (
          <div className="w-20 h-10 relative">
            <Image
              src={logoSrc}
              alt="Company Logo"
              fill
              className="object-contain"
            />
          </div>
        )}
      </div>

      {/* Match bar */}
      <div className="flex items-center gap-2 mt-4">
        <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-indigo-900"
            style={{ width: `${matchPercent}%` }}
          />
        </div>
        <span className="text-black font-semibold text-sm whitespace-nowrap">
          {matchPercent}% Match
        </span>
        <Star className="stroke-[#c2b281]" fill="transparent" size={20} />
      </div>

      {/* Action buttons */}
      <div className="flex gap-2 mt-4">
        <button className="flex-1 border border-[#b29a59] text-[#b29a59] font-semibold py-2 rounded-xl text-sm cursor-pointer bg-transparent transition-all duration-200 transform hover:scale-105 hover:bg-[#b29a59] hover:text-white">
          Intro request
        </button>
        <button className="flex-1 border border-[#b29a59] text-[#b29a59] font-semibold py-2 rounded-xl text-sm cursor-pointer bg-transparent transition-all duration-200 transform hover:scale-105 hover:bg-[#b29a59] hover:text-white">
          Private Meeting
        </button>
        <button className="flex items-center justify-center bg-[#b29a59] text-white px-4 py-2 rounded-xl cursor-pointer transition-all duration-200 transform hover:scale-107 hover:bg-[#9e884c]">
          <MessageCircle size={18} />
        </button>
      </div>
    </div>
  );
}
